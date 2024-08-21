const the_imgs = document.querySelectorAll('.index-img');


const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1');
        }
        
    })
},
   { threshold: 0.4
   });
//
  for (let i = 0; i < the_imgs.length; i++) {
   const elements9 = the_imgs[i];

    imgObserver.observe(elements9);
  } 



