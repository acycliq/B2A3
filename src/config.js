function config() {
    var ini = [
        {   // 1.
            name: 'default',
            img_width: 9934,
            img_height: 2310,
            img_depth: 15 * 6.0121,
            particle_size: 8000.0,
            // zThres: 1500.0,
            geneData: [{mediaLink: './data/NLGF/geneData.tsv', size: "22642365"}],
//            cellData: [{mediaLink: './data/NLGF/cellData.tsv', size: "10554015"}],
        },
    ];
    return d3.map(ini, function (d) {return d.name;})
}

