jQuery(function($) {   

			  
			  
    $(window).on("scroll", function(scroll) {
    // Р•СЃР»Рё СЃРєСЂРѕР»РёРј Р±РѕР»СЊС€Рµ С‡РµРј 200px, РґРѕР±Р°РІР»СЏРµРј РєР»Р°СЃСЃСѓ head РєР»Р°СЃСЃ small
    if ($(window).scrollTop() > 200) $('.head').addClass('small');
    // РРЅР°С‡Рµ СѓРґР°Р»СЏРµРј РєР»Р°СЃСЃ fixed
    else $('.head').removeClass('small');
    });
    
    
    
});