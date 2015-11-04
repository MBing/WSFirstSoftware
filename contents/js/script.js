(function () {
    "use strict";
    var partnerH2 = $(".partnershome h2");
    $(".partnershome h2:first-child").addClass('active');
    partnerH2.on('click', function (e) {
        $('.partnertitles h2').removeClass('active');
        $(this).addClass('active');
        $('.partnercontent div').hide();
        $('.' + this.id).show();
    });

})();