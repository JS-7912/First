 //增和改 name是cookie名，val是cookie值，n表示n天后过期
 function setCookie(name,val,n){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+n);
    document.cookie = name + "=" + val + ";expires="+oDate;
}
//查
function getCookie(name){
   var cookies = document.cookie;//cookie存取是字符串
   var arrCookies = cookies.split("; ");
   for(var i = 0; i < arrCookies.length; i++){
       var arr = arrCookies[i].split("=");
       if(arr[0]===name){
           return arr[1];
       }
   }
}

//删
function removeCookie(name){
    setCookie(name,1,-1);
}