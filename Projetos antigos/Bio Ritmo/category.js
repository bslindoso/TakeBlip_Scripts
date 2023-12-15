// category
let category = 'RH - SESMT'
//resource.categoryList
let categoryList = [
    {'nome': 'JURIDICO', 'id' : '9e5d0333-a252-470f-9709-76b88b86990f'},
    {'nome': 'CREF', 'id' : 'fab740fc-e7c9-44d1-8b05-6587f9c67e10'},
    {'nome': 'RECRUTAMENTO E SELEÇÃO', 'id' : 'NÃO POSSUI'},
    {'nome': 'FOLHA DE PAGAMENTO', 'id' : 'ec98d639-92db-43b2-aa08-ba5479472b11'},
    {'nome': 'ACESSO ADP', 'id' : 'ec98d639-92db-43b2-aa08-ba5479472b11'},
    {'nome': 'DEMONSTRATIVO DE PAGAMENTO', 'id' : '8a035d82-16f1-4217-b10b-2e3240dfd052'},
    {'nome': 'BENEFICIOS', 'id' : '12736d2b-4a65-4b26-b976-464abee318f5'},
    {'nome': 'RESCISÃO', 'id' : 'e8744fb6-2908-4970-9845-4d42e7bee696'},
    {'nome': 'UNIFORMES', 'id' : '1709e08d-0c7a-4970-b49a-705c137b4f97'},
    {'nome': 'COMUNICAÇÃO INTERNA', 'id' : '35c40295-5f03-4787-b05e-aeec03019e26'},
    {'nome': 'FERIAS', 'id' : '7060e2f7-1731-4cc7-979d-c5248f4a2d55'},
    {'nome': 'PONTO', 'id' : '31e99bfe-d06e-4b39-a6fe-a68fdb0cb72a'},
    {'nome': 'EXPENSES - AUDITORIA', 'id' : '39be8f93-89d8-49c5-8dfe-9c109bfd4531'},
    {'nome': 'MEDICINA E SEGURANÇA DO TRABALHO', 'id' : '38696437-b27e-4b03-9bc1-d147dfd9e4f7'},
]

categoryList = JSON.stringify(categoryList)

console.log(run(category, categoryList))

function run(category, categoryList)  {

    categoryList = JSON.parse(categoryList)

    for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].nome == category) {
            return categoryList[i].id
        }
    }

    return 'ERROR: NÃO CONTRADO NO categoryList O category SELECIONADO'
}