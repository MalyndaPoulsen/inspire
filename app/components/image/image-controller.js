app.controller('ImageController', function(ImageService, $interval){
	var ic = this;
	ImageService.getImage().then(function(imageData){
		ic.imageData = imageData;
	})
	// ic.time= Date.now()
})