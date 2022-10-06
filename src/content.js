function iniContent(spots, cellData) {
    console.log('Init Viewer');

    var points = GENEPANEL.map((d, i) => my_particles(spots[i], d));
    points.map(d => SCENE.add(d));

}
