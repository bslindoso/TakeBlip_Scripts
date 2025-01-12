let getFlowsIdsResponse = JSON.stringify(
  {
    "type": "application/json",
    "resource": {
      "araujoonboardinghml": "6bad5943-ac6f-4c25-a786-8d6d7de1240d",
      "araujoalgomaishml": "da15b27a-5681-40c6-95a3-10efbca31fda",
      "araujofluxonotificacaohml": "4fcf259f-9360-4ecf-b12a-48f624870d49",
      "araujoentregahml": "42f4ffc3-ff4d-4e97-a812-2eef41cf5465",
      "araujocadastrohml": "cd8c1e20-bdef-4835-99ff-dc3eca8f40be",
      "araujopagamentohml": "86cf619b-2439-49a1-8c20-9aee73c24125",
      "araujolgpdhml": "f7b7e34c-8ca7-497d-abe1-05587e89c40e",
      "araujocatalogohml": "800cdeca-8a00-4bfd-8544-db9129a55a99",
      "araujocascatahml": "d4e3cdb4-32f7-4585-8053-d352152428b2",
      "araujopesquisahml": "25195618-9a11-4946-90e0-c28d4b92644b",
      "araujohistpedidoshml": "61412a04-0791-4304-93fe-357f57444c0e",
      "araujofinalizacaohml": "6bdf5085-d665-4610-9290-59a2b50f570e",
      "araujofaqhml": "23401910-fb5c-4cd1-8df8-3b3499881076",
      "araujoexcecaohml": "6a86d05a-5d91-4427-b5b6-4d775ca6da48",
      "araujocampanhahml": "dabcb5b7-094b-4fad-bf58-d5c85a8a94d2",
      "araujomanipuladoshml": "36841fca-645e-4d85-9879-848cf983a464",
      "araujomensagemativahml": "d1155f89-c341-49e4-8537-2e8c60e7011f",
      "araujotransbordohml": "e191e531-87f7-4e88-bb5b-a630d9fb4334",
      "araujopendenciashml": "29889351-c32d-4031-bedc-8bed601902b8",
      "araujonotifativas2hml": "767cc829-bed0-446a-8a2d-f44fd1804a3d",
      "araujovacinashml": "f1cdbb22-6473-45fd-a09a-667458b4fd4a",
      "araujoinatcomprahml": "04a623e6-cc31-4a20-b233-dbfe4071631d",
      "araujoagendvacinahml": "977e8943-3b77-4086-bd58-459d8169014c",
      "araujoretiradamanipulados": "60aeee5a-0cba-477d-9768-cb4684ddc89f",
      "araujopesquisamaniphml": "65c0d09a-bfc0-4569-b29d-64467d1a9059",
      "optinhml": "3854b580-6805-4aa9-8b22-f56a0693417b"
    },
    "method": "get",
    "status": "success",
    "id": "3b51c4fa-7050-4773-9f1c-a409dde146fe",
    "from": "postmaster@resources.msging.net/#msging-application-resources-6568d694bc-4zf9d",
    "to": "araujorouterhml@msging.net/!msging-server-p7fmc-k4qeet7b",
    "metadata": {
      "traceparent": "00-0353a14866c4e251f21d2db863bc4437-e2c2c84cd941b166-01",
      "#command.uri": "lime://araujorouterhml@msging.net/resources/flowsIds"
    }
  }
)

let checkUserMasterStateResponse = JSON.stringify(
  {
    "type": "text/plain",
    "resource": "araujoonboardinghml@msging.net",
    "method": "get",
    "status": "success",
    "id": "e63b30fc-0b58-48dd-990c-5158c49e4000",
    "from": "postmaster@builder.msging.net/#msging-application-builder-d7cb6df64-2qd6d",
    "to": "araujorouterhml@msging.net/!msging-server-shqth-8kjr08hv",
    "metadata": {
      "traceparent": "00-acd5c7815e53b6f87ac709985c07067f-5912c1565808fe23-01",
      "#command.uri": "lime://araujorouterhml@msging.net/contexts/5531994389374@wa.gw.msging.net/Master-State"
    }
  }
)

console.log(run(getFlowsIdsResponse, checkUserMasterStateResponse))


// 1 - ID fluxo atual do Usuário
function run(getFlowsIdsResponse, checkUserMasterStateResponse) {
  try {
    getFlowsIdsResponse = (typeof getFlowsIdsResponse === 'object') ? getFlowsIdsResponse : JSON.parse(getFlowsIdsResponse)
    checkUserMasterStateResponse = (typeof checkUserMasterStateResponse === 'object') ? checkUserMasterStateResponse : JSON.parse(checkUserMasterStateResponse)

    if (getFlowsIdsResponse.status != 'success' && checkUserMasterStateResponse.status != 'success') {
      return 'API ERROR : status failure'
    } else {
      let userActualService = checkUserMasterStateResponse.resource.split('@')[0]
      // console.log(userActualService)
      let flowIds = getFlowsIdsResponse.resource
      // console.log(flowIds)

      return {
        "id": flowIds[userActualService],
        "flow": userActualService
      }
    }

  } catch (e) {
    return `SCRIPT ERROR : ${e}`
  }
}