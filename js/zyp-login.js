

// 快速登录
// 设置一个变量，记录验证码数字
var vCode = 0;
// 注册获取验证码按钮点击事件
$('.obtain_validcode').on('click', function () {
    // 手机号正则表达式
    var reg_pn = /^1[34578]\d{9}$/;
    //弹出遮盖层
    $('.alert_page').fadeIn(1000);
    // 当不匹配时弹出弹框
    if (!reg_pn.test($('.phone_num').val())) {
        //显示出提示文本
        if (!$('.phone_num').val()) {
            // 当输入框没输入值时提示输入手机号
            $('.hint_info').text('请输入手机号');
        }else {
            // 当输入框输入值与不符合手机号格式时提示输入有误
            $('.hint_info').text('输入手机号有误');
        }
        // 显示提示的小白框
        $('.hint').fadeIn(1000);
        // 设置定时器，两秒后自动隐藏
        setTimeout(function () {
            $('.alert_page').fadeOut();
            $('.hint').fadeOut();
        }, 2000)
    }else {
        // 调用canvas函数
        setCanvas();
        // 显示验证图块
        $('.jigsaw_box').fadeIn(1000);
        jigsaw.init(document.getElementById('captcha'), function () {
            //验证成功显示提示的文本
            vCode = getRandomNum();
            $("#msg").fadeIn(300).html(vCode);
            setTimeout(function(){
                $('.jigsaw_box').fadeOut();
                $('.alert_page').fadeOut();
                $("#msg").fadeOut();
                // 移除画布，防止再次点击获取验证码时出现多个canvas
                $('#captcha').empty();
                // 获取验证码按钮禁用，进入一分钟倒计时
                $('.obtain_validcode').attr('disabled', true).css('color', '#bbb');
                var count = 59;
                $('.obtain_validcode').val('重新发送(' + count + 's)');
                var timerId = setInterval(function(){
                    count--;
                    $('.obtain_validcode').val('重新发送(' + count + 's)');
                    if(count == 0) {
                        $('.obtain_validcode').val('获取验证码').attr('disabled', false).css('color', '#0b8bff');
                        clearInterval(timerId);
                    }
                },1000)  
            },3000)
            
        }, function () {
            //验证失败后的事件自定义
            $("#msg").fadeIn(300).html("验证失败");
            $("#msg").fadeOut(700);
        })
    }   
})


// 注册协议点击事件
$('.check_box').on('click', function(){
    $(this).toggleClass('isChecked');
    if (!$(this).hasClass('isChecked')) {
        $('.submit_form').eq(0).attr('disabled', true).css('backgroundColor', '#aed5ff');
    }else {
        if ($('.validcode').val().length === 6 && $('.validcode').val() == vCode) {
            $('.submit_form').eq(0).attr('disabled', false).css('backgroundColor', '#0b8bff');
        }
    }
})
// 注册实时监听验证码输入框的变化事件
$('.validcode').on('input propertychange', function(){
    // 当输入验证码正确时
    console.log(vCode)
    if ($(this).val().length === 6 && $(this).val() == vCode) {
        // 协议已经选择
        if ($('.check_box').hasClass('isChecked')) {
            $('.submit_form').eq(0).attr('disabled', false).css('backgroundColor', '#0b8bff');
        }
    }else {
        $('.submit_form').eq(0).attr('disabled', true).css('backgroundColor', '#aed5ff');
    }
})
$('.submit_form').on('click', function(e){
    e.preventDefault();
    window.location.href = './zyp-lesson_more.html?type=8'
})



// 账号密码登录
$('.phone_num_sec').on('input propertychange', function(){
    rightVerify();
});
$('.psw').on('input propertychange', function(){
    rightVerify();
});
$('.check_box_sec').on('click', function(){
    rightVerify();
});


// 封装提交解禁函数
function rightVerify(){
    if ($('.phone_num_sec').val() == '13000000000' && $('.check_box_sec').hasClass('isChecked') && $('.psw').val() == '88888888') {
        $('.submit_form').eq(1).attr('disabled', false).css('backgroundColor', '#0b8bff');
    }else {
        $('.submit_form').eq(1).attr('disabled', true).css('backgroundColor', '#aed5ff');
    }
}

// 注册清空输入框事件
$('.am-tabs-bd input').not('.submit_form, .obtain_validcode').on('input propertychange', function(){
    if ($(this).val()) {
        // 显示清空按钮
        $(this).siblings('i').show();
        // 注册点击事件，点击之后清空内容，按钮隐藏
        $(this).siblings('i').on('click', function(){
            $(this).parent().children().eq(0).val('');
            $(this).hide();
            console.log($(this)[0]);
        })
    }
})


// 随机6位数的验证码
function getRandomNum(){
    var myNum = '' + (parseInt( Math.random() * 9) + 1);
    for(var i = 1; i < 6; i++){
        myNum += parseInt(Math.random() * 10);
    }
    return parseInt(myNum);
}


// 封装canvas函数
function setCanvas() {
    const l = 42, // 滑块边长
        r = 10, // 滑块半径
        w = document.documentElement.clientWidth, // canvas宽度
        h = 360 * w / 640, // canvas高度
        PI = Math.PI
    const L = l + r * 2 // 滑块实际边长
    // 获取随机数
    function getRandomNumberByRange(start, end) {
        return Math.round(Math.random() * (end - start) + start)
    }
    // 创建canvas
    function createCanvas(width, height) {
        const canvas = createElement('canvas')
        canvas.width = w
        canvas.height = h
        return canvas
    }
    // 创建图片
    function createImg(onload) {
        const img = createElement('img')
        img.crossOrigin = "Anonymous"
        img.onload = onload
        img.onerror = () => {
            img.src = getRandomImg()
        }
        img.src = getRandomImg()
        return img
    }
    // 封装创建元素的函数
    function createElement(tagName) {
        return document.createElement(tagName)
    }
    // 封装添加类名的函数
    function addClass(tag, className) {
        tag.classList.add(className)
    }
    // 封装移除类名的函数
    function removeClass(tag, className) {
        tag.classList.remove(className)
    }
    function getRandomImg() {
        return 'https://picsum.photos/640/360/?image=' + getRandomNumberByRange(0, 100)

    }

    function draw(ctx, operation, x, y) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + l / 2, y)
        ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI)
        ctx.lineTo(x + l / 2, y)
        ctx.lineTo(x + l, y)
        ctx.lineTo(x + l, y + l / 2)
        ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI)
        ctx.lineTo(x + l, y + l / 2)
        ctx.lineTo(x + l, y + l)
        ctx.lineTo(x, y + l)
        ctx.lineTo(x, y)
        ctx.fillStyle = '#fff'
        ctx[operation]()
        ctx.beginPath()
        ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI)
        ctx.globalCompositeOperation = "xor"
        ctx.fill()
    }

    function sum(x, y) {
        return x + y
    }

    function square(x) {
        return x * x
    }

    class jigsaw {
        constructor(el, success, fail) {
            this.el = el
            this.success = success
            this.fail = fail
        }

        init() {
            this.initDOM()
            this.initImg()
            this.draw()
            this.bindEvents()
        }

        initDOM() {
            const canvas = createCanvas(w, h) // 画布
            const block = canvas.cloneNode(true) // 滑块
            const sliderContainer = createElement('div')
            const refreshIcon = createElement('div')
            const sliderMask = createElement('div')
            const slider = createElement('div')
            const sliderIcon = createElement('span')
            const text = createElement('span')

            block.className = 'block'
            sliderContainer.className = 'sliderContainer'
            refreshIcon.className = 'refreshIcon'
            sliderMask.className = 'sliderMask'
            slider.className = 'slider'
            sliderIcon.className = 'sliderIcon'
            text.innerHTML = '滑动滑块进行验证'
            text.className = 'sliderText'

            const el = this.el
            el.appendChild(canvas)
            el.appendChild(refreshIcon)
            el.appendChild(block)
            slider.appendChild(sliderIcon)
            sliderMask.appendChild(slider)
            sliderContainer.appendChild(sliderMask)
            sliderContainer.appendChild(text)
            el.appendChild(sliderContainer)

            Object.assign(this, {
                canvas,
                block,
                sliderContainer,
                refreshIcon,
                slider,
                sliderMask,
                sliderIcon,
                text,
                canvasCtx: canvas.getContext('2d'),
                blockCtx: block.getContext('2d')
            })
        }

        initImg() {
            const img = createImg(() => {
                this.canvasCtx.drawImage(img, 0, 0, w, h)
                this.blockCtx.drawImage(img, 0, 0, w, h)
                const y = this.y - r * 2 + 2
                const ImageData = this.blockCtx.getImageData(this.x, y, L, L)
                this.block.width = L
                this.blockCtx.putImageData(ImageData, 0, y)
            })
            this.img = img
        }

        draw() {
            // 随机创建滑块的位置
            this.x = getRandomNumberByRange(L + 10, w - (L + 10))
            this.y = getRandomNumberByRange(10 + r * 2, h - (L + 10))
            draw(this.canvasCtx, 'fill', this.x, this.y)
            draw(this.blockCtx, 'clip', this.x, this.y)
        }

        clean() {
            this.canvasCtx.clearRect(0, 0, w, h)
            this.blockCtx.clearRect(0, 0, w, h)
            this.block.width = w
        }

        bindEvents() {
            this.el.onselectstart = () => false
            this.refreshIcon.onclick = () => {
                this.reset()
            }
            let originX, originY, trail = [], istouchstart = false
            this.slider.addEventListener('touchstart', function (e) {
                originX = e.targetTouches[0].pageX, originY = e.targetTouches[0].pageY
                istouchstart = true
            })
            document.addEventListener('touchmove', (e) => {
                if (!istouchstart) return false
                const moveX = e.targetTouches[0].pageX - originX
                const moveY = e.targetTouches[0].pageY - originY
                if (moveX < 0 || moveX + 38 >= w) return false
                this.slider.style.left = moveX + 'px'
                var blockLeft = (w - 40 - 20) / (w - 40) * moveX
                this.block.style.left = blockLeft + 'px'

                addClass(this.sliderContainer, 'sliderContainer_active')
                this.sliderMask.style.width = moveX + 'px'
                trail.push(moveY)
            })
            document.addEventListener('touchend', (e) => {
                if (!istouchstart) return false
                istouchstart = false
                if (e.changedTouches[0].pageX == originX) return false
                removeClass(this.sliderContainer, 'sliderContainer_active')
                this.trail = trail
                const { spliced, TuringTest } = this.verify()
                if (spliced) {
                    if (TuringTest) {
                        addClass(this.sliderContainer, 'sliderContainer_success')
                        this.success && this.success()
                    } else {
                        addClass(this.sliderContainer, 'sliderContainer_fail')
                        this.text.innerHTML = '再试一次'
                        this.reset()
                    }
                } else {
                    addClass(this.sliderContainer, 'sliderContainer_fail')
                    this.fail && this.fail()
                    setTimeout(() => {
                        this.reset()
                    }, 1000)
                }
            })
         
        }
        verify() {
            const arr = this.trail // 拖动时y轴的移动距离
            const average = arr.reduce(sum) / arr.length // 平均值
            const deviations = arr.map(x => x - average) // 偏差数组
            const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length) // 标准差
            const left = parseInt(this.block.style.left)
            return {
                spliced: Math.abs(left - this.x) < 10,
                TuringTest: average !== stddev, // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
            }
        }

        reset() {
            this.sliderContainer.className = 'sliderContainer'
            this.slider.style.left = 0
            this.block.style.left = 0
            this.sliderMask.style.width = 0
            this.clean()
            this.img.src = getRandomImg()
            this.draw()
        }

    }

    window.jigsaw = {
        init: function (element, success, fail) {
            new jigsaw(element, success, fail).init()
        }
    }
}


