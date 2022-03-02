function app(geneData, cellData) {

    geneData = geneData.sort((a, b) => (a.z > b.z) ? 1 : -1);

    var cellColorRamp = classColorsCodes();
    var cellColorMap = d3.map(cellColorRamp, function (d) {
        return d.className;
    });

    cellData.forEach((d, i) => {
        d.topClass = d.ClassName[maxIndex(d.Prob)]; // Keeps the class with the highest probability
        d.color = hexToRgb(cellColorMap.get(d.topClass).color)
    });





    // group by gene name
    var data = groupBy(geneData, 'Gene');

    // get all the gene names
    // geneNames = Object.keys(data).sort();

    // get the gene panel (this is assigned to a global variable)
    GENEPANEL = getGenePanel(geneData);

    // loop over the genes and collect in one array the coords for each spot
    var img_width = CONFIGSETTINGS.img_width,
        img_height = CONFIGSETTINGS.img_height,
        img_depth = CONFIGSETTINGS.img_depth;

    for (var i = 0; i < GENEPANEL.length; i++) {
        var g = GENEPANEL[i];

        var temp = new Float32Array(data[g].map(d => [d.x/3 - img_width / 2, img_height - d.y/3 - img_height / 2, 6 * (d.z - img_depth / 2)]).flat());
        SPOTS_ARR.push(temp)
    }

    // Get the cell data
    CELLS_ARR = get_cell_xyz();

    iniScene();
    iniLights();
    iniContent(SPOTS_ARR, cellData);

    // RAYCASTER.params.Points.threshold = 3;
    // window.addEventListener('mousemove', onMouseMove, false);

    animate();
    postScene();

}

function maxIndex(data){
    //returns the index of the max of the input array.
    return data.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
}


