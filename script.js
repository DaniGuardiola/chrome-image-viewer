var imageUrl = "dibujocris.jpg";
function loadImage(){
	console.log("Loading image...")
	var imageElement = document.getElementById("image");
	imageElement.setAttribute("src",imageUrl);
	console.log("Setting src atributte as " + imageUrl);
	imageElement.addEventListener("load", function(){
		console.log("Image loaded");
		var image = document.getElementById('image');
		var width = image.naturalWidth;
		var height = image.naturalHeight;
		console.log("Width: " + width + "px, height: " + height + "px");
		chrome.app.window.current().resizeTo(width, height);
		console.log("Resizing window to image dimensions...");
	});	
}
window.addEventListener("load", function(){
	loadImage();
	document.getElementById("image").addEventListener("mousewheel", MouseWheelHandler, false);
	function MouseWheelHandler(e) {
		var image = document.getElementById('image');
		var width = image.naturalWidth;
		var height = image.naturalHeight;
	    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	    if (delta === 1) {
	        //UP
	        console.log("MouseWheel up detected!");
	        document.getElementById("image").classList.add("cover");
	        var newWidth = chrome.app.window.current().getBounds().width + 20;
	        console.log(newWidth);
	        var newHeight = newWidth * height / width;
	        console.log(newHeight);
	        if (newWidth > 100 && newHeight > 100) {
	        	chrome.app.window.current().resizeTo(newWidth, newHeight);
	        	chrome.app.window.current().moveTo(chrome.app.window.current().getBounds().left - 10, chrome.app.window.current().getBounds().top - 10);
	       	 console.log("Resized!");
	        };	        
	    } else if (delta === -1) {
	        //DOWN
	        console.log("MouseWheel down detected!");
	        document.getElementById("image").classList.add("cover");
	        var newWidth = chrome.app.window.current().getBounds().width - 20;
	        console.log(newWidth);
	        var newHeight = newWidth * height / width;
	        console.log(newHeight);
	        if (newWidth > 100 && newHeight > 100) {
	        	chrome.app.window.current().resizeTo(newWidth, newHeight);
	        	chrome.app.window.current().moveTo(chrome.app.window.current().getBounds().left + 10, chrome.app.window.current().getBounds().top + 10);
	       	 console.log("Resized!");
	        };	
	    } 
}
});
