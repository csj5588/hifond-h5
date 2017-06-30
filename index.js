window.onload = function(){
	// 获取dom(优化)
    var container = document.querySelectorAll('.swiper-slide');
    var floatContent = document.querySelectorAll('.floatContent');
	// 获取dom
	function $(ele) {
    	return document.querySelector(ele);
    }
    // 初始化滑动参数
    var p1All = document.querySelectorAll('.p1 *[cui]'); // 动画急刹车
    var p2All = document.querySelectorAll('.p2 *[cui]'); // 动画急刹车
    var p3All = document.querySelectorAll('.p3 *[cui]'); // 动画急刹车
    var p4All = document.querySelectorAll('.p4 *[cui]'); // 动画急刹车
    var p5All = document.querySelectorAll('.p5 *[cui]'); // 动画急刹车
    var p6All = document.querySelectorAll('.p6 *[cui]'); // 动画急刹车

    var swiper = new Swiper('.swiper-container', {
        pagination: 'null',
        paginationClickable: true,
        direction: 'horizontal',
        initialSlide: 9,
        effect : 'fade',
        freeMode : false,
        onSlideChangeEnd: function(swiper){
	      if(swiper.activeIndex == floatContent.length - 2) {
	      	for (var i = 0; i< p2All.length; i++) {
		    	p2All[i].style.animationPlayState = 'running';
		    }
	      	setTimeout(function() {
	      		$('.p2-img1').style.animation = 'floating 12s infinite linear both';
	      		$('.p2-img2').style.animation = 'floating 12s 0.3s infinite linear both';
	      		$('.p2-img3').style.animation = 'floating 12s 0.2s infinite linear both';
	      		$('.p2-img4').style.animation = 'floating 12s 0.5s infinite linear both';
	      	},1900);
	      }
	      if (swiper.activeIndex == floatContent.length - 3) {
	      	for (var i = 0; i< p3All.length; i++) {
		    	p3All[i].style.animationPlayState = 'running';
		    }
	      }
	      if (swiper.activeIndex == floatContent.length - 4) {
	      	for (var i = 0; i< p4All.length; i++) {
		    	p4All[i].style.animationPlayState = 'running';
		    }
	      }
	      if (swiper.activeIndex == floatContent.length - 5) {
	      	for (var i = 0; i< p5All.length; i++) {
		    	p5All[i].style.animationPlayState = 'running';
		    }
	      }
	      if (swiper.activeIndex == floatContent.length - 6) {
	      	for (var i = 0; i< p6All.length; i++) {
		    	p6All[i].style.animationPlayState = 'running';
		    }
	      }
	    }
    });
    var swiper2 = new Swiper('.p4-container', {
        pagination: 'null',
        paginationClickable: true,
        direction: 'vertical',
        initialSlide: 0,
        effect : 'fade',
        freeMode : false,
        prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
    });
    // 初始化函数
    (function(){
    	setDevelop();
    })();
    // 定位宽高
    
	function setDevelop() {
		for (var i = 0 ; i < floatContent.length ; i++) {
	        if (Pattern == 'show') {
	        	floatContent[i].style.height = window.screen.width + 'px';   // 第三步
	        	floatContent[i].style.width = window.screen.height + 'px';
	        	floatContent[i].style.top = '18.2%';
		    	floatContent[i].style.left = '-39%';
		    	floatContent[i].style.transform = 'rotate(90deg)';
	        } else if (Pattern == 'dev') {
	        	floatContent[i].style.width = window.screen.width + 'px';
	        	floatContent[i].style.height = window.screen.height + 'px';	
	        	floatContent[i].style.top = '0';
		    	floatContent[i].style.left = '0';
		    	floatContent[i].style.transform = 'none';
	        }
	    }
	}
    // 取消loading动画  同时安装第一图动画队列
	var cancelTimer = setTimeout(function() {
		clearTimeout(cancelTimer); // 清除定时器
		document.getElementById('loadingBox').style.animation = 'loadOutUp 1s .2s ease both';
		var timer = setTimeout(function() { // 过了 loading动画之后开始安装
			document.getElementById('loadingBox').style.display = 'none';
			for (var i = 0; i< p1All.length; i++) {
		    	p1All[i].style.animationPlayState = 'running';
		    }
		},800);
	}, 3000);
}