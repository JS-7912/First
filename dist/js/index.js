//获取轮播区域
let oSliderBox = document.querySelector(".focus-slider");
//使用定时器 改变ul的left值 一次改一个单位宽
let oSliderList = document.getElementById("sliderList"); //轮播图片放置的ul
let aSliderList = oSliderList.children; //轮播图片列表
let perWidth = aSliderList[0].offsetWidth; //每一个区块的单位宽
//设置ul的宽度，不能再样式中给一个固定值，因为区块的数量不确定
//ul的宽度是列表的个数*单位宽
oSliderList.style.width = aSliderList.length * perWidth + "px";
//再列表的后面补上一张，这一张图片和第一张一样，当轮播区域显示最后一张，在往下走，应该出来空白，但是在出来空白之前的那一瞬间，把ul的left值变成0，轮播区域展示的是真正的第一张，继续走第二张
let count = 0; //计数 定时器每走一次，加1，改变ul的left值，让每一次都增加一个单位宽
function move() {
    count++;
    //右箭头，控制count的临界值，因为count一直增加的话，空白肯定会出现
    if (count == aSliderList.length) {
        oSliderList.style.left = 0; //轮播区域展示的是真正的第一张
        //如果不改变count值的话，从第1张到空白
        count = 1;
    }
    //左箭头 count==0 显示的是第一张图片  
    if (count == -1) {
        //轮播区域展示最后一张（我们复制的那一张）
        oSliderList.style.left = -perWidth * (aSliderList.length - 1) + "px";
        //控制count的值 倒数第二张出现
        count = aSliderList.length - 2;
    }
    //焦点类名的添加和移除
    for (let i = 0; i < aNumList.length; i++) {
        aNumList[i].className = "";
    }
    //判断count的值 当出现最后一张图片时，角标没有对应
    if (count == aSliderList.length - 1) {
        //最后一张图片出现，应该让第一个角标点亮
        aNumList[0].className = "hover";
    } else {
        aNumList[count].className = "hover";
    }
    //让ul的left值发生改变
    startMove(oSliderList, { "left": -perWidth * count })
}
let timer = setInterval(() => {
    move();
}, 3000);
//获取左右箭头 添加点击事件
let oBtn = document.getElementById("focus-btns");
let aBtns = oBtn.children;
//321321
aBtns[0].onclick = function() {
        count -= 2;
        //move 有一个加1的代码，为了保证count比当前小1
        move();
    }
    //123123 和自动轮播的顺序一致 考虑把之前代码复制过来哦
aBtns[1].onclick = function() {
        move();
    }
    //鼠标移到焦点（数字）出现对应的图片
    //获取焦点
let oNumList = document.getElementById("numList");
let aNumList = oNumList.children;
for (let i = 0; i < aNumList.length; i++) {
    aNumList[i].onmouseover = function() {
        //控制count的值
        count = i - 1; //减一的原因还是因为move里有count++
        move();

    }
}
//清定时器，在鼠标移入轮播区域的时候
oSliderBox.onmouseover = function() {
        clearInterval(timer);
    }
    //开定时器，在鼠标移出轮播区域的时候
oSliderBox.onmouseout = function() {
        timer = setInterval(function() {
            move();
        }, 3000)
    }
    //轮播区域结束

//取消字段选择功能
document.onselectstart = function() { return false; };


$(function() {
    //点击X关闭最上面那个
    $(".top-btn").click(function() {
        $(".top").remove();
    })
})