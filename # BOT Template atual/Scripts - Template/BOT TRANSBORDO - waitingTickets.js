// let responseWaiting = JSON.stringify({"type":"application/vnd.iris.desk.ticketssummary+json","resource":{"waiting":0,"open":0,"closed":2,"closedAttendant":2,"closedClient":0,"transferred":0,"missed":0,"inAttendance":0},"method":"get","status":"success","id":"{{$guid}}","from":"postmaster@desk.msging.net/!msging-application-desk-qg7mv","to":"pntransbordodev@msging.net/!msging-server-ww6jb-82twgs87","metadata":{"#command.uri":"lime://pntransbordodev@msging.net/monitoring/tickets"}})
// console.log(run(responseWaiting))

function run(responseWaiting) {
    try {
        responseWaiting = JSON.parse(responseWaiting)
        let waiting = responseWaiting.resource.waiting

        if (waiting == 0) {
            return false
        }

        return true
    }
    catch (e) {
        return 'error'
    }
}