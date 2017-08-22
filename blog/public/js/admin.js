/**
 * Created by 银辉 on 2017/5/12.
 */
//退出
$(function () {
    $('#adminloginout').on('click', function() {
        // console.log("aaa");
        $.ajax({
            url: '/api/user/logout',
            success: function(result) {
                if (!result.code) {
                    window.location.href="/";
                }
            }
        });
    })
});
