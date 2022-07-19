function display_random_image() {
  var theImages = [
    {
      src: "https://m.media-amazon.com/images/I/51Mp2uc8UFL._SX522_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/712U0PCvjES._SX522_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/811YrCFlVgL._SS500_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/61ON2YOQPUL._SX522_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/41dk5WR29DL.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/81ywaki8nZL._SX522_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/91i6SCCW1RL._SX522_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/61sxD7Goh-L._SS500_.jpg",
      width: "300",
      height: "300",
    },
    {
      src: "https://m.media-amazon.com/images/I/91OeYnLoCJL._SX522_.jpg",
      width: "300",
      height: "300",
    },
  ];

  var preBuffer = [];
  for (var i = 0, j = theImages.length; i < j; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = theImages[i].src;
    preBuffer[i].width = theImages[i].width;
    preBuffer[i].height = theImages[i].height;
  }

  // create random image number
  function getRandomInt(min, max) {
    //  return Math.floor(Math.random() * (max - min + 1)) + min;

    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }

  // 0 is first image,   preBuffer.length - 1) is  last image

  var newImage = getRandomInt(0, preBuffer.length - 1);

  // remove the previous images
  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  document.body.appendChild(newImage);
}
