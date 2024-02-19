// let responseOnlineAttendant = JSON.stringify({ "type": "application/vnd.lime.collection+json", "resource": { "total": 1, "itemType": "application/vnd.iris.desk.attendant+json", "items": [{ "identity": "bruno.lindoso%40squadra.com.br@blip.ai", "fullName": "Bruno Santos Lindoso", "email": "bruno.lindoso@squadra.com.br", "teams": ["Default"], "status": "Online", "isEnabled": true }] }, "method": "get", "status": "success", "id": "{{$guid}}", "from": "postmaster@desk.msging.net/!msging-application-desk-mhjbn", "to": "pntransbordodev@msging.net/!msging-server-thwz5-82twgs87", "metadata": { "#command.uri": "lime://pntransbordodev@msging.net/attendants" } })
// console.log(run(responseOnlineAttendant))

function run(responseOnlineAttendant) {
    try {
    responseOnlineAttendant = JSON.parse(responseOnlineAttendant)
    let attendant = responseOnlineAttendant.resource.items

    for (let i = 0; i < attendant.length; i++) {
        if (attendant[i].status == "Online") {
            return true
        }
    }

    return false
    }
    catch (e) {
        return 'error'
    }
}