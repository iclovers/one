$(function () {
    var ul = $('.content ul');
    var lis = ul.find('li');
    var firstNum = $('.firstNum');
    // console.log(lis.length)
    //总选择数
    var secondNum = $('.secondNum');
    secondNum.text(lis.length);
    //循环遍历每个选择并添加点击事件，点击选择切换下一题，点击上一题切换到上一个li

    var index = 0;
    lis.each(function (key, value) {
        var span = $(value).find('span');
        var prev = $(value).find('.prev');
        var submit = $(value).find('.submit');
        span.on('click', function () {
            index++;
            console.log('++' + index)
            if (index == lis.length) {
                // span.off('click');
                // return;left 25%
                prev.css('display', 'none');
                submit.css('display', 'block');
                $(this).addClass('bgc').siblings().removeClass('bgc');
                span.off('click');
                return;
            }
            $(this).addClass('bgc').siblings().removeClass('bgc');
            // $(this).children().css('backgroundColor', '#ffdd2b');
            $(this).parent('li').removeClass('active');
            $(this).parent('li').css('transform', 'translateX(-5.8rem)');
            $(this).parent("li").next().addClass('active');
            $(this).parent("li").next().css('transform', 'translateX(0rem)');
            firstNum.text(index + 1);
            
        });
        //上一题的点击事件
        prev.on('click', function () {
            // console.log(index)
            if (index == 0) {
                prev.off('click');
                return;
            }
            $(this).parent('li').css('transform', 'translateX(5.8rem)');
            $(this).parent('li').removeClass('active');
            $(this).parent("li").prev().addClass('active');
            $(this).parent("li").prev().css('transform', 'translateX(0rem)');
            index--;
            console.log('--' + index)
            firstNum.text(index+1);
        });
    });

})