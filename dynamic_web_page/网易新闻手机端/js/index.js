/**
 * Created by qingyun2 on 16/10/24.
 */
function artiList(data) {
    console.log(data);
}

$(document).ready(function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var headTop =  $('[data-id = headTop]');
    var nav = $('[data-id = nav]');
    var con = $('[data-id = con]');
    hnSet();
    hnScroll();
    $(window).scroll(function (e) {
        hnScroll()
    });
    $(window).resize (function (e) {
        w = window.innerWidth;
        h = window.innerHeight;
        hnSet();
    });
    function hnScroll() {
        if ($(window).scrollTop() > h * _b) {
            headTop.css({
                height: 0
            });
            nav.css({
                top: 0 + 'px'
            });
        } else {
            headTop.css({
                height: h * _b + 'px'
            });
            nav.css({
                top: h * _b + 'px'
            });
        }
    }

    function hnSet() {
        headTop.css({
            height: h * _b + 'px',
            lineHeight: h * _b + 'px',
            left: ($('body')[0].clientWidth - headTop.get(0).clientWidth) / 2 + 'px'
        });
        nav.css({
            height: h * _b + 'px',
            lineHeight: h * _b + 'px',
            top: h * _b + 'px',
            left: ($('body')[0].clientWidth - headTop.get(0).clientWidth) / 2 + 'px'
        });
    }
});