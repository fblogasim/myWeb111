var the_animation = document.querySelectorAll('.steps');

var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
                //uncomment the following line of code if you want the animation to repeat again
                //entry.target.classList.remove('scroll-animation')
            }

        })
},
{ threshold: 0.1
});
//
for (let i = 0; i < the_animation.length; i++) {
 const elements = the_animation[i];

 observer.observe(elements);
} 


var the_animation1 = document.querySelectorAll('.sq-medium');

var observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('icon-animation')
        }
        else {
                //uncomment the following line of code if you want the animation to repeat again
                //entry.target.classList.remove('scroll-animation')
            }

        })
},
{ threshold: 0.5
});
//
for (let i = 0; i < the_animation1.length; i++) {
 const elements1 = the_animation1[i];

 observer1.observe(elements1);
} 


    function changeColorMobile(color){
        document.getElementById("our-philosophy").style.backgroundColor = color;
    }
    
    function startAnimation(){
        var flexbox = document.getElementById("shrinking-box");
        flexbox.style.animation = "shrink 10s infinite";
    }

