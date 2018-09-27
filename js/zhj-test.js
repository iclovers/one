$(function () {
    $(function () {
        FastClick.attach(document.body)
    });
    //1、左侧栏滑动
    myScroll1 = new IScroll('#wrapper', {
        hScrollbar: false, //禁止横向滚动
        mouseWheel: true,
        scrollbars: false,
        vScroll: true, //为true时允许y轴滚动
        bounce: true, //当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
        click: true, //如果你想你的应用程序响应click事件，那么该设置次属性为true
        hideScrollbar: true //是否隐藏滚动条  
    });
    //实现点击效果：前面添加小竖条、字体加粗、背景变白
    // var lis = $('.aside-left ul li');
    // for (var i = 0; i < lis.length; i++) {
    //     var li = lis[i];
    //     $(li).on('click', function () {
    //         console.log(1)
    //         $(this).addClass('active').siblings().removeClass('active');
    //     })
    // }
    //2、点击排序切换内容
    var btn = $('.btn');
    var sortCon = $('.sort-con');
    var mask = $('.mask')
    btn.on('click', function () {
        sortCon.css('display', 'block');
        mask.css('display', 'block');
    });
    $('.sort-con>li').on('click', function () {
        var text = $(this).text();
        $('.btn > span:eq(0)').text(text);
        sortCon.fadeOut(300);
        console.log(sortCon);
        mask.fadeOut(300);
    })
   
   
    //3、右侧内容滑动
    var ul = $('.ulBox:first-of-type');
    var lis = ul.find('li');
    var contentBoxHeight = $('#content').innerHeight();
    var contentHeight = $('#content').height();
    var paddingHeight = contentBoxHeight - contentHeight;
    // console.log(paddingHeight)
    var totalHeight = 0;
    lis.each(function (index, value) {
        totalHeight += $(value).outerHeight();
        // console.log($(value).outerHeight())
    });
    ul.height(totalHeight+paddingHeight); 
    // console.log(totalHeight)
    var myScroll = new IScroll('.right-con', {
        scrollX: false, scrollY: true
    });
    $('#doc-my-tabs').tabs();
    
    //4、点击左侧栏实现右侧显示对应的内容
    // 通过对应的索引号来实现对应的展示效果
    var ul = $('.aside-left>ul');
    var leftLis = ul.find('li');
    $('.aside-left>ul>li').on('click', function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.right-con>ul:eq(' + index + ')').show().siblings().hide();
    });
    
})