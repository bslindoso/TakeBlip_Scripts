function run(response) {
    try {
        let responseObj = JSON.parse(response);
        
        
            if (responseObj.length == 1) {
                return true
            }
            return false
        }
    
    catch (e) {
        return 'error'
    }
}

console.log(run(JSON.stringify([
    {
        "orderId": "1268553514050",
        "Option": 1,
        "creationDate": "13/10/2022",
        "clientName": "SILVANA MOECKEL CAMPIONI",
        "totalValue": "891.95",
        "status": "invoiced"
    },
    {
        "orderId": "1267663510655",
        "Option": 2,
        "creationDate": "09/10/2022",
        "clientName": "SILVANA MOECKEL CAMPIONI",
        "totalValue": "619.96",
        "status": "invoiced"
    },
    {
        "orderId": "1263813491369",
        "Option": 3,
        "creationDate": "23/09/2022",
        "clientName": "SILVANA MOECKEL CAMPIONI",
        "totalValue": "297.00",
        "status": "invoiced"
    },
    {
        "orderId": "1257740944233",
        "Option": 4,
        "creationDate": "29/08/2022",
        "clientName": "SILVANA MOECKEL CAMPIONI",
        "totalValue": "1918.90",
        "status": "invoiced"
    }
])))