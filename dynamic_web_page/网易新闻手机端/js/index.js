/**
 * Created by qingyun2 on 16/10/24.
 */
$(document).ready(function () {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var headTop = $('[data-id = heatTop]')
    headTop.css({
        height: h * 0.075
    });
    var nav = $('[data-id = nav]');
    console.log(nav);

    nav.css({
        height: h * 0.075 + 'px',
        top: h * 0.075 + 'px'
    });
    window.onscroll = function (e) {
        if ($('body')[0].scrollTop > h * 0.075) {
            headTop.css({
                height: 0
            });
            nav.css({
                top: 1 + 'px'
            });
        }else {
            headTop.css({
                height: h * 0.075
            });
            nav.css({
                top: h * 0.075 + 'px'
            });
        }
    };
    window.onresize = function (e) {
        w = window.innerWidth;
        h = window.innerHeight;
    }
});