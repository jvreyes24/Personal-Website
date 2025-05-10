/* Make objects for intro and logo. logospan is to apply to all class="logo" */
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.logo');

/* Make objects for transitions */


/* Adds event and functions to trigger animation */
window.addEventListener('DOMContentLoaded',()=>{
    /* Function for event listener */
    setTimeout( ()=>{

        logospan.forEach( (span,idx)=>{ /* idx is index number of span elements*/

            setTimeout( ()=>{ /* This equation sets the fade in transition for 400 ms */
                span.classList.add('active');
            }, (idx + 1) * 400) /* idx starts at 0 so we add 1 and multiply by 400 for a 400 ms transition*/

        });

        setTimeout( ()=>{
            logospan.forEach( (span,idx)=>{

                setTimeout( ()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50) /* Fades out in 50 ms */
            })

        },2000) /* Entire sequence from end of fade in to fade out is 2 s/ 2000 ms   */

        setTimeout( ()=>{
            intro.style.top='-100vh'
        }, 2300) /* Intro swipes up to actual site */
    })

})

/* Adds transition of flexbox colors from grey background to whatever color*/
/* window.addEventListener('mouseover', ()=>(

))*/