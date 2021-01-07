function myFunction(imgs) {
  // Get the expanded image
  var y = document.getElementById("video_carto_punk");
	if(y.style.display == "block"){
		y.style.display = "none";
	} 
  var expandImg = document.getElementById("expandedImg");

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;

  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 


var video_carto_punk = document.getElementById("video_carto_punk");
video_carto_punk.style.display = "none";

document.getElementById("carto_punk").addEventListener("click", function () {
  
  var z = document.getElementById("container");
	if(z.style.display == "block"){
		z.style.display = "none";
	} 
  
  var y = document.getElementById("video_carto_punk");
	if(y.style.display == "block"){
		y.style.display = "none";
	} else{
		y.style.display = "block";
  }
  
  
	 
});


