(function () {
    "use strict";
    var partnerH2 = $(".partnershome h2");
    /********/
    /* MENU */
    /********/
    $('.page').hide();
    var initialPage = document.location.hash || '#home';
    $(initialPage).show();

    /* Main Menu Links*/
    $(".menu-title > a").on('click', function () {
        console.log(!$(this).parent().hasClass('submenu'));
        if (!$(this).parent().hasClass('submenu')) {
            $('.page').hide();
            $($(this).attr('href')).show();
        }
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


    /* CONTACT PAGE */
    var toInputField = function (key) {
        return '<input name="' + key + '">';
    };
    var toTextArea = function (key) {
        return '<textarea name="' + key + '"></textarea>';
    };
    var toButton = function (key) {
        return '<input type="button" value="' + key + '">';
    };
    var toSelect = function (key, list) {
        console.log();
        var sel = ["<select name='"+ $(list).text() +"'>"];
        list.each(function (index, item) {
            var itemTitle = $(item).text();
            //var optie = '<option value="' + itemTitle + '">' + itemTitle + '</option>';
            var optie = "<option value='" + itemTitle + "'>";
            sel.push(optie);
            console.log("optie:", optie);
        })
        sel.push('</ul>');
        list.replaceWith(sel.join(""));
        //return '<input type="button" value="' + key + '">';
    };

    $('#contact h3').each(function (key, val) {
        var getFirstItem = $(this).siblings('p').first();
        var output, objTitle = $(this).text();
        switch(getFirstItem.text()) {
            case 'input':
                output = toInputField(objTitle);
                break;
            case 'textarea':
                output = toTextArea(objTitle);
                break;
            case 'button':
                output = toButton(objTitle);
                break;
            default:
                // create select
                var newSelect = $(this).siblings('ul').first();
                if (newSelect) toSelect(objTitle, newSelect)
                output = "";
                break;
        }
        getFirstItem.replaceWith(output);
        //if (getFirstItem.text() === 'input') {
        //    getFirstItem.replaceWith(toInputField($(this).text()));
        //} else if (getFirstItem.text() === 'textarea') {
        //    getFirstItem.replaceWith(toTextArea($(this).text()));
        //} else if (getFirstItem.text() === 'button') {
        //    getFirstItem.replaceWith(toButton($(this).text()));
        //}
    });
})();
