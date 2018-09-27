window.onload = function () {
    scrollBar();
    scrollBest();
    scrollVertival();
}


// 导航栏
function scrollBar(e) {
    var c_nav_ul = document.querySelector('.c_nav_ul');
    var c_nav_dots = document.querySelector('.c_nav_dots');
    var fontS = parseInt(document.getElementsByTagName('html')[0].style.getPropertyValue("font-size"));
    var startX = 0,
        moveX = 0,
        distanceX = 0,
        currentX = 0;
    var maxLeft = 0;
    var minLeft = -6.4 * fontS;
    var maxSlideLeft = 20;
    var minSlideLeft = -6.4 * fontS - 20;
    c_nav_ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    })
    c_nav_ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        if (currentX + distanceX >= maxSlideLeft || currentX + distanceX <= minSlideLeft) {
            return;
        }
        c_nav_ul.style.transition = 'none';
        c_nav_ul.style.left = (currentX + distanceX) / fontS + 'rem';
    })
    c_nav_ul.addEventListener('touchend', function (e) {
        if (currentX + distanceX < minLeft) {
            currentX = minLeft;
            c_nav_ul.style.transition = 'all 0.5s';
            c_nav_ul.style.left = minLeft / fontS + 'rem';
        } else if (currentX + distanceX > maxLeft) {
            currentX = maxLeft;
            c_nav_ul.style.transition = 'all 0.5s';
            c_nav_ul.style.left = 0;
        }
        // 判断拖动距离
        if(Math.abs(distanceX) > 100) {
            if(distanceX < 0) {
                c_nav_ul.style.transition = 'all 0.5s';
                c_nav_ul.style.left = minLeft / fontS + 'rem';
                currentX = minLeft;
                distanceX = 0;
            }else {
                c_nav_ul.style.transition = 'all 0.5s';
                c_nav_ul.style.left = 0;
                currentX = 0;
                distanceX = 0;
            }  
        } else {
            if (c_nav_ul.offsetLeft < - 3.2 * fontS) {
                c_nav_ul.style.transition = 'all 0.5s';
                c_nav_ul.style.left = minLeft / fontS + 'rem';
            }else {
                c_nav_ul.style.transition = 'all 0.5s';
                c_nav_ul.style.left = 0;
            }
        }
        
    })
    c_nav_ul.addEventListener('webkitTransitionEnd', function () {
        if (c_nav_ul.offsetLeft < 0) {
            c_nav_dots.children[0].children[0].classList.remove('active');
            c_nav_dots.children[0].children[1].classList.add('active');
            console.log(1)
        } else {
            c_nav_dots.children[0].children[1].classList.remove('active');
            c_nav_dots.children[0].children[0].classList.add('active');
        }
    }, false);
}
//最佳人气
function scrollBest(e) {
    var c_bester_box = document.querySelector('.c_bester_box');
    var c_bester_lists = document.querySelector('.c_bester_lists ');
    var c_bester_content = document.querySelector('.c_bester_content ');
    var fw = c_bester_content.offsetWidth;
    //获取html字体的大小
    var fontS = parseInt(document.getElementsByTagName('html')[0].style.getPropertyValue("font-size"));
    // 计算每个li的宽度，包含margin
    var w = c_bester_lists.clientWidth + parseInt(window.getComputedStyle(c_bester_lists, null)['margin-right']);
    var startX = 0,
        moveX = 0,
        distanceX = 0,
        currentX = 0;
    var maxLeft = 0;
    var minLeft = -w * 5 + fw;
    var maxSlideLeft = 20;
    var minSlideLeft = -w * 5 + fw - 20;
    console.log(fw)
    console.log(minLeft + 'j');
    console.log(minSlideLeft + 'd');
    
    c_bester_box.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    })
    c_bester_box.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        if (currentX + distanceX >= maxSlideLeft || currentX + distanceX <= minSlideLeft) {
            return;
        }
        c_bester_box.style.transition = 'none';
        c_bester_box.style.left = (currentX + distanceX) / fontS + 'rem';
        console.log(c_bester_box.offsetLeft)
    })
    c_bester_box.addEventListener('touchend', function (e) {
        if (currentX + distanceX < minLeft) {
            currentX = minLeft;
            c_bester_box.style.transition = 'all 0.5s';
            c_bester_box.style.left = minLeft / fontS + 'rem';
        } else if (currentX + distanceX > maxLeft) {
            currentX = maxLeft;
            c_bester_box.style.transition = 'all 0.5s';
            c_bester_box.style.left = 0;
        }else {
            currentX += distanceX;
        }
        console.log(c_bester_box.offsetLeft + 'e');
        console.log(minLeft / fontS + 'rem')   
        
        console.log(fontS)
    })
}
// 动态
function scrollVertival(){
    var index = 0
    var box_wrapper = document.querySelector('.box-wrapper');
    var c_reserve  = document.querySelector('.c_reserve ');
    var h = c_reserve.offsetHeight;
    setInterval(function(){
        index ++;
        box_wrapper.style.transition = 'all 0.5s';
        box_wrapper.style.top = -index * 45/50 +'rem';
        // 需等过渡完成再进行判断
        box_wrapper.addEventListener('webkitTransitionEnd', function () {
            if (index == 3) {
                index = 0;
                box_wrapper.style.transition = 'none';
                box_wrapper.style.top = 0;
            }
        })
    },2000);
}
// 轮播图的js 
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop: true,
});
// 推荐咨询师
$(function () {
    $('.c_change').on('click', function () {
        var arr_pic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var arr_name = ['刘玺儒', '汪炎', '张灵泉', '李霞', '梁娟', '李丹', '张倩', '钱蔚', '赵阔', '聂倩'];
        var arr_work = [5, 6, 7, 8, 4, 5, 6, 7, 8, 6];
        var arr_price = [500, 600, 599, 488, 388, 299, 588, 733, 999, 666];
        var arr_job = ['北大临床心理学研究生，二级心理咨询师', '美国催眠师/台湾心理师/硕士/企业讲师', '二级咨询师、中国心理学会会员、婚姻师', '心理学硕士 二级咨询师 婚姻家庭咨询师 ', '心理学硕士，美国心理学会会员', '美国索菲亚大学超个人心理学硕博研究生', '心理学硕士／英国心理治疗师协会注册会员', '赵燕青心理咨询工作室创始人 心理学研究生', '澳大利亚持照临床心理学家', '个案近3000小时, 疗愈于无形'];
        var arr_em1 = ['婚前焦虑', '第三者', '家庭冲突', '脱单攻略', '婚外情', '夫妻沟通', '产后抑郁', '家庭创伤', '性格完善',];
        var arr_em2 = ['沉迷','依恋问题', '安全感', '社会适应', '婚姻挽救', '婚姻质量', '原生家庭', '自我成长'];
        var arr_em3 = ['压力管理', '女性成长', '相处模式', '身份认同', '婚姻危机', '跨文化适应', '拖延', '自闭'];
        function RandomSort(a, b) {
            return (0.5 - Math.random());
        }
        //选取数组的前三项
        arr_pic.sort(RandomSort).slice(0, 3);
        arr_em1.sort(RandomSort).slice(0, 4);
        arr_em2.sort(RandomSort).slice(0, 4);
        arr_em3.sort(RandomSort).slice(0, 4);
        // 第一位
        $('.c_hot_detail').eq(3).find('.name').text(arr_name[arr_pic[0]]);
        $('.c_hot_detail').eq(3).find('.introduce').text(arr_job[arr_pic[0]]);
        $('.c_hot_detail').eq(3).find('.specialist')[0].children[0].innerText = arr_em1[0];
        $('.c_hot_detail').eq(3).find('.specialist')[0].children[1].innerText = arr_em1[1];
        $('.c_hot_detail').eq(3).find('.specialist')[0].children[2].innerText = arr_em1[2];
        $('.c_hot_detail').eq(3).find('.specialist')[0].children[3].innerText = arr_em1[3];
        $('.c_hot_detail').eq(3).find('img').attr('src', '../images/nml-recommand' + arr_pic[0] + '.png');
        $('.c_hot_detail').eq(3).find('.price')[0].children[0].innerText = arr_price[arr_pic[0]];
        // 第二位
        $('.sec_name').text(arr_name[arr_pic[1]]);
        $('.c_hot_detail').eq(4).find('.introduce').text(arr_job[arr_pic[1]]);
        $('.c_hot_detail').eq(4).find('.specialist')[0].children[0].innerText = arr_em2[0];
        $('.c_hot_detail').eq(4).find('.specialist')[0].children[1].innerText = arr_em2[1];
        $('.c_hot_detail').eq(4).find('.specialist')[0].children[2].innerText = arr_em2[2];
        $('.c_hot_detail').eq(4).find('.specialist')[0].children[3].innerText = arr_em2[3];
        $('.c_hot_detail').eq(4).find('img').attr('src', '../images/nml-recommand' + arr_pic[1] + '.png');
        $('.c_hot_detail').eq(4).find('.price')[0].children[0].innerText = arr_price[arr_pic[1]];
        $('.work').eq(0).text(arr_work[arr_pic[1]])
        // 第三位
        $('.th_name').text(arr_name[arr_pic[2]]);
        $('.c_hot_detail').eq(5).find('.introduce').text(arr_job[arr_pic[2]]);
        $('.c_hot_detail').eq(5).find('.specialist')[0].children[0].innerText = arr_em3[0];
        $('.c_hot_detail').eq(5).find('.specialist')[0].children[1].innerText = arr_em3[1];
        $('.c_hot_detail').eq(5).find('.specialist')[0].children[2].innerText = arr_em3[2];
        $('.c_hot_detail').eq(5).find('.specialist')[0].children[3].innerText = arr_em3[3];
        $('.c_hot_detail').eq(5).find('img').attr('src', '../images/nml-recommand' + arr_pic[2] + '.png');
        $('.c_hot_detail').eq(5).find('.price')[0].children[0].innerText = arr_price[arr_pic[2]];
        $('.work').eq(1).text(arr_work[arr_pic[2]])
    })
})
$(function () {
    var id = '#my-offcanvas';
    var $myOc = $(id);
    $('.doc-oc-js').on('click', function () {
        $myOc.offCanvas($(this).data('rel'));
    });

    $myOc.on('open.offcanvas.amui', function () {
        console.log(id + ' 打开了。');
    }).on('close.offcanvas.amui', function () {
        console.log(id + ' 关闭了。');
    });
});