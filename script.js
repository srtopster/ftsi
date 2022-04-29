player = document.getElementById("player")
function change(caller){
    player.src = "src/"+caller.innerHTML+".mp3"
    a = document.getElementsByTagName("a")
    for (const i of a){
        if (i.classList.contains("music_red")){
            i.classList.add("music")
            i.classList.remove("music_red")
        }
    }
    caller.classList.add("music_red")
    caller.classList.remove("music")
    player.load()
    player.play()
}