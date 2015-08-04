(function($){
	"use strict";
	var App = {
		$body: null,

		init:function(){
			this._construct();
			this.bindEvents();

		},

		// custom functions
		_construct:function(){
			this.$body = $("body");

		},

		// custom functions

		//events section
		bindEvents:function(){
			$(window).resize( this.resize );

		}, 
		resize:function(){

		}
	};

	$(function(){
		$(document).ready(function(){
			App.init(); 
		});
	});

})(window.jQuery);
