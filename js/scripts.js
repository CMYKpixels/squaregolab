/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    "use strict";

    //    $(".maker").mouseover(function () {
    //        $("bkgdimg").fadeToggle("fast", function () {
    //            var styles = {
    //                backgroundImage: 'url("img/maker_img.jpg")',
    //                cursor: "pointer"
    //            };
    //            $("this").css(styles)
    //                .mouseout(function () {
    //                    var undo = {
    //                        backgroundImage: "",
    //                        cursor: ""
    //                    };
    //                    $("bkgdimg").css(undo);
    //                });
    //        });
    //    });
    //
    //    $(".pro").mouseover(function () {
    //        $("bkgdimg").fadeToggle("fast", function () {
    //            var styles = {
    //                backgroundImage: 'url("img/plasma_ray.png")',
    //                cursor: "pointer"
    //            };
    //            $("this").css(styles)
    //                .mouseout(function () {
    //                    var undo = {
    //                        backgroundImage: "",
    //                        cursor: ""
    //                    };
    //                    $("bkgdimg").css(undo);
    //                });
    //        });
    //    });

    $(".maker")
        .mouseover(function () {
            var styles = {
                backgroundImage: 'url("img/maker_img.jpg")',
                transition: '',
                cursor: 'pointer'
            };
            $("#bkgdimg").css(styles)
                .mouseout(function () {
                    var undo = {
                        backgroundImage: '',
                        cursor: ''
                    };
                    $("#bkgdimg").css(undo);
                });
        });
    $(".pro")
        .mouseover(function () {
            var styles = {
                backgroundImage: 'url("img/plasma_ray.png")',
                cursor: 'pointer'
            };
            $("#bkgdimg").css(styles)
                .mouseout(function () {
                    var undo = {
                        backgroundImage: '',
                        cursor: ''
                    };
                    $("#bkgdimg").css(undo);
                });
        });

    $("[data-toggle=popover]").popover({
        animation: true,
        html: true,
        content: function () {
            return $('#popover-content').html();
        }
    });
});


//    $("#maker").hover(function () {
//
//        $("#bkgdimg").css("background-image", 'url("/img/maker_img.jpg")');
//
//    })
//
//    $("#pro").hover(function () {
//
//        $("#bkgdimg").css("background-image", 'url("/img/plasma_sparks.png")');
//
//    })









/*
  $('[data-container="body"]').popover({
  animation: true,
  html: true,
  content: function () {
      return $("#popoverMap").html('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11730.786865217451!2d2.8502832!3d42.6889663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb06d2710a8a6df98!2sSquaregoLab+-+FabLab+Perpignan!5e0!3m2!1sfr!2sfr!4v1464941164251"></iframe>')
  }
  })
  })
*/



/*Google Static Maps API*/
/*"AIzaSyAG_W3ziz4S8aj_qCSLURPES3wzRQVkzGQ"*/

/*var getMap = function (opts) {
                var myLatLng = {
                    lat: 42.689001,
                    lng: 2.850700
                };

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 14,
                    center: myLatLng
                });

                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Squaregolab !'
                });
            }*/