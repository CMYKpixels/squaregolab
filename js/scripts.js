/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    "use strict";
    $("[data-toggle=popover]").popover({
        animation: true,
        html: true,
        content: function () {
            return $('#popover-content').html();
        }
    });
});


$("#maker")
    .mouseover(function () {
        $("#banner")
            .addClass('maker')
            .removeClass('banner')
    })
    .mouseout(function () {
        $('#banner')
            .addClass('banner')
            .removeClass('maker')
    })



$("#pro")
    .mouseover(function () {
        $("#banner")
            .addClass('pro')
            .fadeIn('banner')
    })
    .mouseout(function () {
        $('#banner')
            .addClass('banner')
            .removeClass('pro')
    })






/*$(".maker").mouseover(function () {
    "use strict";
    var styles = {
        transition: 'opacity 1 ease-in-out',
        backgroundImage: 'url("img/maker_img.jpg")',
        cursor: "pointer"
    };
    $("#bkgdimg").fadeIn("slow", function () {
        $("#bkgdimg").css(styles)
            .mouseout(function () {
                var undo = {
                    backgroundImage: "",
                    cursor: ""
                };
                $("#bkgdimg").css(undo);
            });
    });
});
$(".pro").mouseover(function () {
    "use strict";
    var styles = {
        backgroundImage: 'url("img/plasma_ray.png")',
        cursor: "pointer"
    };
    $("#bkgdimg").fadeIn("fast", function () {
        $("#bkgdimg").css(styles)
            .mouseout(function () {
                var undo = {
                    backgroundImage: "",
                    cursor: ""
                };
                $("#bkgdimg").css(undo);
            });
    });
});*/