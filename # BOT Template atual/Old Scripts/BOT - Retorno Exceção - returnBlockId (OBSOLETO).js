function run(exception) {
    try {
      exception = JSON.parse(exception)
      const exceptionId = exception.id
  
      const blockList = [
        { exceptionId: "BV130", blockId: "dacda750-a583-40dc-b5e2-110e2773b0a3" },
        { exceptionId: "BV150", blockId: "3b904cac-d437-46b1-8b32-fe2450a423d7" },
        { exceptionId: "BV161", blockId: "b8c2a447-77de-47b8-a210-6d60cf750791" },
        { exceptionId: "BV162", blockId: "030ccb72-b7b1-4953-834d-8fe7954afacc" },
        { exceptionId: "BV163", blockId: "7cd264c6-3f76-4f1e-8c8e-91425dacfe94" },
        { exceptionId: "BV166", blockId: "fe2b6af2-1cd7-4eba-a508-03b506c2aca2" },
        { exceptionId: "BV168", blockId: "c0ce1f3c-cb5f-4c11-a569-0b63a1a0fdc4" },
        { exceptionId: "BV169", blockId: "2026e381-c994-4222-9e5b-125cb041f39c" },
        { exceptionId: "BV220", blockId: "dd5e045e-f5ef-41bb-afc8-0e4da5ddcd56" },
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