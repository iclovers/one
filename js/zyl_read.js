$(function() {
    // 点击关闭推荐下载
    var top = $('.top');
    var colse = top.find('.am-u-sm-1');
    colse.on('click', function(){
        top.hide(500);
    });

    // 导航栏横滑事件
    setTimeout(function(){
        var nav = $('.nav');
        var ul = nav.find('ul');
        var lis = ul.find('li');
        var sumWidth = 0;
        lis.each(function(index,value){
            sumWidth = sumWidth + $(value).innerWidth();
        });
        ul.width(sumWidth);
        var myScroll = new IScroll('.nav',{
            scrollX: true, scrollY: false
        });
    }, 2000);
    

    // 轮播图
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 1000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false
    });

    // 滚动监听
    searchEffect();

    // 登录界面正则验证
    check('phone', /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, '▲请输入正确的11位手机号');
    check('code', /^\d{6}$/, '▲请输入正确的6位验证码');
    check('password', /^[a-zA-Z]\w{5,17}$/, '▲请输入正确的6-18位密码,必须字母开头');
    check('email', /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, '▲请输入正确的邮箱地址');


    // tab栏切换
    var tabs = $('.nav a');
    var index;
    // 循环添加索引，用于tab切换
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('index', i);
    }
    tabs.on('click', function(){
        // 循环遍历清除所有tab的高亮
        for(var i =0; i < tabs.length; i++) {
            tabs.removeClass('active');
        }
        // 事件触发tab添加高亮
        $(this).addClass('active');
        index = parseInt(this.getAttribute('index'));
        // 需要切换的tab内容，通过eq内拼接index作为索引，添加对应的显示类名，并移除其他兄弟的显示类名
        $('.box > div:eq('+ index +')').addClass('show').siblings().removeClass('show');
    });

    // 关闭侧边栏
    var id = '#my-offcanvas';
    var $myOc = $(id);
    $('.doc-oc-js').on('click', function() {
      $myOc.offCanvas($(this).data('rel'));
    });

    $myOc.on('open.offcanvas.amui', function() {
      console.log(id + ' 打开了。');
    }).on('close.offcanvas.amui', function() {
      console.log(id + ' 关闭了。');
    });
})

// 滚动加载
function searchEffect() {
    var content = document.querySelector('.content');
    var load = $('.load');
    // 获取需要拷贝的元素
    var am_g = content.querySelectorAll('.am-g');
    // 获取需要修改img路径的元素
    // var imgSrc = am_g.querySelectorAll('img');
    // 获取后面的元素
    var am_gs = content.querySelectorAll('.am-g:nth-of-type(n+6)');
    for(var i = 0; i < am_gs.length; i++) {
        am_gs[i].style.display = 'none';
    }
    // 索引用来做img的src
    // var index = 1;
    // 避免重复加载
    var isTrue = true;
    window.onscroll = function() {
        var offsetTop = document.documentElement.scrollTop; 
        if(offsetTop >= 280) {
            setTimeout(function(){
                for(var i = 0; i < am_gs.length; i++) {
                    am_gs[i].style.display = 'block';   
                }
            }, 1000);
        } 
        if(offsetTop <= 800 && offsetTop >= 750) {
            if(isTrue){
                isTrue = false;
                setTimeout(function(){
                    for(var i = 0; i < 5; i++) {
                        var bb = am_g[i].cloneNode(true);
                        content.appendChild(bb);   
                    }
                }, 1000);          
            }
        } 
        if(offsetTop >= 1250 && offsetTop <= 1270) {
            isTrue = true;
            if(isTrue){
                isTrue = false;
                setTimeout(function(){
                    for(var i = 0; i < 5; i++) {
                        var bb = am_g[i].cloneNode(true);
                        content.appendChild(bb);   
                    }
                    load.hide(); 
                }, 1000);
            }
        }
    }
}

// 登录界面正则验证
function check(element, reg, tip) {
    var element = document.getElementById(element);
    element.onblur = function() {
        var span = this.nextElementSibling;
        if(!reg.test(this.value)) {
            //不匹配提示
            span.innerText = tip;
            span.style.color = '#ff2200a8';
        } else {
            //匹配清除提示
            span.innerText = '';
            span.style.color = '';
        }
    }            
}