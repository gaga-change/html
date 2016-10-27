/**
 * Created by qingyun2 on 16/10/24.
 */
$(document).ready(function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var headTop = $('[data-id = heatTop]')
    var nav = $('[data-id = nav]');
    hnSet();
    hnScroll();
    window.onscroll = function (e) {
        hnScroll()
    };
    window.onresize = function (e) {
        w = window.innerWidth;
        h = window.innerHeight;
        hnSet();
    };
    function hnScroll() {
        if ($('body')[0].scrollTop > h * 0.075) {
            headTop.css({
                height: 0
            });
            nav.css({
                top: 0 + 'px'
            });
        } else {
            headTop.css({
                height: h * 0.075 + 'px'
            });
            nav.css({
                top: h * 0.075 + 'px'
            });
        }
    }
    function hnSet() {
        headTop.css({
            height: h * 0.075 + 'px',
            lineHeight: h * 0.075 + 'px',
            left: ($('body')[0].clientWidth - headTop[0].clientWidth) / 2 + 'px'
        });
        nav.css({
            height: h * 0.075 + 'px',
            lineHeight: h * 0.075 + 'px',
            top: h * 0.075 + 'px',
            left: ($('body')[0].clientWidth - headTop[0].clientWidth) / 2 + 'px'
        });
    }
});