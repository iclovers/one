$(function(){
    $(".lj_fixbar").on("click",function(){
        $(".lj_fixtan").show();
    })
    $(".lj_close").on("click",function(){
        $(".lj_fixtan").hide();
    })

    //顶部
    $(".lj_xia").on("click",function(){
        $(".lj_yheader").toggle("active");
    })
})