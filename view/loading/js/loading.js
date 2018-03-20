var loadingBox = document.getElementById('loadingBox');

//var inLine = document.getElementById('in');
//var loadText = document.querySelector('.loadText');
//loadText.innerText = '10%';
//inLine.style.width = '10%';


if (Pattern == 'dev') {
	loadingBox.style.height = window.screen.height + 'px';
	loadingBox.style.width = window.screen.width + 'px';
	loadingBox.style.top = '0'
	loadingBox.style.left = '0'
} else if (Pattern == 'show') {
	loadingBox.style.height = window.screen.width + 'px';
	loadingBox.style.width = window.screen.height + 'px';
	loadingBox.style.top = '18.2%';
	loadingBox.style.left = '-39%';
}
loadingBox.style.animation = 'loadInTop 1s .2s ease both';