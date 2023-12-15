let listaDeCombo = `R13 R$190 R$10;
R14 R$190 R$10;
R15 R$200 R$15;
R16 R$210 R$15;
R17 R$225 R$15;
R18 R$245 R$20;
R19 R$265 R$20;
R20 R$285 R$20;
R21 R$305 R$20;`

console.log(run(listaDeCombo))

function run(listaDeCombo) {
    listaDeCombo = listaDeCombo.split(';')
    if (listaDeCombo[listaDeCombo.length - 1] == '') { listaDeCombo.pop() }    
    let listaObjCombo = []

    for (let i = 0; i < listaDeCombo.length; i++) { 
        let obj = {}
        listaDeCombo[i] = listaDeCombo[i].trim()

        const regex = /(R|r)\$/
        while (listaDeCombo[i].search(regex) != -1) {
            listaDeCombo[i] = listaDeCombo[i].replace(regex, '')
        }
        while (listaDeCombo[i].search('R') != -1) {
            listaDeCombo[i] = listaDeCombo[i].replace('R', '')
        }
        
        listaDeCombo[i] = listaDeCombo[i].split(' ')
        obj.aro = listaDeCombo[i][0]
        obj.valor_combo = listaDeCombo[i][1]
        obj.desconto_pneu = listaDeCombo[i][2]

        listaObjCombo.push(obj)        
    }

    return JSON.stringify(listaObjCombo)    
}

