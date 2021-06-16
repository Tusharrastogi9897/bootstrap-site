$(document).ready(function () {

    $('#theme1').click(function () {
            sessionStorage.setItem('theme', 'theme1');
            $('header').css('background-color', '#EB984E');
            $('footer').css('background-color', '#FDF2E9');
            $('nav').css('background-color', '#AF601A');
            $('.carousel').css('background-color', '#F0B27A');
            $('.modal-header').css('background-color', '#AF601A');
            $('.modal-body').css('background-color', 'navajowhite');
            location.reload(true);
    });

    $('#theme2').click(function () {
        sessionStorage.setItem('theme', 'theme2');
        $('header').css('background-color', '#45B39D');
        $('footer').css('background-color', '#D0ECE7');
        $('nav').css('background-color', '#117A65');
        $('.carousel').css('background-color', '#A2D9CE');
        $('.modal-header').css('background-color', '#117A65');
        $('.modal-body').css('background-color', '#E8F6F3');
        location.reload(true);
    });

    $('#theme3').click(function () {
        sessionStorage.setItem('theme', 'theme3');
        $('header').css('background-color', '#A569BD');
        $('footer').css('background-color', '#E8DAEF');
        $('nav').css('background-color', '#6C3483');
        $('.carousel').css('background-color', '#D2B4DE');
        $('.modal-header').css('background-color', '#6C3483');
        $('.modal-body').css('background-color', '#F4ECF7');
        location.reload(true);
    });

    $('#default').click(function () {
        sessionStorage.setItem('theme', '');
        location.reload(true);
    });

    switch (sessionStorage.getItem('theme')) {
        case 'theme1':
            $('header').css('background-color', '#EB984E');
            $('footer').css('background-color', '#FDF2E9');
            $('nav').css('background-color', '#AF601A');
            $('.carousel').css('background-color', '#F0B27A');
            $('.modal-header').css('background-color', '#AF601A');
            $('.header-color').css('background-color', '#AF601A');
            $('.modal-body').css('background-color', 'navajowhite');
            break;

        case 'theme2':
            $('header').css('background-color', '#45B39D');
            $('footer').css('background-color', '#D0ECE7');
            $('nav').css('background-color', '#117A65');
            $('.carousel').css('background-color', '#A2D9CE');
            $('.modal-header').css('background-color', '#117A65');
            $('.header-color').css('background-color', '#117A65');
            $('.modal-body').css('background-color', '#E8F6F3');
            break;

        case 'theme3':
            $('header').css('background-color', '#A569BD');
            $('footer').css('background-color', '#E8DAEF');
            $('nav').css('background-color', '#6C3483');
            $('.carousel').css('background-color', '#D2B4DE');
            $('.modal-header').css('background-color', '#6C3483');
            $('.header-color').css('background-color', '#6C3483');
            $('.modal-body').css('background-color', '#F4ECF7');
            break;

        default: console.log(sessionStorage.getItem('theme'));
    }

})