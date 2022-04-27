

$(document).ready(function() {
    $(".header-slick").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        fade: true,
        dots: false,
        speed: 500,
        arrows: false,
        zIndex: 100,
        asNavFor: '.image-slider',
        // variableWidth: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
    });

    $(".image-slider").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3200,
        fade: true,
        dots: false,
        speed: 500,
        arrows: false,
        zIndex: 100,
        asNavFor: '.header-slick',
    });

    $(".shop-slider").slick({
        arrows: true,
        nextArrow: "<button class='inline-flex text-purple font-semibold items-center border-2 border-purple bg-white hover:bg-purple hover:font-bold hover:text-white group px-[18px] py-1 transition-colors hover:transition-colors duration-400 hover:duration-400'><svg class='w-8 hidden group-hover:inline' fill='#ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z'/></svg> <svg class='w-8 inline group-hover:hidden' fill='#5F0766' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z'/></svg></button>",
        prevArrow: "<button class='inline-flex text-purple font-semibold items-center border-2 border-purple bg-white hover:bg-purple hover:font-bold hover:text-white group px-[18px] py-1 transition-colors hover:transition-colors duration-400 hover:duration-400'><svg class='w-8 hidden group-hover:inline' fill='#ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z'/></svg> <svg class='w-8 inline group-hover:hidden' fill='#5F0766' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z'/></svg></button>",
        appendArrows: ".shop-nav",
        // variableWidth: true,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    variableWidth: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    arrows: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
        ]
    })

});

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('sr-video', {
        playerVars: { 'autoplay': 1, 'controls': 1},
        events: {}
    });
}

console.log(player)

nav = document.querySelector("#theNav");
navHeight = nav.clientHeight;
document.querySelector("#menu").style.top = navHeight + "px";

function openMenu() {
    document.getElementById("menu").style.height = "100%";
    nav.classList.add("nav-active");
    setTimeout(function(){document.querySelector(".mobile-nav-items").classList.remove("disappear");}, 400);
    document.querySelector(".menu-icon").setAttribute("onclick", "closeMenu()");
    document.querySelector("body").style.overflow = "hidden";
}

function closeMenu() {
    setTimeout(function(){document.getElementById("menu").style.height = "0";}, 300);
    document.querySelector(".mobile-nav-items").classList.add("disappear");
    nav.classList.remove("nav-active");
    document.querySelector(".menu-icon").setAttribute("onclick", "openMenu()");
    document.querySelector("body").style.overflow = "scroll";
}

playbtn = document.querySelector("#modal-1")
function showVideo() {
    console.log("Hi")
    MicroModal.show('modal-1', {
      debugMode: true,
      disableScroll: true,
    //   onClose: pauseVideo(),
    //   onShow: function (modal) { document.querySelector('.js-body').classList.add(modal.id) },
    //   onClose: function (modal) { document.querySelector('.js-body').classList.remove(modal.id) },
      awaitCloseAnimation: true
    })
}

function closeVideo() {
    player.pauseVideo();
    MicroModal.close('modal-1')
}

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  image = document.createElement("img")
  image.setAttribute("src", "images/filter.svg")
  a.appendChild(image)
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    document.querySelector('.dropdown').classList.toggle('rotate-dropdown')
    // this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
      document.querySelector('.dropdown').classList.remove('rotate-dropdown')
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

function increment() {
  document.querySelector(".quantity-input").stepUp();
}

function decrement() {
  quantity = document.querySelector(".quantity-input");
  if (quantity.value == 0) {
    ;
  } else {
    quantity.stepDown();
  }
}