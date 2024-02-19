/** 
    Script que ordena os pneus conforme preço 
*/

// let listaPneus = JSON.stringify({
//     "type": "success",
//     "status": "200",
//     "response": {
//         "products": [
//             {
//                 "title": "175/65R14 GOODYEAR ASSURANCE MAXLIFE 86H XL",
//                 "price": "390.00",
//                 "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/07/ASSURANCE-MAXLIFE-86H-XL.jpg"
//             },
//             {
//                 "title": "175/65R14 GOODYEAR KELLY EDGE TOURING 2 86H XL",
//                 "price": "369.00",
//                 "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/12/Kelle-Edge-Touring2.jpg"
//             }
//         ]
//     },
//     "total": 2
// })

let listaPneus = JSON.stringify({
    "type": "success",
    "status": "200",
    "response": {
        "products": [
            {
                "title": "175/65R14 GOODYEAR ASSURANCE MAXLIFE 86H XL",
                "price": "390.00",
                "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/07/ASSURANCE-MAXLIFE-86H-XL.jpg"
            },
            {
                "title": "175/65R14 GOODYEAR KELLY EDGE TOURING 2 86H XL",
                "price": "369.00",
                "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/12/Kelle-Edge-Touring2.jpg"
            },
            {
                "title": "175/65R14 GOODYEAR KELLY EDGE TOURING 2 86H XL",
                "price": "365.00",
                "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/12/Kelle-Edge-Touring2.jpg"
            },
            {
                "title": "175/65R14 GOODYEAR KELLY EDGE TOURING 2 86H XL",
                "price": "399.00",
                "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/12/Kelle-Edge-Touring2.jpg"
            }, 
            {
                "title": "175/65R14 GOODYEAR KELLY EDGE TOURING 2 86H XL",
                "price": "359.00",
                "featured_src": "https://pneusnacional.com.br/wp-content/uploads/2023/12/Kelle-Edge-Touring2.jpg"
            }
        ]
    },
    "total": 5
})

console.log(run(listaPneus))

function run(lista) {
    lista = JSON.parse(lista)
    let products = lista.response.products

    products.sort((a, b) => {
        return a.price - b.price
    })
    
    lista.response.products = products

    return JSON.stringify(lista)
}