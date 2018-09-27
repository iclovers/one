(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            var webRem = 100 * (clientWidth / 640);
            if(webRem>100){
                webRem=100;
                docEl.style.fontSize = webRem + 'px';
            }else{
                docEl.style.fontSize = webRem + 'px';
            }

        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
