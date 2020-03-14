$(function() {
    $("#btn").click(function() {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $("#tel").val(),
            password: $("#psw").val()
        }).then(data => {
            console.log(data);
            if (data.code == 1) {
                location.href = "index.html";
                var $newArr = data.data;
                var $str = $newArr.id;
                var $token = $newArr.token;
                setCookie("id", $str);
                setCookie("token", $token);




            } else {
                alert("手机号码或者密码错误，请重试")
            }


        })
    })
});