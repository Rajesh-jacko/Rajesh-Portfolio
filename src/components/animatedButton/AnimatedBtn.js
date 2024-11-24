import React from 'react'

function AnimatedBtn() {
    const goToAboutUs = ()=> {
        const aboutMe = document.getElementById('about-me');
        if (aboutMe) {
            aboutMe.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div onClick={()=> goToAboutUs()}>

{/* <a href="www" class="button button--piyo">
        <div class="button__wrapper">
            <span class="button__text">Learn More</span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
            </div>
        </div>
    </a> */}

    <div class="button button--pen">
        <div class="button__wrapper">
            <span class="button__text">Learn More</span>
        </div>
        <div class="characterBox">
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
            <div class="character wakeup">
                <div class="character__face"></div>
                <div class="charactor__face2"></div>
            </div>
        </div>
    </div>

</div>
  )
}

export default AnimatedBtn