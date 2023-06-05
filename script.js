var width = window.innerWidth;
var body = document.body;
/*SHOW/HIDE MOBILE MENU*/
function showMobileMenu() {
  document.getElementById("menu-overlay").style.height = "100%";
}

function hideMobileMenu() {
  document.getElementById("menu-overlay").style.height = "0";
}

/*SHOW/HIDE CART ON DESKTOP*/

function showCart() {
  if (width > 800) {
    document.getElementById("cart-overlay-div").style.width = "100%";
    document.getElementById("cart-overlay-div").style.left = "0";
    document.getElementById("cart-overlay").style.width = "100%";
    document.getElementById("cart-overlay").style.left = "50.4%";
    document.body.classList.add("noscroll");
  } else {
    window.open("/../cart.html", "_self");
  }
}

function hideCart() {
  document.getElementById("cart-overlay-div").style.width = "0";
  document.getElementById("cart-overlay-div").style.left = "100%";
  document.getElementById("cart-overlay").style.width = "0";
  document.getElementById("cart-overlay").style.left = "100%";
  document.body.classList.remove("noscroll");
}

/*SHOW/HIDE SEARCH*/
function showSearch() {
  document.getElementById("search-div").style.height = "100%";
  document.body.classList.add("noscroll");
}

function hideSearch() {
  document.getElementById("search-div").style.height = "0";
  document.body.classList.remove("noscroll");
}

/*SHOW/HIDE ADD TO CART*/
function showNotif() {
  document.getElementById("addcart-div").style.display = "flex";
  document.body.classList.add("noscroll");
}

function hideNotif() {
  window.parent.document.getElementById("addcart-div").style.display = "none";
  window.parent.document.body.classList.remove("noscroll");
}

/*SWAP IMAGE IN GALLERY*/
var cordobaArray = [
  "/../images/products/cordoba.png",
  "/../images/products/cordoba2.png",
  "/../images/products/cordoba3.png",
];

var cordobaActive = 0;

var taylorArray = [
  "/../images/products/taylor.png",
  "/../images/products/taylor2.png",
  "/../images/products/taylor3.png",
];

var taylorActive = 0;

function cordobaPrev() {
  var bigImg = document.getElementById("bigimage-mobile");
  cordobaActive = cordobaActive - 1;
  if (cordobaActive == -1) {
    cordobaActive = 2;
  }
  bigImg.src = cordobaArray[cordobaActive];
}

function cordobaNext() {
  var bigImg = document.getElementById("bigimage-mobile");
  cordobaActive = cordobaActive + 1;
  if (cordobaActive == 3) {
    cordobaActive = 0;
  }
  bigImg.src = cordobaArray[cordobaActive];
}

function taylorPrev() {
  var bigImg = document.getElementById("bigimage-mobile");
  taylorActive = taylorActive - 1;
  if (taylorActive == -1) {
    taylorActive = 2;
  }
  bigImg.src = taylorArray[taylorActive];
}

function taylorNext() {
  var bigImg = document.getElementById("bigimage-mobile");
  taylorActive = taylorActive + 1;
  if (taylorActive == 3) {
    taylorActive = 0;
  }
  bigImg.src = taylorArray[taylorActive];
}

function imageSwap(img) {
  var bigImg = document.getElementById("bigimage");
  bigImg.src = img.src;
}
