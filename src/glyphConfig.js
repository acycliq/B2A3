

function glyphSettings()
{
    var out = [


        {gene: 'Snca',          taxonomy: 'in_general',  glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Cplx2',         taxonomy: 'in_general',  glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Lhx6',          taxonomy: 'in_general',  glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Col25a1',       taxonomy: 'in_general',  glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Pnoc',          taxonomy: 'in_general',  glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Rab3c',         taxonomy: 'in_general',  glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: 'Gad1',          taxonomy: 'in_general',  glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Slc6a1',        taxonomy: 'in_general',  glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Th',            taxonomy: 'sst',         glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Crhbp',         taxonomy: 'sst',         glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Sst',           taxonomy: 'sst',         glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Npy',           taxonomy: 'sst',         glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Synpr',         taxonomy: 'sst',         glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Chodl',         taxonomy: 'sst',         glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Cort',          taxonomy: 'sst',         glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Reln',          taxonomy: 'sst',         glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Serpini1',      taxonomy: 'sst',         glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: 'Satb1',         taxonomy: 'sst',         glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Grin3a',        taxonomy: 'sst',         glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Tac1',          taxonomy: 'pvalb',       glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Pvalb',         taxonomy: 'pvalb',       glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
       {gene: 'Kcnip2',        taxonomy: 'pvalb',       glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Thsd7a',        taxonomy: 'pvalb',       glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Cox6a2',        taxonomy: 'pvalb',       glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Chrm2',         taxonomy: 'pvalb',       glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Id2',           taxonomy: 'ngf',         glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Hapln1',        taxonomy: 'ngf',         glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Gabrd',         taxonomy: 'ngf',         glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Cryab',         taxonomy: 'ngf',         glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Kit',           taxonomy: 'ngf',         glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Ndnf',          taxonomy: 'ngf',         glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Nos1',          taxonomy: 'ngf',         glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Lamp5',         taxonomy: 'ngf',         glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
       {gene: 'Cplx3',         taxonomy: 'ngf',         glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Cadps2',        taxonomy: 'cxcl14',      glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Cxcl14',        taxonomy: 'cxcl14',      glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Ntng1',         taxonomy: 'cxcl14',      glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Cpne5',         taxonomy: 'cxcl14',      glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Rgs12',         taxonomy: 'cxcl14',      glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Sncg',          taxonomy: 'cnr1',        glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Cnr1',          taxonomy: 'cnr1',        glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Cck',           taxonomy: 'cnr1',        glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Trp53i11',      taxonomy: 'cnr1',        glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Sema3c',        taxonomy: 'cnr1',        glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Syt6',          taxonomy: 'cnr1',        glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Yjefn3',        taxonomy: 'cnr1',        glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Rgs10',         taxonomy: 'cnr1',        glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Nov',           taxonomy: 'cnr1',        glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: 'Kctd12',        taxonomy: 'cnr1',        glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Slc17a8',       taxonomy: 'cnr1',        glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Tac2',          taxonomy: 'vip',         glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Npy2r',         taxonomy: 'vip',         glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Calb2',         taxonomy: 'vip',         glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Htr3a',         taxonomy: 'vip',         glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Slc5a7',        taxonomy: 'vip',         glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Penk',          taxonomy: 'vip',         glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Pthlh',         taxonomy: 'vip',         glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Vip',           taxonomy: 'vip',         glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Crh',           taxonomy: 'vip',         glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Qrfpr',         taxonomy: 'vip',         glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Zcchc12',       taxonomy: 'less_active', glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Calb1',         taxonomy: 'less_active', glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Vsnl1',         taxonomy: 'less_active', glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Tmsb10',        taxonomy: 'less_active', glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Rbp4',          taxonomy: 'less_active', glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Fxyd6',         taxonomy: 'less_active', glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: '6330403K07Rik', taxonomy: 'less_active', glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: 'Scg2',          taxonomy: 'less_active', glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Gap43',         taxonomy: 'less_active', glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Nrsn1',         taxonomy: 'less_active', glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Gda',           taxonomy: 'pc_or_in',    glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Bcl11b',        taxonomy: 'pc_or_in',    glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Rgs4',          taxonomy: 'pc_or_in',    glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Slc24a2',       taxonomy: 'pc_or_in',    glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Lphn2',         taxonomy: 'pc_or_in',    glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Adgrl2',        taxonomy: 'pc_or_in',    glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Map2',          taxonomy: 'pc_or_in',    glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Prkca',         taxonomy: 'pc_or_in',    glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Cdh13',         taxonomy: 'pc_or_in',    glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Atp1b1',        taxonomy: 'pc_or_in',    glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Pde1a',         taxonomy: 'pc_or_in',    glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: 'Calm2',         taxonomy: 'pc_or_in',    glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Sema3e',        taxonomy: 'pc_or_in',    glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Nrn1',          taxonomy: 'pc',          glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Pcp4',          taxonomy: 'pc',          glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Rprm',          taxonomy: 'pc',          glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Enpp2',         taxonomy: 'pc',          glyphSymbol: 'x', isNonNeuron: 0,  glyphName: 'cross'},
        {gene: 'Rorb',          taxonomy: 'pc',          glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Rasgrf2',       taxonomy: 'pc',          glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Wfs1',          taxonomy: 'pc',          glyphSymbol: 'd', isNonNeuron: 0,  glyphName: 'diamond'},
        {gene: 'Fos',           taxonomy: 'pc',          glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        {gene: 'Plcxd2',        taxonomy: 'pc',          glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Crym',          taxonomy: 'pc',          glyphSymbol: '<', isNonNeuron: 0,  glyphName: 'triangleLeft'},
        {gene: '3110035E14Rik', taxonomy: 'pc',          glyphSymbol: '^', isNonNeuron: 0,  glyphName: 'triangleUp'},
        {gene: 'Foxp2',         taxonomy: 'pc',          glyphSymbol: 'p', isNonNeuron: 0,  glyphName: 'star5'},
        {gene: 'Pvrl3',         taxonomy: 'pc',          glyphSymbol: 'h', isNonNeuron: 0,  glyphName: 'star6'},
        {gene: 'Neurod6',       taxonomy: 'pc2',         glyphSymbol: '+', isNonNeuron: 0,  glyphName: 'plus'},
        {gene: 'Nr4a2',         taxonomy: 'pc2',         glyphSymbol: 'o', isNonNeuron: 0,  glyphName: 'circle'},
        {gene: 'Cux2',          taxonomy: 'pc2',         glyphSymbol: '*', isNonNeuron: 0,  glyphName: 'asterisk'},
        {gene: 'Kcnk2',         taxonomy: 'pc2',         glyphSymbol: '.', isNonNeuron: 0,  glyphName: 'point'},
        {gene: 'Arpp21',        taxonomy: 'pc2',         glyphSymbol: 's', isNonNeuron: 0,  glyphName: 'square'},
        {gene: 'Enc1',          taxonomy: 'pc2',         glyphSymbol: 'v', isNonNeuron: 0,  glyphName: 'triangleDown'},
        {gene: 'Fam19a1',       taxonomy: 'pc2',         glyphSymbol: '>', isNonNeuron: 0,  glyphName: 'triangleRight'},
        // {gene: 'Vim',           taxonomy: 'non_neuron',  glyphSymbol: '*', isNonNeuron: 1,  glyphName: 'asterisk'},
        // {gene: 'Slc1a2',        taxonomy: 'non_neuron',  glyphSymbol: '.', isNonNeuron: 1,  glyphName: 'point'},
        {gene: 'Pax6',          taxonomy: 'non_neuron',  glyphSymbol: 's', isNonNeuron: 1,  glyphName: 'square'},
        // {gene: 'Plp1',          taxonomy: 'non_neuron',  glyphSymbol: 'x', isNonNeuron: 1,  glyphName: 'cross'},
        // {gene: 'Mal',           taxonomy: 'non_neuron',  glyphSymbol: '+', isNonNeuron: 1,  glyphName: 'plus'},
        // {gene: 'Aldoc',         taxonomy: 'non_neuron',  glyphSymbol: 'o', isNonNeuron: 1,  glyphName: 'circle'},
        {gene: 'Actb',          taxonomy: 'non_neuron',  glyphSymbol: 'v', isNonNeuron: 1,  glyphName: 'triangleDown'},
        {gene: 'Sulf2',         taxonomy: 'non_neuron',  glyphSymbol: 'p', isNonNeuron: 1,  glyphName: 'star5'},


        {gene: 'Rgs5', taxonomy: 'VECA', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Flt1', taxonomy: 'VECA', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Igf2', taxonomy: 'VECA', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Epas1', taxonomy: 'VECA', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Bsg', taxonomy: 'VECV', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Itm2a', taxonomy: 'VECV', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Ly6c1', taxonomy: 'VECV', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Car4', taxonomy: 'VECV', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Pltp', taxonomy: 'VECV', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Vim', taxonomy: 'VECA', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Crip1', taxonomy: 'VSMCA', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Acta2', taxonomy: 'VSMCA', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Myl9', taxonomy: 'VSMCA', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Tagln', taxonomy: 'VSMCA', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Ptgds', taxonomy: 'VLMC', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Igfbp2', taxonomy: 'VLMC', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Dcn', taxonomy: 'VLMC', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Nupr1', taxonomy: 'VLMC', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Mgp', taxonomy: 'ABC', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Rbp1', taxonomy: 'ABC', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Fn1', taxonomy: 'ABC', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Igfbp6', taxonomy: 'ABC', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Cldn5', taxonomy: 'PER', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Igfbp7', taxonomy: 'PER', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Vtn', taxonomy: 'PER', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Sparc', taxonomy: 'PER', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Ctla2a', taxonomy: 'PER', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Higd1b', taxonomy: 'PER', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Pglyrp1', taxonomy: 'PER', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Myl12a', taxonomy: 'PER', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Gng11', taxonomy: 'PER', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Serpinh1', taxonomy: 'PER', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Rhoc', taxonomy: 'PER', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Col4a1', taxonomy: 'PER', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Hexb', taxonomy: 'MGL', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Ctss', taxonomy: 'MGL', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'C1qa', taxonomy: 'MGL', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'P2ry12', taxonomy: 'MGL', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'C1qb', taxonomy: 'MGL', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Ccl4', taxonomy: 'MGL', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Lyz2', taxonomy: 'PVM', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Pf4', taxonomy: 'PVM', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'C1qc', taxonomy: 'PVM', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Fcer1g', taxonomy: 'PVM', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Tyrobp', taxonomy: 'PVM', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Cd9', taxonomy: 'COP', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Frmd4a', taxonomy: 'COP', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Gpr17', taxonomy: 'COP', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Nfasc', taxonomy: 'NFOL', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Sirt2', taxonomy: 'NFOL', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Marcks', taxonomy: 'NFOL', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Rras2', taxonomy: 'NFOL', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Arpc1b', taxonomy: 'NFOL', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Tsc22d4', taxonomy: 'NFOL', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Qk', taxonomy: 'NFOL', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Gng12', taxonomy: 'NFOL', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Gm15440', taxonomy: 'NFOL', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Trf', taxonomy: 'MOL', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Mog', taxonomy: 'MOL', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Apod', taxonomy: 'MOL', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Plp1', taxonomy: 'MOL', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'S100b', taxonomy: 'MOL', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Gltp', taxonomy: 'MOL', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Ppp1r14a', taxonomy: 'MOL', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Car2', taxonomy: 'MOL', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Fa2h', taxonomy: 'MOL', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Klk6', taxonomy: 'MOL', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Gjb1', taxonomy: 'MOL', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Sepp1', taxonomy: 'MOL', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Gsn', taxonomy: 'MOL', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Mal', taxonomy: 'MOL2', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Pllp', taxonomy: 'MOL2', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Cdkn1c', taxonomy: 'MOL2', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Mag', taxonomy: 'MFOL', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Mobp', taxonomy: 'MFOL', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Opalin', taxonomy: 'MFOL', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Tspan2', taxonomy: 'MFOL', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Grb14', taxonomy: 'MFOL', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Olig1', taxonomy: 'MFOL', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Tmem141', taxonomy: 'MFOL', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Pdlim2', taxonomy: 'MFOL', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Cd81', taxonomy: 'MFOL', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Slc1a3', taxonomy: 'ACBG', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Gfap', taxonomy: 'ACMB', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Aqp4', taxonomy: 'ACMB', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Slc6a11', taxonomy: 'ACOB', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Slc1a2', taxonomy: 'ACTE', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Aldoc', taxonomy: 'ACTE', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Ttr', taxonomy: 'CHOR', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        // {gene: 'Enpp2', taxonomy: 'CHOR', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: '1500015O10Rik', taxonomy: 'CHOR', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Fxyd1', taxonomy: 'CHOR', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Sostdc1', taxonomy: 'CHOR', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: '1110017D15Rik', taxonomy: 'EPEN', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Ccdc153', taxonomy: 'EPEN', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Tmem212', taxonomy: 'EPEN', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Foxj1', taxonomy: 'EPEN', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Rarres2', taxonomy: 'EPEN', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Dbi', taxonomy: 'EPSC', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Fos', taxonomy: 'EPSC', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Ifitm3', taxonomy: 'EPSC', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Rsph1', taxonomy: 'EPSC', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Jun', taxonomy: 'EPSC', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Mia', taxonomy: 'EPSC', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Car8', taxonomy: 'CBPC', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Ppp1r1b', taxonomy: 'MSN', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Arpp21', taxonomy: 'MSN', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Pde10a', taxonomy: 'MSN', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Efr3a', taxonomy: 'HBGLU', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Slc17a6', taxonomy: 'HBGLU', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Snap25', taxonomy: 'HBGLU', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Cabp7', taxonomy: 'HBGLU', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Gls', taxonomy: 'HBGLU', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Peg3', taxonomy: 'HBSER', glyphSymbol: '^', isNonNeuron: 1, glyphName: 'triangleUp'},
        {gene: 'Cntn1', taxonomy: 'HBSER', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Hs6st2', taxonomy: 'HBSER', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'En1', taxonomy: 'MBDOP', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Irs4', taxonomy: 'HBINH', glyphSymbol: 'v', isNonNeuron: 1, glyphName: 'triangleDown'},
        {gene: 'Lhx8', taxonomy: 'DECHO', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Syt4', taxonomy: 'HBCHO', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Vat1l', taxonomy: 'HBCHO', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Pde6g', taxonomy: 'DETPH', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Sag', taxonomy: 'DETPH', glyphSymbol: '.', isNonNeuron: 1, glyphName: 'point'},
        {gene: 'Gnb3', taxonomy: 'DETPH', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},
        {gene: 'Igfbpl1', taxonomy: 'DGNBL', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Doc2g', taxonomy: 'OBNBL', glyphSymbol: 'd', isNonNeuron: 1, glyphName: 'diamond'},
        {gene: 'Cdhr1', taxonomy: 'OBNBL', glyphSymbol: '<', isNonNeuron: 1, glyphName: 'triangleLeft'},
        {gene: 'Nmb', taxonomy: 'OBNBL', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'A230065H16Rik', taxonomy: 'SEPNBL', glyphSymbol: 'h', isNonNeuron: 1, glyphName: 'star6'},
        {gene: 'Hmgb2', taxonomy: 'SZNBL', glyphSymbol: 'p', isNonNeuron: 1, glyphName: 'star5'},
        {gene: 'Fabp7', taxonomy: 'OEC', glyphSymbol: 's', isNonNeuron: 1, glyphName: 'square'},
        {gene: 'Rgcc', taxonomy: 'SATG', glyphSymbol: '+', isNonNeuron: 1, glyphName: 'plus'},
        {gene: 'Sfrp5', taxonomy: 'SATG', glyphSymbol: 'o', isNonNeuron: 1, glyphName: 'circle'},
        {gene: 'Fbln5', taxonomy: 'SATG', glyphSymbol: '*', isNonNeuron: 1, glyphName: 'asterisk'},
        {gene: 'Fbln2', taxonomy: 'SATG', glyphSymbol: '>', isNonNeuron: 1, glyphName: 'triangleRight'},
        {gene: 'Ube2c', taxonomy: 'SATG', glyphSymbol: 'x', isNonNeuron: 1, glyphName: 'cross'},


        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'},

        ];

    return out
}

//create color ramp.
function glyphColor(y) {
    return y === 'non_neuron' ? '#FFFFFF' : //hsv: [0 0 1]);
        y === 'pc_or_in' ? '#407F59' :      //hsv: [.4 .5 .5]);
            y === 'less_active' ? '#96B38F' :   //hsv: [.3 .2 .7]);
                y === 'pc' ? '#00FF00' :            //hsv: [1/3 1 1]);
                    y === 'pc2' ? '#44B300' :           //hsv: [.27 1 .7]);
                        y === 'in_general' ? '#0000FF' :    //hsv: [2/3 1 1]);
                            y === 'sst' ? '#00B3FF' :           //hsv: [.55 1 1]);
                                y === 'pvalb' ? '#5C33FF' :         //hsv: [.7 .8 1]);
                                    y === 'ngf' ? '#FF00E6' :           //hsv: [.85 1 1]);
                                        y === 'cnr1' ? '#FF0000' :          //hsv: [ 1 1 1]);
                                            y === 'vip' ? '#FFC700' :           //hsv: [.13 1 1]);
                                                y === 'cxcl14' ? '#995C00' :        //hsv: [.1 1 .6]);

                                                    y === 'VECA'? hsv2hex(0.02, 1, 1):
                                                        y === 'VECV'? hsv2hex(0.98, 1, 1):
                                                            y === 'VLMC'? hsv2hex(.95, .5, .6):
                                                                y === 'ABC'? hsv2hex(.95, .5, .6):
                                                                    y === 'PER'? hsv2hex(0, .5, 1):
                                                                        y === 'VSMCA'? hsv2hex(.0, .8, .6):


                                                                            y === 'MGL'? hsv2hex(.1, 1, .6):
                                                                                y === 'PVM'? hsv2hex(.1, 1, .6):

                                                                                // % oligodendrocytes
                                                                                    y === 'COP'? hsv2hex(.6, .2, .5):
                                                                                        y === 'NFOL'? hsv2hex(.6, .2, .5):
                                                                                            y === 'MOL'? hsv2hex(.65, .1, .75):
                                                                                                y === 'MOL2'? hsv2hex(.7, 0, 1):
                                                                                                    y === 'MFOL'? hsv2hex(.7, 0, 1):

                                                                                                        // % astrocytes
                                                                                                        y === 'ACMB'? hsv2hex(.5,1,1):
                                                                                                            y === 'ACBG'? hsv2hex(.5,1,1):
                                                                                                                y === 'ACTE'? hsv2hex(.5,1,1):
                                                                                                                    y === 'ACOB'? hsv2hex(.5,1,1):

                                                                                                                        // % choroid
                                                                                                                        y === 'CHOR'? hsv2hex( .13, .6, .8):

                                                                                                                            // % ependymal
                                                                                                                            y === 'EPEN'? hsv2hex( .19, 1, 1):
                                                                                                                                y === 'EPSC'? hsv2hex( .19, 1, 1):

                                                                                                                                    // % neurons 1
                                                                                                                                    y === 'CBPC'? hsv2hex(1/3, 1, 1):
                                                                                                                                        y === 'MSN'? hsv2hex(1/3, 1, 1):
                                                                                                                                            y === 'HBGLU'? hsv2hex(1/3, 1, 1):
                                                                                                                                                y === 'HBSER'? hsv2hex(1/3, 1, 1):
                                                                                                                                                    y === 'MBDOP'?  hsv2hex(1/3, 1, 1): // THIS SHOULD BE: Colors(30,:);

                                                                                                                                                        // % neurons 2
                                                                                                                                                        y === 'HBINH'? hsv2hex(.27, 1, .7):
                                                                                                                                                                y === 'HBCHO'? hsv2hex(.27, 1, .7):
                                                                                                                                                                    y === 'DECHO'? hsv2hex(.27, 1, .7):

                                                                                                                                                                        // % neuroblasts
                                                                                                                                                                        y === 'DGNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                            y === 'OBNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                y === 'SEPNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                    y === 'SZNBL'? hsv2hex(.4, .5, .5):
                                                                                                                                                                                        y === 'DETPH'? hsv2hex(.4, .5, .5):

                                                                                                                                                                                            // % sattelite glia and ensheathing cells
                                                                                                                                                                                            y === 'SATG'? hsv2hex(2/3, 1, 1):
                                                                                                                                                                                                y === 'OEC'? hsv2hex(2/3, 1, 1):
                                                                                                                                                                                                    '#FD6A02';
}