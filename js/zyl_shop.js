$(function(){
    // 分享按钮 
    $('.am-icon-external-link').on('click', function(){
        $('.share').fadeToggle(500);
    });
    //回到顶部按钮滑动距离显示
    window.onscroll = function(){
        var offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(offsetTop >= 100) {
            $('.top').fadeIn(500);
             // 滑动到指定距离后tab栏变为固定定位
            if(offsetTop >= 400) {
                $('.tab').css('position', 'fixed').css('top', '-0.2rem').css('left', '0px').css('width', '100%').css('box-shadow','0 1px 5px 1px rgba(0, 0, 0, .1)');
                $('.link').css('margin-bottom', '1rem');
            } else {
                $('.tab').css('position', 'static');
                $('.link').css('margin-bottom', '0');
            }
        } else {
            $('.top').fadeOut(500);
            // $('.am-nav').children('li').removeClass('am-active');
        }
    }
    // tab栏点击切换active
    // var lis = $('.am-nav').find('li');
    // lis.on('click', function(){
    //     for(var i = 0; i < lis.length; i++) {
    //         lis.removeClass('am-active');
    //     }
    //     $(this).addClass('am-active');
    // })
    // 点击显示完整目录
    $('.unfold').on('click', function(){
        $('.chapter-list .audio-list:nth-last-of-type(-n+4)').slideToggle();
        $('.unfold span:nth-of-type(1)').toggle();
        $('.unfold span:nth-of-type(2)').toggle();
    })
    $('.unfold-content').on('click', function(){
        $('.details p:nth-last-of-type(-n+2)').slideToggle(500);
        $('.unfold-content span:nth-of-type(1)').toggle();
        $('.unfold-content span:nth-of-type(2)').toggle();
    })
    
    // a标签的延迟跳转
    $('.right').on('click', function(){
        $('.login').show();
        setTimeout(function(){
            $('.login').fadeOut(500); 
        }, 2500);
        setTimeout(function(){
            window.location.href="zyp-login.html"          
        }, 3000);
    })
    // 点击播放音频
    var audio = $('audio')[0];
    var playButton = $('.play-box');
    playButton.on('click', function(){
        if(audio.paused){
            audio.play();
            $('.audio-play-button').hide();
            $('.audio-pause-button').show();
        } else {
            audio.pause();
            $('.audio-play-button').show();
            $('.audio-pause-button').hide();
        }
    })
});

