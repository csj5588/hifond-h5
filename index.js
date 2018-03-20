window.onload = function(){
	// 获取dom(优化)
    var container = document.querySelectorAll('.swiper-slide');
    var floatContent = document.querySelectorAll('.floatContent');
	// 获取dom
	function $(ele) {
    	return document.querySelector(ele);
    }
	// 初始化p8蒙板参数
	var mask = false;
    // 初始化滑动参数
    var p1All = document.querySelectorAll('.p1 *[cui]'); // 动画急刹车
    var p2All = document.querySelectorAll('.p2 *[cui]'); // 动画急刹车
    var p3All = document.querySelectorAll('.p3 *[cui]'); // 动画急刹车
    var p4All = document.querySelectorAll('.p4 *[cui]'); // 动画急刹车
    var p5All = document.querySelectorAll('.p5 *[cui]'); // 动画急刹车
    var p6All = document.querySelectorAll('.p6 *[cui]'); // 动画急刹车
    var p7All = document.querySelectorAll('.p7 *[cui]'); // 动画急刹车
    var p8All = document.querySelectorAll('.p8 *[cui]'); // 动画急刹车
    var p9All = document.querySelectorAll('.p9 *[cui]'); // 动画急刹车
    var p10All = document.querySelectorAll('.p10 *[cui]'); // 动画急刹车

    var swiper = new Swiper('.swiper-container', {
        pagination: 'null',
        paginationClickable: true,
        direction: 'horizontal',
        initialSlide: 9,
        effect : 'slide',
        freeMode : false,
        onSlideChangeEnd: function(swiper) {
        	var s = swiper.activeIndex;
        	var f = floatContent.length;
	      if(s == f - 2) {
	      	for (var i = 0; i< p2All.length; i++) {
		    	p2All[i].className = p2All[i].className + ' ' + p2All[i].className + '-move';
		    }
	      	setTimeout(function() {
	      		$('.p2-img1').style.webkitAnimation = 'floating 12s infinite linear both';
	      		$('.p2-img2').style.webkitAnimation = 'floating 12s 0.3s infinite linear both';
	      		$('.p2-img3').style.webkitAnimation = 'floating 12s 0.2s infinite linear both';
	      		$('.p2-img4').style.webkitAnimation = 'floating 12s 0.5s infinite linear both';
	      	},2100);
	      }
	      if (s === f - 3) {
	      	for (var i = 0; i< p4All.length; i++) {
		    	p4All[i].className = p4All[i].className + ' ' + p4All[i].className + '-move';
		    }
	      }
	      if (s === f - 4) {
	      	for (var i = 0; i< p7All.length; i++) {
		    	p7All[i].className = p7All[i].className + ' ' + p7All[i].className + '-move';
		    }
	      }
	      if (s === f - 5) {
	      	for (var i = 0; i< p3All.length; i++) {
		    	p3All[i].className = p3All[i].className + ' ' + p3All[i].className + '-move';
		    }
	      }
	      if (s === f - 6) {
	      	for (var i = 0; i< p5All.length; i++) {
		    	p5All[i].className = p5All[i].className + ' ' + p5All[i].className + '-move';
		    }
	      }
	      if (s === f - 7) {
	      	for (var i = 0; i< p6All.length; i++) {
		    	p6All[i].className = p6All[i].className + ' ' + p6All[i].className + '-move';
		    }
	      }
	      if (s === f - 8) {
	      	for (var i = 0; i< p8All.length; i++) {
		    	p8All[i].className = p8All[i].className + ' ' + p8All[i].className + '-move';
		    	setTimeout(function() {
		    		$('.p8-masking').style.opacity = 1;
		    		mask = true;
		    	}, 5700);
		    }
	      }
	      if (s === f - 9) {
	      	for (var i = 0; i< p9All.length; i++) {
		    	p9All[i].className = p9All[i].className + ' ' + p9All[i].className + '-move';
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
        loop : true,
        autoplay : 2000,
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
	        	floatContent[i].style.width = window.screen.height + 2 + 'px';
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
	// 卡片互动环节
	$('.sfz').onclick = function() {
		$('.p8').style.animation = 'fadeOutDown 0.5s 0s ease both';
		$('.sfzPage').style.animation = 'fadeInDown 0.5s 0.25s ease both';
		$('.sfzPage').style.zIndex = '9';
	}
	$('.sfzPage').onclick = function() {
		$('.sfzPage').style.animation = 'fadeOutUp 0.5s 0s ease both';
		$('.sfzPage').style.zIndex = '7';
		$('.p8').style.animation = 'fadeInTop 0.5s 0.5s ease both';
	}
	$('.sbk').onclick = function() {
		$('.p8').style.animation = 'fadeOutUp 0.5s 0s ease both';
		$('.sbkPage').style.animation = 'fadeInTop 0.5s 0.5s ease both';
		$('.sbkPage').style.zIndex = '9';
	}
	$('.sbkPage').onclick = function() {
		$('.sbkPage').style.animation = 'fadeOutDown 0.5s 0s ease both';
		$('.sbkPage').style.zIndex = '7';
		$('.p8').style.animation = 'fadeInDown 0.5s 0.5s ease both';
	}
	$('.jzk').onclick = function() {
		$('.p8').style.animation = 'fadeOutUp 0.5s 0s ease both';
		$('.jzkPage').style.animation = 'fadeInTop 0.5s 0.5s ease both';
		$('.jzkPage').style.zIndex = '9';
	}
	$('.jzkPage').onclick = function() {
		$('.jzkPage').style.animation = 'fadeOutDown 0.5s 0s ease both';
		$('.jzkPage').style.zIndex = '7';
		$('.p8').style.animation = 'fadeInDown 0.5s 0.5s ease both';
	}
	$('.p8-l-r .bottom').onclick = function() {
		$('.p8').style.animation = 'fadeOutDown 0.5s 0s ease both';
		$('.ewmPage').style.animation = 'fadeInDown 0.5s 0.5s ease both';
		$('.ewmPage').style.zIndex = '9';
	}
	$('.ewmPage').onclick = function() {
		$('.ewmPage').style.animation = 'fadeOutUp 0.5s 0s ease both';
		$('.ewmPage').style.zIndex = '7';
		$('.p8').style.animation = 'fadeInTop 0.5s 0.5s ease both';
	}
	$('.p8-masking').onclick = function() {
		if (mask) {
			$('.p8-masking').style.display = 'none';
		}
	}
	var inLine = document.getElementById('in');
	inLine.style.width = '100%';
    // 取消loading动画  同时安装第一图动画队列
	var cancelTimer = setTimeout(function() {
		clearTimeout(cancelTimer); // 清除定时器
		document.getElementById('loadingBox').style.webkitAnimation = 'loadOutUp 1s .2s ease both';
		var timer = setTimeout(function() { // 过了 loading动画之后开始安装
			$('.swiper-container').style.opacity = '1';
			document.getElementById('loadingBox').style.display = 'none'
			for (var i = 0; i< p1All.length; i++) {
		    	p1All[i].className = p1All[i].className + ' ' + p1All[i].className + '-move'; // 换个类名加一加
		    }
		},1200);
	}, 3000);
//$('.swiper-container').style.opacity = '1';
}