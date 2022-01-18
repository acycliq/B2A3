// The animation loop. Code in the animate() function is getting executed on every tick

function animate() {
    requestAnimationFrame(animate);
    // mouseover();
    render();
    stats.update();
}

// var hoveredObjects = {};

function mouseover() {
    RAYCASTER.setFromCamera(MOUSE, CAMERA);
    // raycaster.far = 100;
    var target = SCENE.children.filter(d => (d.type === 'Points') & (d.visible));
    const intersects = RAYCASTER.intersectObjects(target, true);

    if (intersects.length && MOUSE.x) {
        $('html,body').css('cursor', 'pointer');
        var hoveredObj = intersects[0].object;
        var gene = hoveredObj.name,
            id = intersects[0].index;
        if (hoveredObjects['gene'] === gene && hoveredObjects['id'] === id) {
            // console.log('This spot has been hovered again')
        } else {
            // remove the old before adding the new
            SCENE.children.filter(d => d.uuid === hoveredObjects['uuid']).forEach(d => SCENE.remove(d));
            h = highlighter(gene, id);
            hoveredObjects['gene'] = gene;
            hoveredObjects['id'] = id;
            hoveredObjects['uuid'] = h.uuid;
            SCENE.add(h);
            console.log('Added highlighing for uuid: ' + h.uuid);
        }
    } else {
        $('html,body').css('cursor', 'default');
        if (hoveredObjects['gene']) {
            SCENE.children.filter(d => d.uuid === hoveredObjects['uuid']).forEach(d => SCENE.remove(d));
            console.log('removed uuid: ' + hoveredObjects['uuid']);
            delete hoveredObjects['gene'];
            delete hoveredObjects['id'];
            delete hoveredObjects['uuid'];
            hoveredObjects = {};
        }
    }
}

function setInstanceColor(instanceId, isHighlighting) {
    if (instanceId == -1) return;
    var _color;
    var original_color = CELLS_ARR[instanceId].color;
    var tc = {r: original_color.r * 255, g: original_color.g * 255, b: original_color.b * 255};
    var highlight_color = tinycolor(tc).desaturate(80).toRgb();
    highlight_color = new THREE.Color(highlight_color.r / 255, highlight_color.g / 255, highlight_color.b / 255)
    isHighlighting ? _color = highlight_color : _color = new THREE.Color(original_color.r, original_color.g, original_color.b);

    INSTANCEDMESH.front_face.instancedMesh.setColorAt(instanceId, _color);
    INSTANCEDMESH.front_face.instancedMesh.instanceColor.needsUpdate = true;
}

function setHightlightSphere(instanceId, isHighlighting) {
    var dummy = new THREE.Object3D();
    var highlight_sphere = new THREE.InstancedMesh(
        //provide geometry
        new THREE.SphereBufferGeometry(1, 24, 12),

        //provide material
        new THREE.MeshPhysicalMaterial(),

        //how many instances to allocate
        1
    );

    var coords = CELLS_ARR[instanceId].position,
        scales = CELLS_ARR[instanceId].scale,
        rot = CELLS_ARR[instanceId].rotation,
        color = new THREE.Color("yellow");
    dummy.position.set(coords.x, coords.y, coords.z);
    dummy.scale.set(scales.x, scales.y, scales.z);
    dummy.rotation.set(rot.x, rot.y, rot.z);
    dummy.updateMatrix();
    highlight_sphere.name = 'cell_highlight';
    highlight_sphere.setMatrixAt(0, dummy.matrix);
    highlight_sphere.setColorAt(0, new THREE.Color(color.r, color.g, color.b));

    SCENE.add(highlight_sphere)
    // instancedMesh.geometry.setPositionAt(i, trsCache[i].position);
    // instancedMesh.geometry.setScaleAt(i, uScale ? ss : trsCache[i].scale);
}

var attributes

function render() {
    RAYCASTER.setFromCamera(MOUSE, CAMERA);

    var target = SCENE.children.filter(d => (d.type === 'Points') & (d.visible));
    const intersects = RAYCASTER.intersectObjects(target, true);

    if (intersects.length > 0) {
        var particles = SCENE.children.filter(d => (d.type === 'Points') & (d.visible) & (d.name === intersects[0].object.name))[0]
        if (particles) {
            $('html,body').css('cursor', 'pointer');
            var geometry = particles.geometry;
            attributes = geometry.attributes;


            if (INTERSECTED.index != intersects[0].index && INTERSECTED.name != intersects[0].object.name) {
                if (INTERSECTED.uuid) {
                    var previous_particles = SCENE.children.filter(d => (d.type === 'Points') & (d.uuid === INTERSECTED.uuid))[0];
                    previous_particles.geometry.attributes.size.array[INTERSECTED.index] = CONFIGSETTINGS.particle_size;
                    previous_particles.geometry.attributes.size.needsUpdate = true;

                    previous_particles.geometry.attributes.mycolor.array[3 * INTERSECTED.index] = INTERSECTED.rgb[0];
                    previous_particles.geometry.attributes.mycolor.array[3 * INTERSECTED.index + 1] = INTERSECTED.rgb[1];
                    previous_particles.geometry.attributes.mycolor.array[3 * INTERSECTED.index + 2] = INTERSECTED.rgb[2];
                    previous_particles.geometry.attributes.mycolor.needsUpdate = true;

                    // previous_particles.geometry.attributes.position.array[3 * INTERSECTED.index] = INTERSECTED.position[0];
                    // previous_particles.geometry.attributes.position.array[3 * INTERSECTED.index + 1] = INTERSECTED.position[1];
                    // previous_particles.geometry.attributes.position.array[3 * INTERSECTED.index + 2] = INTERSECTED.position[2];
                    // previous_particles.geometry.attributes.position.needsUpdate = true;
                }

                attributes.size.array[INTERSECTED.index] = CONFIGSETTINGS.particle_size;
                INTERSECTED.rgb = [attributes.mycolor.array[3 * intersects[0].index],
                    attributes.mycolor.array[3 * intersects[0].index + 1],
                    attributes.mycolor.array[3 * intersects[0].index + 2],
                ];
                attributes.mycolor.array[3 * intersects[0].index] = 255;
                attributes.mycolor.array[3 * intersects[0].index + 1] = 255;
                attributes.mycolor.array[3 * intersects[0].index + 2] = 0;
                attributes.mycolor.needsUpdate = true;

                INTERSECTED.position = [attributes.position.array[3 * intersects[0].index],
                    attributes.position.array[3 * intersects[0].index + 1],
                    attributes.position.array[3 * intersects[0].index + 2],
                ];

                INTERSECTED.index = intersects[0].index;
                INTERSECTED.name = intersects[0].object.name;
                INTERSECTED.uuid = intersects[0].object.uuid;

                attributes.size.array[INTERSECTED.index] = CONFIGSETTINGS.particle_size * 1.25;
                attributes.size.needsUpdate = true;

                TOOLTIP.visible = true;
                $('.pointlabel').text(INTERSECTED.name);
                fs = font_ramp(intersects[0].distance);
                m = margin(intersects[0].distance);
                $('.pointlabel').css("font-size", fs + "px");

                $('.pointlabel').css("margin-top", "0px");
                $('.pointlabel').css("margin-left", "0px");
                $('.pointlabel').css("margin-top", -m + "px");
                $('.pointlabel').css("margin-left", m + "px");
                console.log('Particle depth is: ' + intersects[0].distance);
                console.log('Font size is: ' + font_ramp(intersects[0].distance));
                TOOLTIP.position.x = attributes.position.array[3 * intersects[0].index];
                TOOLTIP.position.y = attributes.position.array[3 * intersects[0].index + 1];
                TOOLTIP.position.z = attributes.position.array[3 * intersects[0].index + 2];

            }

        }
    } else if (INTERSECTED.index !== null && attributes) {
        $('html,body').css('cursor', 'default');
        $('.pointlabel').text('')
        TOOLTIP.visible = false;

        attributes.size.array[INTERSECTED.index] = CONFIGSETTINGS.particle_size;
        attributes.size.needsUpdate = true;

        // attributes.position.array[3 * INTERSECTED.index] = INTERSECTED.position[0];
        // attributes.position.array[3 * INTERSECTED.index + 1] = INTERSECTED.position[1];
        // attributes.position.array[3 * INTERSECTED.index + 2] = INTERSECTED.position[2];
        // attributes.position.needsUpdate = true;

        attributes.mycolor.array[3 * INTERSECTED.index] = INTERSECTED.rgb[0];
        attributes.mycolor.array[3 * INTERSECTED.index + 1] = INTERSECTED.rgb[1];
        attributes.mycolor.array[3 * INTERSECTED.index + 2] = INTERSECTED.rgb[2];
        attributes.mycolor.needsUpdate = true;

        INTERSECTED.index = null;
        INTERSECTED.name = null;
        INTERSECTED.uuid = null;
        INTERSECTED.rgb = null;
    }

    RENDERER.render(SCENE, CAMERA);
    LABEL_RENDERER.render(SCENE, CAMERA)
}

function font_ramp(z){
    return z > 1000? 10:
        z > 500? 15:
            z > 250? 20:
                z > 125? 25:
                    z > 65? 30: 35;
    // var range = (CAMERA.far - z) / (CAMERA.far - CAMERA.near);
}

function margin(depth){
    var k;
    if (depth < 280){
        k = 1.75
    }
    if (depth < 180){
        k = 1.5
    }
    else if (depth < 120)
    {
        k = 1.25
    }
    else {
        k = 2.0
    }
    var x = 8000/depth * k;
    return Math.ceil(x/2)
}