//Main Js file
$( document ).ready(function() {
	//Setting the default current image (array index) 
    var currentImg = 0;
    //Setting the list of thumbnails
    var imgList = $('.digital-brochure .db-gallery-section .db-gallery .thumbs img');
    //Setting the main image
    var mainImg = $('.digital-brochure .db-gallery-section .db-gallery .main-img img');
    //Setting the left arrow control
    var leftControl = $('.digital-brochure .db-gallery-section .db-gallery .controllers .left');
    //Setting the right arrow control
    var rightControl = $('.digital-brochure .db-gallery-section .db-gallery .controllers .right');

	//Variable to hold the img path of the the existing thumbnails
	var imgListSrc = [];
    for(var i = 0; i< imgList.length; i++){
        imgListSrc.push(imgList[i].src);
    }

	// Thumbnails click event that replaces main image with it
    imgList.on('click', function (event) {
        var imgPath = $(this)[0].src; //+ '?' + Math.floor( Math.random() * 100 + 1); //This is an optional random variable to bypass caching in case it's needed
        mainImg.attr("src", imgPath );
        currentImg = imgListSrc.indexOf(imgPath);
    });

    //Left arrow navigation control
    leftControl.on('click', function (event) {
        if (currentImg == 0){
            mainImg.attr("src", imgListSrc[imgListSrc.length -1] );
            currentImg = imgListSrc.length -1;
        }else {
            mainImg.attr("src", imgListSrc[currentImg -1] );
            currentImg = currentImg -1;
        }
    });

    //Right arrow navigation control
    rightControl.on('click', function (event) {
        if (currentImg == imgListSrc.length -1){
            mainImg.attr("src", imgListSrc[0] );
            currentImg = 0;
        }else {
            mainImg.attr("src", imgListSrc[currentImg +1] );
            currentImg = currentImg +1;
        }
    });

});