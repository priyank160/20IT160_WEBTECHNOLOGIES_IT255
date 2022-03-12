window.onload =function change_color() {
    var color=['violet','blue','green','violet','darkgrey','orange','yellow','gray','red'];
    document.body.style.background=color[Math.floor(Math.random()*color.length)]
}