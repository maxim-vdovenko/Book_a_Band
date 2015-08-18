$(document).ready(function(){ 
  	
    performer.establish();
    footer.events();
    page.lift();
    popUp.events();
     
});




var breadth = {
    box: 'body'
};
breadth.define = function(){
    return $(breadth.box).width();
};





var popUp = {
    addId: 'active',
    butt: '.log__User',
    form: '.popUp__bl',
    fon: '.popUp__fon',
    container: '.hat',
    tim: 500,
    xPage: 880 
    
};
popUp.events = function(){
    
    $(popUp.butt).live({  
		click: function(){
            
            popUp.formOpen($(this));
		 
		}
	});
    
};
popUp.formOpen = function(th){
  
    if(th.hasClass(popUp.addId)){
        
        th.removeClass(popUp.addId);
        
        $(popUp.fon).fadeOut(popUp.tim, function(){
            popUp.addClass(th, false);
        });
        
        // Switching the type of animation
        if(breadth.define() > popUp.xPage){
            th.parents(popUp.container).find(popUp.form).fadeOut(popUp.tim);
        }else{
            th.parents(popUp.container).find(popUp.form).slideUp(popUp.tim); 
        }
    
    }else{
        
        th.addClass(popUp.addId);
        
        $(popUp.fon).fadeIn(popUp.tim, function(){
            popUp.addClass(th, true);
        });

        // Switching the type of animation
        if(breadth.define() > popUp.xPage){
            th.parents(popUp.container).find(popUp.form).fadeIn(popUp.tim);
        }else{
            th.parents(popUp.container).find(popUp.form).slideDown(popUp.tim);
        }
 
    }
};
popUp.addClass = function(th, param){
    
    if(param){
        th.parents(popUp.container).find(popUp.form).addClass(popUp.addId);
    }else{
        th.parents(popUp.container).find(popUp.form).removeClass(popUp.addId);
    }
};




var performer = {
    cont: '.performer',
    container: '.progress',
    slider: '.slid',
    fill: '.filling p'
};

performer.establish = function(){
    
    for(var i=0; i<$(performer.container).length; i++){
        
        var nam = $(performer.container).eq(i).attr('title');
        $(performer.container).eq(i).parents(performer.cont).find(performer.fill).text(nam + '%');
        $(performer.container).eq(i).find(performer.slider).css('width', nam + '%');  
    }
};




var page = {
	butt: 'up',
	tim: 600
};
page.lift = function(){
	$('.'+page.butt).live('click',function(){
		$('body,html').animate({scrollTop: 0}, page.tim);
	});
};


				   
var footer = {
	hFooter: '.hFooter',
	foot: '.footer'
};
footer.events = function(){
    footer.start();
    $(window).resize(function(){
		footer.start();
    });
}
footer.start = function(){
	var h =  $(this.foot).height();
	$(this.hFooter).css('height', h);
	$(this.foot).css('marginTop', -h);
};









