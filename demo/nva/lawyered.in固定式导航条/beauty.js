/**
 * Created by jundong on 16/10/15.
 */
'use strict';

(function (w) {
    if (!w)return;
    console.log(w);
    w.onscroll = function (e) {
        var t = $(document).scrollTop();
        // console.log(t);
        if (t > 100) {
            $('[data-id = ho]').slideUp();
        }else{
            $('[data-id = ho]').slideDown();
        }
    }
})(window);
