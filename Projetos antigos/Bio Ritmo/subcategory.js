// subcategory
let subcategory = 'Outras dúvidas'
//resource.subcategoryList
let subcategoryList = [
    {'nome': 'Furto', 'id' : 'cd710c39-2cb7-4980-b214-631adc9f824b'},
    {'nome': 'Normas de utilização', 'id' : 'a25bb1d5-5346-40d3-90c3-971ccd88ca72'},
    {'nome': 'Questões Operacionais', 'id' : '275463db-faa7-4311-90bb-bb57f633939e'},
    {'nome': 'Questões contratuais', 'id' : '4cd6ac39-dcea-4c76-8804-d60b0a7b6b57'},
    {'nome': 'Crise', 'id' : '4e2f5855-0381-4be0-aea6-0e3a3bf232e8'},
    {'nome': 'Consulta Legislação', 'id' : '04c95a3a-14ae-4e0a-97fc-f64efbd02a2b'},
    {'nome': 'Consulta juridica', 'id' : '2f29624e-9a72-4d3d-9049-f89ce0f920c5'},
    {'nome': 'Outros', 'id' : '97122395-fd9e-4787-9624-18fac9c962f5'},
    {'nome': 'Responsável técnico', 'id' : '8260d7c4-6715-4ad9-bbaf-1d07592e079c'},
    {'nome': 'Adiantamento quinzenal', 'id' : '969cf680-cf9e-420d-994a-c408ddd9dfc6'},
    {'nome': 'Informe de rendimentos', 'id' : 'df8ab60d-0e0e-4d84-a8e1-ab344b6cbef5'},
    {'nome': 'Transferência', 'id' : '7d8a135c-df6f-49ab-bb63-3b49863a450a'},
    {'nome': 'Acesso na ADP', 'id' : '24166f53-60ed-43a7-8234-c68df72aaf9d'},
    {'nome': 'Outros pagamentos', 'id' : 'eb41b8c1-c705-43e4-9207-c0ae29153a13'},
    {'nome': 'Troca de conta bancária', 'id' : '2cfff1fc-6e61-4d70-bdc2-b63251ef6bda'},
    {'nome': 'Pensão', 'id' : 'c2345cc4-9c51-419b-9007-1feaa76973b1'},
    {'nome': 'Oposição Sindical', 'id' : '0c47c44d-e335-4283-8d5d-0b18f721e8f0'},
    {'nome': 'Vale Transporte', 'id' : '3b91568d-7e59-4d62-9f4e-0b6e7d4b4efb'},
    {'nome': 'Vale Alimentação', 'id' : '6fbe359e-300e-42cb-ad8d-0f846feec4b6'},
    {'nome': 'Vale Refeição', 'id' : '9adac6e6-7f47-4221-b613-f9c8d3fb120d'},
    {'nome': 'Assistencia Odontologica', 'id' : 'c4516ba8-d725-45d0-b3f6-1945e18657a2'},
    {'nome': 'Assistência médica', 'id' : 'e0141a22-cab4-4eb1-9b42-afdd345f8ec9'},
    {'nome': 'Empréstimo Consignado', 'id' : 'c16389c1-25e5-46a4-86f0-dc20b6fe0b6d'},
    {'nome': 'Plano VIP', 'id' : '23981d33-505b-4471-98d0-271900866a04'},
    {'nome': 'TotalPass', 'id' : '641de65e-1ab5-41e2-8ff6-76fa9c269513'},
    {'nome': 'Queima Diária', 'id' : '8deb23de-8420-42da-b0f7-67891545ed05'},
    {'nome': 'Psicologia Viva', 'id' : 'fe4b3f03-095e-45cd-ae8f-b72580d0f419'},
    {'nome': 'Seguro de vida', 'id' : '423a6bbe-c2b3-4802-ac4e-87a6f298a7f4'},
    {'nome': 'Dúvidas gerais', 'id' : '9ea9ddff-abd4-4487-b8a9-efc360b3ad39'},
    {'nome': 'Personal / Dados de acesso', 'id' : '45475efe-bb0e-44e3-8172-5ebff8026ea5'},
    {'nome': 'SAC/Troca', 'id' : 'c15ec31a-3814-42ab-b02b-f343a5f0296a'},
    {'nome': 'Solicitação uniforme admissão', 'id' : '0e2faca3-4e7b-4777-a734-168f70cd1237'},
    {'nome': 'Franquias', 'id' : '9ee9ef88-cd26-4e44-8641-74be1809ec7b'},
    {'nome': 'Outras dúvidas', 'id' : '795a2d45-6cd0-472f-82ac-9a98f51e4063'},
    {'nome': 'Solicitação de comunicados', 'id' : '37eda1bc-fffe-4b9c-bb3e-24cb539723c6'},
    {'nome': 'Férias CLT', 'id' : '970955fb-9173-420f-8919-c598285f997b'},
    {'nome': 'Folha de ponto', 'id' : '0a2dbb8f-fdb7-43dd-a99d-bf09886dc68d'},
    {'nome': 'Atestados', 'id' : '6bfd15be-eff9-4926-bccf-f4456500239b'},
    {'nome': 'Alteração de horário', 'id' : '409693e0-57bf-4249-b870-a3278dd7960b'},
    {'nome': 'Acessos', 'id' : 'd5919e1b-fbe2-46af-8d34-1dc3a2763972'},
    {'nome': 'Reembolso de despesas', 'id' : 'b794e5a1-9c04-4a53-b2fa-8d1d13c2007c'},
    {'nome': 'Mudança de hierarquia', 'id' : '437382db-1436-4b7d-94cb-d14b4e3413d9'},
    {'nome': 'Caixinha Unidade', 'id' : 'f688311d-cb4e-48f6-a86f-f4ac90ab45a7'},
    {'nome': 'Adiantamento de Viagem', 'id' : '6ce5280c-5823-4462-821c-4433111eb247'},
    {'nome': 'Atestado acima de 15 dias', 'id' : '1c2aa443-1236-4b3a-ac8e-b6d0486cd62f'},
    {'nome': 'Licença maternidade', 'id' : '1f7ddfb6-d5ed-403f-b8ac-ecd8d4adf112'},
    {'nome': 'CAT - Acidente de trabalho', 'id' : '91917ac7-0019-4e99-a993-e0b6b521e0b6'},
]

subcategoryList = JSON.stringify(subcategoryList)

console.log(run(subcategory, subcategoryList))

function run(subcategory, subcategoryList)  {

    subcategoryList = JSON.parse(subcategoryList)

    for (let i = 0; i < subcategoryList.length; i++) {
        if (subcategoryList[i].nome == subcategory) {
            return subcategoryList[i].id
        }
    }

    return 'ERROR: NÃO CONTRADO NO subcategoryList O subcategory SELECIONADO'
}