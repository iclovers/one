$(function() {
    $(".lj_fixbar").on("click", function() {
        $(".lj_fixtan").show();
    })
    $(".lj_close").on("click", function() {
        $(".lj_fixtan").hide();
    })
    //顶部
    $(".lj_xia").on("click", function() {
        $(".lj_header").slideToggle("current");
        $(".lj_yheader").slideToggle("active");

    })
    // 等加载完毕再出现红包
    var lj_fixbar = document.querySelector('.lj_fixbar');
    var timerId = setInterval(function(){
        lj_fixbar.style.display = "block";
    },2000)
       
    //绑定顶部滚动条事件 
    $(window).on("scroll", function() {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if(sTop >= 100){
            // $(".lj_btnTop").show(100);
            $(".lj_btnTop").slideDown(300);
        }else if(sTop < 100){
            // $(".lj_btnTop").hide(100);
            $(".lj_btnTop").slideUp(300);
        }
        setTimeout(function(){

        },2000)
    });
    // 关注
    $(".lj_focus").on("click",function(){
        $(".lj_foIco").addClass("focusIco");
        $(".lj_foIco").css("color","red");
    })
    $(".lj_focus1").on("click",function(){
        $(".lj_foIco1").addClass("focusIco");
        $(".lj_foIco1").css("color","red");
    })

    // 滚动监听
    searchEffect();
})


// 滚动加载
function searchEffect() {
    var content = document.querySelector('.content');
    var load = $('.load');
    // 获取需要拷贝的元素
    var lj_esCon = content.querySelectorAll('.lj_esCon');
    // 获取需要修改img路径的元素
    // var imgSrc = am_g.querySelectorAll('img');
    // 获取后面的元素
    var lj_esCons = content.querySelectorAll('.lj_esCon:nth-of-type(n+6)');
    for(var i = 0; i < lj_esCons.length; i++) {
        lj_esCons[i].style.display = 'none';
    }
    // 索引用来做img的src
    // var index = 1;
    // 避免重复加载
    var isTrue = true;
    window.onscroll = function() {
        var offsetTop = document.documentElement.scrollTop; 
        // console.log(offsetTop);
        if(offsetTop >=1420) {
            setTimeout(function(){
                for(var i = 0; i < lj_esCons.length; i++) {
                    lj_esCons[i].style.display = 'block';   
                }
            }, 2000);
        } 
        if(offsetTop <= 2220 && offsetTop >= 2100) {
            if(isTrue){
                isTrue = false;
                setTimeout(function(){
                    for(var i = 0; i < 5; i++) {
                        var bb = lj_esCon[i].cloneNode(true);
                        content.appendChild(bb);   
                    }
                }, 2000);          
            }
        } 
        if(offsetTop >= 2820 && offsetTop <= 3000) {
            isTrue = true;
            if(isTrue){
                isTrue = false;
                setTimeout(function(){
                    for(var i = 0; i < 5; i++) {
                        var bb = lj_esCon[i].cloneNode(true);
                        content.appendChild(bb);   
                    }
                    load.hide(); 
                }, 2000);
            }
        }
    }
}
