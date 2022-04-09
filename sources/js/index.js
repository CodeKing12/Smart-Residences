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
            // {
            //     breakpoint: 370,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: true,
            //     }
            // }
        ]
    })

});

console.clear();

const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass))
			element.classList.remove(stringClass);
		else
			element.classList.add(stringClass);
	}
	
	init();
})();

