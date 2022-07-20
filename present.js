
var to = 'Bích Phương!';
var gift_url = 'https://www.facebook.com/profile.php?id=100004221226056';
var gift_image_url = 'https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/279092033_2154458284704858_6031830282759443601_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=b7-I_zapJQEAX-LiWq1&_nc_ht=scontent.fhan5-1.fna&oh=00_AT-st9vu_cR1Wd8w8XOYmDZUjvgYHHNYb9zpZau9uLWx6w&oe=62DD6924';

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
