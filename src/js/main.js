(function($){
	"use strict";
	var App = {
		$body: null,
		$main: null,
		wh: null,
		ww: null,

		init:function(){
			this._construct();
			this.bindEvents();

			console.log("ready");
		},

		// custom functions
		_construct:function(){
			this.$body = $("body");
			this.$main = $("#main");
			this.wh = $(window).height();
			this.ww = $(window).width();

			this.resize();
		},

		// custom functions
		styles:function(){

		},

		//events section
		bindEvents:function(){
			$(window).resize( this.resize );

		}, 

		resize:function(){
			var self = App;

			self.wh = $(window).height();
			self.ww = $(window).width();
			
			self.styles();
		}
	};

	$(function(){
		$(document).ready(function(){
			App.init(); 
		});
	});

})(window.jQuery);
