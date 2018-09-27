//获取当前页面的链接，并将所需的值切割成数组
if (window.location.href.indexOf('?') != -1 ) {
    var arr = decodeURI(window.location.href).split('?')[1].split('&')
    console.log(arr);
    $('.header').css('backgroundImage', 'url(' + arr[0].split('=')[1] + ')');
    $('.title h3').text(arr[1].split('=')[1].slice(1, -1))
    $('.money').text(arr[2].split('=')[1].slice(1, -1));
    $('.footer .right').text('立即参加：' + arr[2].split('=')[1].slice(1, -1));
    $('.join_p').text(arr[3].split('=')[1] + '人参加')
}
