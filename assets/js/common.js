$(function(){
    $('#gnb').load('gnb.html');



    $('a').click(function(e){
        var stringVal = $(e.target).attr('href')
        if(stringVal.indexOf('#')  !== -1){
            e.preventDefault()
        }
    })

    $('.location-dropdown').find('strong').click(function(){
        $('.location-dropdown-menu').slideUp(200);
        $(this).next('.location-dropdown-menu').slideDown(200);
    })

    $('.dropdown-toggle').click(function(){
        $(this).parent('.dropdown').toggleClass('on')
        $(this).next('.dropdown-menu').slideDown(200)
    })
    $('.dropdown-call').click(function(){
        $(this).next('.dropdown-menu').slideDown(200)
    })

    $('.toggle-box-wrap').children('.box-call').click(function(){
        var toggleID = $(this).attr('href')
        $(toggleID).show()
    })
    $(document).click(function(e){
        // dropdown
        if(!$(e.target).parents().hasClass('dropdown') ){
            $('.dropdown').removeClass('on')
            $('.dropdown-menu').slideUp(200)
        }
        // location-dropdown
        if(!$(e.target).parents().hasClass('location-dropdown') ){
            $('.location-dropdown-menu').slideUp(200)
        }

        if(!$(e.target).parents().hasClass('toggle-box-wrap')){
            $('.toggle-box').hide()
        }
    })



    // checkbox & radio
    $('.radio-wrap').children('label').click(function(){
        if($(this).children('span').hasClass('icon-checkbox')){
            $(this).children('.icon-checkbox').toggleClass('on')
        }else if($(this).children('span').hasClass('icon-radio')){
            var myGroup = $(this).children('span').attr('data-name')
            $('.icon-radio[data-name="'+myGroup+'"').removeClass('on')
            $(this).children('.icon-radio').addClass('on')
        }
    })
    $('.radio-wrap').find('.icon-checkbox').click(function(){
        $(this).toggleClass('on')
    })
    $('span.icon-radio').click(function(){
        var myGroup = $(this).attr('data-name')
        $('.icon-radio[data-name="'+myGroup+'"').removeClass('on')
        $(this).addClass('on')
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
    $('.icon-checkbox').click(function(e){
        e.stopPropagation()
        if($(this).parents().hasClass('tree')){
            $(this).toggleClass('on')
        }
    })
    $('.dropdown-menu').find('a').click(function(){
        if($(this).find('span').hasClass('icon-checkbox')){
            $(this).find('span').toggleClass('on')
        }
    })


    // RANGE SLIDER
    generate_slider('prody_index', {range: true,min: 0.1,max: 0.5,step: 0.1,values: [ 0.1, 0.5 ]})
    generate_slider('import_dependence', {range: true,min: 1,max: 100,step: 1,values: [ 1, 100 ]})
    generate_slider('income_average', {range: true,min: 1,max: 1000,step: 10,values: [ 1, 1000 ]})

    function generate_slider(id, options) {
        options.slide = function( event, ui) {
            $('#' + id +'_min').val(ui.values[ 0 ])
            $('#' + id +'_max').val(ui.values[ 1 ])
        }
        // Range Slider
        $( '#'+id+"_range" ).slider(options);
        $('#'+id+'_min').val($('#'+id+'_range').slider('values' , 0));
        $('#'+id+'_max').val($('#'+id+'_range').slider('values' , 1));
        // input min
        $('#'+id+'_min').change(function () {
            var value = this.value
            var maxValue = $('#'+id+'_range').slider('values' , 1);
            if(value > maxValue){
                value = maxValue;
                $(this).val(maxValue);
            }
            $('#'+id+'_range').slider("values",0, value);
        });
        // input max
        $('#'+id+'_max').change(function () {
            var value = this.value
            var minValue = $(this).siblings('#'+id+'_range').slider('values' , 0);
            if(value < minValue ){
                value = minValue;
                $('#'+id+'_max').val(minValue);
            }
            $('#'+id+'_range').slider("values",1, value);
        });

    }

    // modal
    var zIndex;
    $('.modal-call').click(function(){
        zIndex = 100;
        var modalID = $(this).attr('data-target')
        $(modalID).show().css('z-index', zIndex++);
        if($('body').height() > $(window).height()){
            $('body').css({'overflow-y':'hidden', 'padding-right' : '17px'})
        }
    })
    $('.modal-close').click(function(){
        $(this).parents('.modal').hide();
        if($('.modal:visible').length < 1){
            $('body').css({'overflow-y':'', 'padding-right' : ''})
        }
    })





})
