$(function () {
    $('.am-slider').flexslider({
        animation: "slide",
        direction: "horizontal",
        animationLoop: true,
        startAt: 0,                     // Integer: 开始播放的 slide，从 0 开始计数
        slideshow: true,                // Boolean: 是否自动播放
        slideshowSpeed: 3000,           // Integer: ms 滚动间隔时间
        animationSpeed: 600,            // Integer: ms 动画滚动速度
        initDelay: 0,                   // Integer: ms 首次执行动画的延迟
        randomize: false,               // Boolean: 是否随机 slide 顺序
        directionNav: false,             // Boolean: 是否创建上/下一个按钮（previous/next）
        pauseOnAction: true,            // Boolean: 用户操作时停止自动播放
        pauseOnHover: false,            // Boolean: 悬停时暂停自动播放
        useCSS: true,                   // Boolean: 是否使用 css3 transition
        touch: true,                    // Boolean: 允许触摸屏触摸滑动滑块
        controlNav: true,               // Boolean: 是否创建控制点
        playAfterPaused: null           // Integer: ms 用户停止操作多长时间以后重新开始自动播放
    });
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
    var commentArrs = [
        {id:1,img:"./images/img.jpg",replyName:"帅大叔",beReplyName:"匿名",content:"自从看了壹心理腰不酸了,腿不疼了,一口气上五楼不费劲,以前一顿一碗饭,现在一顿五晚饭",time:"2017-10-17 11:42:53",address:"深圳",osname:"",browse:"UC浏览器",replyBody:[]},
        {id:2,img:"./images/img.jpg",replyName:"匿名",beReplyName:"",content:"到菜市场买菜，看到一个孩子在看摊，我问：“一只鸡多少钱？” 那孩子回答：“23。” 我又问：“两只鸡多少钱？” 孩子愣了一下，一时间没算过来，急中生智大吼一声：“一次只能买一只！”",time:"2017-10-17 11:42:53",address:"深圳",osname:"",browse:"QQ浏览器",replyBody:[{id:3,img:"",replyName:"帅大叔",beReplyName:"匿名",content:"来啊，我们一起吃鸡",time:"2017-10-17 11:42:53",address:"",osname:"",browse:"QQ浏览器"}]},
        {id:3,img:"./images/img.jpg",replyName:"帅大叔",beReplyName:"匿名",content:"嘻嘻嘻!楼上是****",time:"2017-10-17 11:42:53",address:"深圳",osname:"IOS12",browse:"IPhoneXs",replyBody:[]}
    ];
    $(function(){
        $(".comment-list").addCommentList({data:commentArrs,add:""});
        $("#comment").click(function(){
            var obj = new Object();
            obj.img="../images/qczfoot.png";
            obj.replyName="壹心理大师";
            obj.content=$("#content").val();
            obj.browse="IPhoneXs";
            obj.osname="长沙";
            obj.replyBody="";
            $(".comment-list").addCommentList({data:[],add:obj});
            commentNums +=1;
            $('.footComment_num').text(commentNums);
            console.log(commentNums);
        });
    });
    var commentNums= $('.comment-list').children.length + 1;
    $('.footComment_num').text(commentNums);
    $('.title_collect').on('click',function () {
        if($('.title_collect').hasClass("am-icon-star")){
            $('.title_collect').removeClass("am-icon-star");
            $('.title_collect').addClass("am-icon-star-o");
            $('.title_collect').css("color","#fff");
        }else{
            $('.title_collect').removeClass("am-icon-star-o");
            $('.title_collect').addClass("am-icon-star");
            $('.title_collect').css("color","yellow");
        }
    });
    var bPostion =0;
    var pTimeId = setInterval(function () {
        if(bPostion>=100){
            $('.load_img').fadeOut(100);
            clearInterval(pTimeId);
            bPostion=100;
        }
        bPostion += 4.167;
        $('.load_img_content').css("background-position-y",bPostion+'%');

    },80);
    $(window).on('touchmove',function (e) {
        // console.log($('.text_theme').offset().top);
        // console.log($('.text_theme').offset().top - $(window).scrollTop());
        // console.log ($('.text_theme').offset().top);
        // console.log ($(window).scrollTop());
        // console.log($('.text_theme').offset().top - $(window).scrollTop());

        // console.log($(window).scrollTop());
        var diffValue = $('.text_theme').offset().top - $(window).scrollTop();
        var diffTarget = $('.footBox').height() - $('.text_theme').height();
        console.log(diffValue - $('body').height());
        console.log(diffTarget);
        if(diffValue - $('body').height()-5<diffTarget){
            $('.footBox').fadeOut();
        }else if(diffValue - $('body').height()-5>diffTarget){
            $('.footBox').fadeIn();
        }
    });
    $('.footBox')
});