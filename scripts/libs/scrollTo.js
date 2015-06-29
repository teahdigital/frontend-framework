var $scrollTo = {
    readyMessage: "scrollTo ready",  
    
    init:function(){
        console.log( this.readyMessage );   

        $(document).on('click', '[data-scrollto]', $scrollTo.click );
    },
    click:function(){
        var data = $(this).data('scrollto');
        console.log(data);
        if(data != false){
            $('html,body').animate({
                scrollTop: $(data).offset().top
            }, 'slow'); 
        } 
         
        return false; 
    }
}
 