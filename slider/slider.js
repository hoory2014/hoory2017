// http://www.cnblogs.com/djane/articles/4511594.html
;(function($){
    
    var config;
    $.fn.slidePic = function(){
    	config = $.extend({
    		width:300,
    		height:200,
    		autoSlideTime:3000,
    		controllerLeft:true,
    		controllerBottom: true,
    		left:0
    	})

    	var max = $('.list > li').length;
    	var wid = $('.list').find('li')[0].offsetWidth;
        console.log(wid);
    	this.css({
    		width:config.width,
    		height:config.height
    	})

    	if(config.controllerBottom){
    		createControllerBottom.call(this,max)
    	}

    	var controllerBottomHandler = $('.spot span');
    	var slidePicHandler = this.find('.list');

    	var preIndex = 0;
    	var timer = setInterval(showAuto,2000);

    	controllerBottomHandler.hover(function(){
    		var index = $(this).index();
    		showNext(index);
    	})

    	this.hover(function(){
    		clearTimeout(timer);
    	},function(){
    		timer = setInterval(showAuto,2000)
    	})


    	function showAuto(){
    		if(preIndex>=max-1){
    			preIndex = 0;
    		}else{
    			preIndex++
    		}
    		showNext(preIndex);
    	}

    	function showNext(index){
    		controllerBottomHandler.removeClass('select').eq(index).addClass('select');
    		var left = -index*wid;
            console.log(left);
    		slidePicHandler.css('left',left+'px')
    	}
    }


    //调用方法
	var createControllerBottom = function(max){
		var controllerWidth = max * 30;
		var controllerBottomHtml = '';
		for(var i=0;i<max;i++){
			controllerBottomHtml += '<span></span>'
		}
		controllerBottomHtml = "<div class='spot'>"+controllerBottomHtml+"</div>";
		this.append(controllerBottomHtml);
		this.find('.spot').css({
			width:controllerWidth,
			marginLeft: -(controllerWidth / 2)

		}).find('span:first').addClass('select');
	}

})(jQuery)
