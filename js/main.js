document.addEventListener( 'DOMContentLoaded', function() {
  const splideBanner = new Splide('.splide-banner', {
    type: 'loop',
    autoplay: false,
    interval: 2500,
    arrows: false,
    breakpoints: {
      1024: {},
      768: {},
    },
  });
  
  splideBanner.mount();
} );

document.addEventListener( 'DOMContentLoaded', function() {
  const splideLink = new Splide('.splide-link', {
    type: 'loop',
    interval: 1500,
    perPage: 6,
    arrows: false,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 3,
        arrows: true,
      },
      1024: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });
  
  splideLink.mount();
} );


let index = 0;
let interval = 1000;

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for( const star of document.getElementsByClassName("magic-star")){
    setTimeout(() => {
      animate(star);
      
      setInterval(() => { 
        animate(star); 
      }, 1000);
    }, index++ * (interval/3));
}