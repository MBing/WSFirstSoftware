(function () {
    "use strict";
    var partnerH2 = $(".partnershome h2");

    /* MENU */
    $(".main-header").on('click', '.submenu.menu-title', function (e) {
        console.log($(this));
        $(".submenu-panel").toggleClass('slide-open');
    });


    $(".partnershome h2:first-child").addClass("active");
    $(".referencelogos p")
        .prepend('<i class="icon icon-caret-left"></i>')
        .append('<i class="icon icon-caret-right"></i>');

    partnerH2.on("click", function (e) {
        $(".partnertitles h2").removeClass("active");
        $(this).addClass("active");
        $(".partnercontent div").hide();
        $("." + this.id).show();
    });
    $(".referencelogos i.icon-caret-left").on("click", function () {
        console.log("click before");
    });
    $(".referencelogos i.icon-caret-right").on("click", function () {
        console.log("click after");
    });


    /* SLIDER */
    $(".slider img:first-child").show();

})();