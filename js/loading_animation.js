function aload(){
    var aload_icon = document.querySelector('.load_icon');
    var load_animation = document.querySelector('.load_animation');
    var lesson_layout = document.querySelector('.lesson_layout');
    var index = 0;
    var timerId = setInterval(function(){
        aload_icon.style.backgroundPosition = 'left ' + (-index * 51.4) / 50 + 'rem';
        index++;
        if (index == 25) {
            clearInterval(timerId);
            load_animation.style.display = 'none';
            lesson_layout.style.width = '6.4rem';
        }
    },50)
}


