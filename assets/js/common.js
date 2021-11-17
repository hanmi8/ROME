$(function(){
    $('#gnb').load('gnb.html');



    $('a').click(function(e){
        var stringVal = $(e.target).attr('href')
        if(stringVal.indexOf('#')  !== -1){
            e.preventDefault()
        }
    })

    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown-menu').slideDown(200)
    })
    $('.dropdown-call').click(function(){
        $(this).next('.dropdown-menu').slideDown(200)
    })

    $('.dropdown-menu li a').click(function(){
        // $(this).parents('.dropdown-menu').slideUp(200)
        //$(this).parents('.dropdown').addClass('on')
        //$(this).parents('.dropdown').children('.dropdown-toggle').text($(this).text())
    })

    $('.toggle-box-wrap').children('.box-call').click(function(){
        var toggleID = $(this).attr('href')
        $(toggleID).show()
    })
    $(document).click(function(e){
        //dropdown
        if(!$(e.target).parents().hasClass('dropdown') ){
            $('.dropdown-menu').slideUp(200)
        }

        if(!$(e.target).parents().hasClass('toggle-box-wrap')){
            $('.toggle-box').hide()
        }
    })

    // checkbox
    $('.radio-wrap').children('label').click(function(){
        if($(this).children('span').hasClass('icon-checkbox')){
            $(this).children('.icon-checkbox').toggleClass('on')
        }else if($(this).children('span').hasClass('icon-radio')){
            var radioID = $(this).children('span').attr('name')
            $(radioID).removeClass('on')
            $(this).children('.icon-checkbox').addClass('on')
        }
    })

    // tab
    $('.tabs').find('a').click(function(e){
        e.preventDefault()
        $(this).parent('li').siblings('li').removeClass('on')
        $(this).parent('li').addClass('on')

        var tabID = $(this).attr('href')
        if($(this).parents('.tabs').hasClass('second')){
            $('.tabs-second-contents').hide();
        }else{
            $('.tab-contents').hide()
        }
        $(tabID).show();
    })

    /* button */
    $('.btn-toggle').click(function(){
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    })

    function pointerPosition(e) {
        var x = e.clientX;
        var y = e.clientY;
    }

    $('.layer-call').click(function(e){
        var layerID = $(this).attr('href')
        $(layerID).css({
            'display': 'block',
            'left' : e.clientX,
            'top' : e.clientY,
        });
    })
    $('.layer-close').click(function(){
        $(this).parents('.popup-layer').hide()
    })


    // input value default
    $('.input-times-wrap').find('.times').click(function(){
        $(this).prev('input').val('')
    })

    // dropdown tree
    $('.dropdown.tree').find('div').click(function(){
        if($(this).parent('li').has('ul')){
            $(this).find('.icon-collapse').toggleClass('on')
            $(this).next('ul').slideToggle(200)
        }
    })

    $('span.icon-checkbox').click(function(){
        $(this).toggleClass('on')
    })

})
