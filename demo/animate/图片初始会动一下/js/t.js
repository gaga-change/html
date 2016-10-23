/**
 * Created by qingyun2 on 16/10/23.
 */

console.log(window);

var w = window.innerWidth;
var h = window.innerHeight;
var eles = document.querySelectorAll('[data-move]');
var arrEle = [];
for (var i = 0; i < eles.length; i++) {
    console.log(eles[i].attributes['data-move'].value);
    //根据不同的值,偏移不同的量。
    // $(eles[i]).addClass('move-top');
    arrEle.push(eles[i]);
}
moveEle();
window.onscroll = function (e) {
    // console.log(e);
    moveEle();
    console.log();
};
window.onresize = function (e) {
    w = window.innerWidth;
    h = window.innerHeight;
    moveEle();
};
function moveEle() {
    // console.log(arrEle);
    if (arrEle.length == 0) return;
    // console.log(eles);
    var arr = [];
    // 获取到元素到body的高度
    for (var i = 0; i < arrEle.length; i++) {
        arr[i] = {top: 0};
        var tag = arrEle[i];
        while (tag.nodeName != "BODY") {
            arr[i].top += tag.offsetTop;
            tag = tag.parentElement;
        }
    }
    // console.log(arr);
    // $('body')[0].scrollTop
    var arrTemp = [];
    arr.map(function (ele, i) {
        // console.log(ele);
        if (ele.top < $('body')[0].scrollTop + h && ele.top > $('body')[0].scrollTop) {
            console.log('aa');
            var dir = arrEle[i].attributes['data-move'].value;
            $(arrEle[i]).addClass('move-' + dir);
            arrTemp.push(i);
        }
    });
    arrEle = arrEle.filter(function (ele, index) {
        var b = true;
        arrTemp.map(function (ele) {
            if(ele == index) b =false;
        });
        return b;
    })
}