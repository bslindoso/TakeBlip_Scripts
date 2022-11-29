const processResponse = JSON.stringify(
  {
    "type": "success", "status": 200, "message": "Pedido encontrado", "response": [
      {
        "orderId": "1212372160784-01",
        "creationDate": "2022-02-21T12:35:58.6480915+00:00",
        "status": "invoiced",
        "statusDescription": "Faturado",
        "items": [
          {
            "name": "Camiseta Preta Intelbras G"
          }
        ]
      },
      // {
      //   "orderId": "1180551105577-01",
      //   "creationDate": "2021-12-02T15:18:22.9121790+00:00",
      //   "status": "invoiced",
      //   "statusDescription": "Faturado",
      //   "items": [
      //     {
      //       "name": "TERMINAL DEDICADO TDMI 300"
      //     }
      //   ]
      // }
    ]
  }
)

console.log(run(processResponse))

function run(processResponse) {

  processResponse = JSON.parse(processResponse)
  let response = processResponse.response;

  let quantity = response.length;
  // Conta quantos elementos possui
  if (response.length >= 1 && response.length <= 4){
    response = response;
  } else {
    // processa 4 ultimos
    response = response.slice(0, 4)
  }

  // Processa os pedidos
  let orders = []
  response.forEach(order => {
    const statusDescription = order.statusDescription;
    const statusCode = order.status

    let items = order.items;
    let orderName = "";

    items.forEach(function (item) {
      orderName += item.name + " ";
    })

    orders.push({
      "name": orderName,
      "statusCode": statusCode,
      "statusDescription": statusDescription,
    });
  });


  // return JSON.stringify({
  //   quantity: quantity,
  //   orders : orders
  // })
  return {
    quantity: quantity,
    orders : orders
  }
}