$(function () {
    ///////////////////////////
    $(".top_close_btn").on("click", function () {
        $(".TopBanner").addClass("on");
    });

    $(".Main_slide").slick({
        arrows: false,
    });

    $(window).on("scroll", function () {
        var sct = $(window).scrollTop();
        sct > 0 ? $('.Header').addClass('on')
        : $('.Header').removeClass('on')
    });

    ///////////////////////////
});
