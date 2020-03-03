$(function () {
    'use strict';
    //ヘッダー用背景
    $(function () {
        var mouseOverX = 0,
            mouseOverY = 0,
            mouseOutX = 0,
            mouseOutY = 0,
            X = 0,
            Y = 0,
            color = 0;
        for (var i = 1; i < 301; i++) {
            // HSLカラーを算出
            var hue = 360 * Math.random();
            $('#circle-' + i).css('background', 'radial-gradient(circle, hsl(' + hue + ', 100%, 50%) 1.5vh, white 1.5vh, white 1.5vh)');
        }
        $(".top-circle").hover(
            function (origin) {
                mouseOverX = origin.pageX;
                mouseOverY = origin.pageY;
            },
            function (terminal) {
                mouseOutX = terminal.pageX;
                mouseOutY = terminal.pageY;
                X = mouseOutX - mouseOverX;
                Y = mouseOutY - mouseOverY;
                color = 'hsl(' + (Math.sin(Math.asin(Y / ((X ** 2 + Math.abs(2 * X * Y) + Y ** 2) ** 0.5))) * 360) + ', 100%, 50%)';
                $(this).css('background', 'radial-gradient(circle, ' + color + ' 1.5vh, white 1.5vh, white 1.5vh)');
            }
        );
    });

        $('.gnav-toggle').on('click', function () {
            $('.gnav-toggle, .gnav-list').toggleClass('show');
        });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#header').height()) {
            $('.gnav').attr('id', 'fixed-gnav');
        } else {
            $('.gnav').removeAttr('id');
        }
    });

    //ペンギンの目の追尾機能のための単位ベクトル計算
    $(document).on('mousemove', function (e) {
        var
            //左目のdivの座標
            leftPupilX = $('.penguin-left-pupil').offset().left,
            leftPupilY = $('.penguin-left-pupil').offset().top,
            //マウスポインタと左目との差
            leftPupilDirX = e.pageX - leftPupilX,
            leftPupilDirY = e.pageY - leftPupilY,
            //左目との差の単位ベクトル
            leftDirUnitX = leftPupilDirX / ((leftPupilDirX ** 2 + Math.abs(2 * leftPupilDirX * leftPupilDirY) + leftPupilDirY ** 2) ** 0.5) * 5,
            leftDirUnitY = leftPupilDirY / ((leftPupilDirX ** 2 + Math.abs(2 * leftPupilDirX * leftPupilDirY) + leftPupilDirY ** 2) ** 0.5) * 5,

            //右目のdivの座標
            rightPupilX = $('.penguin-right-pupil').offset().left,
            rightPupilY = $('.penguin-right-pupil').offset().top,
            //マウスポインタと右目との差
            rightPupilDirX = e.pageX - rightPupilX,
            rightPupilDirY = e.pageY - rightPupilY,
            //右目との差の単位ベクトル
            rightDirUnitX = rightPupilDirX / ((rightPupilDirX ** 2 + Math.abs(2 * rightPupilDirX * rightPupilDirY) + rightPupilDirY ** 2) ** 0.5) * 5,
            rightDirUnitY = rightPupilDirY / ((rightPupilDirX ** 2 + Math.abs(2 * rightPupilDirX * rightPupilDirY) + rightPupilDirY ** 2) ** 0.5) * 5;

        $('.penguin-left-pupil').css({
            transform: 'translate(' + leftDirUnitX + 'px, ' + leftDirUnitY + 'px)'
        });
        $('.penguin-right-pupil').css({
            transform: 'translate(' + rightDirUnitX + 'px, ' + rightDirUnitY + 'px)'
        });
    });

    $(function () {
        $('#item-list').slick({
            infinite: true,
            dots: true,
            centerMode: true,
            centerPadding: '10%',
            autoplay: false,
            adaptiveHeight: true,
            variableWidth: true,
        });
    });
});
