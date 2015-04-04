$(document).ready(function($){
    console.log('ok');
    var $cr = $('.column-right > div'),
        $cc = $('.column-center > div'),
        $cl = $('.column-left > div'),
        $html = $('html'),
        height = $(window).height();
    // enlarge the chinese column until bottom of screen
    $cc.hide();
    $cr.hide();
    if ((height < $html.height())) { 
        var i = 0;
        while ((height < $html.height()) && (i < 50)) {
            i++;
            console.log($html.height(), height);
            $html.css('font-size', (100 - (i * 5)) + '%');
        }  
    } else {  
    var i = 0;
        while (($html.height() < height) && (i < 50)) {
            i++;
            console.log($html.height(), height);
            $html.css('font-size', (100 + (i * 5)) + '%');
        }    
        $html.css('font-size', (97 + (i * 5)) + '%');
    }
    $cc.show();
    $cr.show();
    // reduce left column until less than chinese column
    var i = 50;
    while (($cl.height() < $cr.height()) && (0 < i)) {
        i--;
        console.log($cl.height(), $cr.height());
        $cr.css('font-size', (i*2) + '%');
    }    
    // reduce center column until less than chinese column
    var i = 100;
    while (($cl.height() < $cc.height()) && (0 < i)) {
        i--;
        console.log($cl.height(), $cc.height());
        $cc.css('font-size', (i*2) + '%');
    }
});