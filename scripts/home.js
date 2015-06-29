var home = {
    readyMessage: "home ready",  
    $body: null,  
    windowWidth: 0,
    windowheight: 0,

    _constructVars: function(){
        this.$body = $('body');  
        this.windowWidth = $(window).width();
        this.windowheight = $(window).height();
    },
    init:function(){ 
        console.log( this.readyMessage );   
        this._constructVars();
        this.events.init();
    },
    events:{
        init: function(){
            var _this = home;
            $(window).resize( _this.events.windowResize );
            $(window).on('scroll', _this.events.scrollMove );

            _this.events.setDefault();
        },
        setDefault:function(){
            var _this = home;
            _this.events.scrollMove();
            _this.setCssStyle(); 
        },
        windowResize:function(){ 
            var _this = home;
            _this.setCssStyle();  
        }, 
        scrollMove:function(){
            var _this = home;
        }
    },
    setCssStyle: function(){
        var _this = home;

    }
} 
$(window).load(function(){
    app.init();
    home.init();
});