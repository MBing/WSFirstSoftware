(function () {
    "use strict";
    var partnerH2 = $(".partnershome h2");
    /********/
    /* MENU */
    /********/

    /* Main Menu Links*/
    $('.menu-title > a').on('click', function () {
        $('.page')
            .removeClass('show')
            .hide();
        $($(this).attr('href')).show();
        $($(this).attr('href')).addClass('show');
    });
    /* Submenu Links */
    $('.submenu-item > a').on('click', function () {
        console.log($(this).attr('href'));
    });
    /* SubMenu Toggle*/
    $(".main-header").on('click', '.submenu', function (e) {
        var menuClicked = $(this).text().toLowerCase().trim().replace(" ", "-");
        if ($(this).hasClass('active')) {
            $(".submenu-panel").removeClass('slide-open');
            $(this).removeClass('active');
            setTimeout(function () {
                $(".submenu-list.flex").removeClass('flex');
            }, 200);
        } else {
            var timer = ($(".submenu-panel").hasClass('slide-open'))? 50: 425;
            $(".submenu-panel").addClass('slide-open');
            $('.main-header .active').removeClass('active');
            $(this).addClass('active');
            console.log(timer);
            setTimeout(function () {
                $(".submenu-list.flex").removeClass('flex');
                $("#" + menuClicked).addClass('flex');
            }, timer);
        }
    });
    /* Language DropDown*/
    $(".lang-selection span").on('click', function () {
        $(".lang-list").toggleClass('flex');
    });

    /* PARTNER TABS*/
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
