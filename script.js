player = document.getElementById("player")
function change(caller){
    player.src = "src/"+caller.innerHTML+".mp3"
    for (const a of document.getElementsByTagName("a")){
        if (a.classList.contains("music_sel")){
            a.classList.add("music")
            a.classList.remove("music_sel")
        }
    }
    caller.classList.add("music_sel")
    caller.classList.remove("music")
    player.load()
    player.play()
}