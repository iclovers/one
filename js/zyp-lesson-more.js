if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

function scrollBar(e) {
    var tab_nav_ul = document.querySelector('.tab_nav>ul');
    var tab_bd_ul = document.querySelector('.tab_bd>ul');
    var startX = 0,
    moveX = 0,
    distanceX = 0,
    currentX = 0;
    var maxLeft = 0;
    var minLeft = -4.8*50;
    var maxSlideLeft = 20;
    var minSlideLeft = -4.8 * 50 - 20;
    // 注册手指滑动事件
    tab_nav_ul.addEventListener('touchstart', function(e){
        startX = e.targetTouches[0].clientX;
    })
    tab_nav_ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        if (currentX + distanceX >= maxSlideLeft || currentX + distanceX <= minSlideLeft) {
            return;
        }
        tab_nav_ul.style.transition = 'none';
        tab_nav_ul.style.left = (currentX + distanceX)/50 + 'rem';
    })
    tab_nav_ul.addEventListener('touchend', function (e){
        if (currentX + distanceX < minLeft) {
            currentX = minLeft ;
            tab_nav_ul.style.transition = 'all 0.5s';
            tab_nav_ul.style.left = minLeft / 50 + 'rem';
        } else if (currentX + distanceX > maxLeft){
            currentX = maxLeft;
            tab_nav_ul.style.transition = 'all 0.5s';
            tab_nav_ul.style.left = maxLeft / 50 + 'rem';
        }else {
            currentX += distanceX;
        }
    })
    // 给按钮注册点击事件
        $('.tab_nav>ul>li').on('click', function () {
            // 获取当前被点击的索引
            var index = $(this).index();
            // 设置点击时tab导航栏滑动
            if (index <= 3) {
                tab_nav_ul.style.transition = 'all 0.5s';
                tab_nav_ul.style.left = -index * 1.6 + 'rem';
                currentX = -index * 1.6 * 50;
            } else {
                tab_nav_ul.style.left = - 3 * 1.6 + 'rem';
                currentX = -3 * 1.6 * 50;
            }
            // 设置对应的按钮样式
            $(this).addClass('active').siblings().removeClass('active');
            $('.tab_bd>ul>li').eq(index).addClass('active').siblings().removeClass('active');
        })
    
    if (window.location.href.indexOf('?') != -1 ){
        // 对url进行切分，选取出对应的type值，即为跳转页面对应的tab索引
        var mindex = window.location.href.split('?')[1].split('=')[1];
        // 当索引值符合要求时，设置相应的样式
        if (mindex < 7) {
            if (mindex <= 3) {
                tab_nav_ul.style.transition = 'all 0.5s';
                tab_nav_ul.style.left = -mindex * 1.6 + 'rem';
                currentX = -mindex * 1.6 * 50;
            } else {
                tab_nav_ul.style.left = - 3 * 1.6 + 'rem';
                currentX = -3 * 1.6 * 50;
            }
            $('.tab_nav>ul>li').eq(mindex).addClass('active').siblings().removeClass('active');
            $('.tab_bd>ul>li').eq(mindex).addClass('active').siblings().removeClass('active');
        }
        if(mindex == 8) {
            $('.login_link').children('img').removeClass('active').siblings().addClass('active');
        }
    }
    
}
scrollBar();
    





