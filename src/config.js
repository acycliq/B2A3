function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 5865,
            img_height: 7705,
            img_depth: 71,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: 'https://www.googleapis.com/storage/v1/b/dxn_temp/o/B2A3_z0/geneData.tsv',
            cellData: 'https://www.googleapis.com/storage/v1/b/dxn_temp/o/B2A3_z0/cellData.tsv',
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}
