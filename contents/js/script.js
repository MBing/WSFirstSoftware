(function () {
    "use strict";
    var partnerH2 = $(".partnershome h2");

    /* MENU */
    $(".main-header").on('click', '.menu-title', function (e) {
        var menuClicked = $(this).text().toLowerCase().trim().replace(" ", "-");
        $(".submenu-list.flex").removeClass('flex');
        if($(this).hasClass("submenu")) {
            $(".submenu-panel").addClass('slide-open');
        } else {
            $(".submenu-panel").removeClass('slide-open');
        }
        $("#" + menuClicked).addClass('flex');
    });

    $(".lang-selection span").on('click', function () {
        $(".lang-list").toggleClass('flex');

    })

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

    //$(".referencelogos i.icon-caret-left").on("click", function () {
    //    console.log("click before");
    //});
    //$(".referencelogos i.icon-caret-right").on("click", function () {
    //    console.log("click after");
    //});


    /* SLIDER */
    $(".slider img:first-child").show();

})();