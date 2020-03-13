$(function() {
    $("#btn").click(function() {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $("#tel").val(),
            password: $("#psw").val()
        }).then(data => {
            console.log(data);
            if (data.code == 1) {
                location.href = "index.html";

            } else {
                alert("手机号码或者密码错误，请重试")
            }


        })
    })
});