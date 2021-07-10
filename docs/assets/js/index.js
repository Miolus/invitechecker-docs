$.ajax({
    url: "https://content.miolus.de:8080/docs_sync",
    type: "GET",
    dataType: "json",
    success: function(data){
        process_sync(data)
    },
    error: function(error){
        process_sync({"type":"error", "message":"InviteChecker is currently offline."})
    },
}),

function process_sync (data) {
    if (data["type"] === null) {
        return
    },
    emoji = {"interruption":":warning:", "update":":information_source:"}
    banner
}