exception = JSON.stringify({ "id": "BV15", "input": "gfdgdf", "redirectMenu": "ERRO NOME" })
console.log(run(exception))


function run(exception) {
    try {
        exception = JSON.parse(exception)
        const exceptionId = exception.id

        const blockList = [
            { exceptionId: "BV130", blockId: "dacda750-a583-40dc-b5e2-110e2773b0a3" },
            { exceptionId: "BV220", blockId: "dd5e045e-f5ef-41bb-afc8-0e4da5ddcd56" },
            { exceptionId: "BV150", blockId: "3b904cac-d437-46b1-8b32-fe2450a423d7" },
            { exceptionId: "BV161", blockId: "b8c2a447-77de-47b8-a210-6d60cf750791" },
        ]

        let returnBlockId = ""

        blockList.forEach(element => {
            var find = exceptionId == element.exceptionId ? element.blockId : ''
            if (find != '') {
                returnBlockId = find
            }
        })

        if (returnBlockId == "") {
            returnBlockId = "ERROR: COULDN'T MATCH EXCEPTION ID. DID YOU LINKED EXCEPTION ID TO BLOCK ID?"
        }

        return returnBlockId
    } catch (e) {
        return "ERROR: SCRIPT FAILURE"
    }
}