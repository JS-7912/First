$(function() {

    $("#telephone").change(function() {
        if ($("#telephone").val() == "") {
            {
                $(".con-col2>span").html("");
            }
        }
    })

    $('#col3-btn').click(function() {
        $.get("http://jx.xuzhixiang.top/ap/api/checkname.php", {
            username: $("#telephone").val()
        }, data => {
            if (data.code == 0) {
                $(".con-col2>span").html("用户名已存在，不可注册");
            }
            if (data.code == 1) {
                $(".con-col2>span").html("用户名未存在，可注册");

                //下一步
                $("#btn").click(function() {
                    $(".con-col3").css({ "display": "none" });
                    $(".con-col23").css({ "display": "block" });
                    $(".pro-step1 span").removeClass("now-span");
                    $(".pro-step1 span").addClass("past-span");
                    $(".pro-step2 span").removeClass("past-span");
                    $(".pro-step2 span").addClass("now-span");
                    $(".pro-step1 p").css("color", "#999");
                    $(".pro-step2 p").css("color", "#33bb44");
                })

                $("#password").change(function() {
                    if ($("#password").val().length >= 6) {
                        $(".con-col23>span").html("密码可使用")
                        $("#btn").click(function() {
                            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                                username: $("#telephone").val(),
                                password: $("#password").val()
                            }).then(data => {
                                //注册成功直接跳转到登录界面
                                if (data.code == 1) {
                                    location.href = "login.html"
                                }
                            })
                        })
                    } else {
                        $(".con-col23>span").html("密码太短，请重新设置")
                    }
                })
            }

        })
    })
});