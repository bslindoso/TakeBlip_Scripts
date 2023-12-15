let s  = '200';
let response;
response = JSON.stringify({
    "products": [
        {
            "title": "205/70R15 GOODYEAR CARGO MARATHON 2 106/104S",
            "price": "795.00",
            "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/09/CARGO-MARATHON-2.jpg"
        },
        {
            "title": "205/70R15 GOODYEAR WRANGLER WORKHORSE AT 96T SL",
            "price": "745.00",
            "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/07/WRANGLER-WORKHORSE-AT-2.jpg"
        },
        {
            "title": "205/70R15 GOODYEAR WRANGLER FORTITUDE HT 96T SL",
            "price": "692.00",
            "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/07/WRANGLER-FORTITUDE-HT-1.jpg"
        }
    ]
})

// response = JSON.stringify({
//     "products": []
// })

console.log(run(s, response))


function run(status, response) {
	try {
		
		response = JSON.parse(response)

		let validaStatus = (status >= 200 && status <= 299) ? true : false

		if (validaStatus) {
			if (response.products.length > 0) {
				return {
					type: 'success',					
					status: status,
					response: response,
					total: response.products.length
				}
			} else {
				return {
					type: 'empty error',
					input: `NÃO ENCONTRADO NENHUM PNEU`,
					status: status,
					response: response
				}
			}
		} else {
			return {
				type: 'status error',
				input: `ERRO DE API`,
				status: status,
				response: response
			}
		}
	} catch (e) {
		return {
			type: 'script error',
			input: `ERRO DE SCRIPT`,
			status: status,
			response: response,
			error: e
		}
	}

}