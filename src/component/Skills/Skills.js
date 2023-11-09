import React from 'react'
import "./Skill.css"
import UIUX from '../../image/uiux.jpg';
import WEBdesgin from '../../image/webdesgin.webp';
import AppDesgin from '../../image/appdesgin.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>
                what I do
            </span>
            <span className='skillDec'>
                i am Skilled and passionate web desginer with experience in creating visually and user-friendly
                websites. I have a Strong understanding of design and keen eye for detail. i am proficient in Html CSS.
                and JavaScript Bootstrap React-JS Ract-Native Angular-Js Node-js MongoDB Express-JS And Wix-Velo,
                and as well as Design Software Such as Adobe photoshope and Illustratar       
                  </span>
                  <div className='Skillbars'>
                    <div className='skillbar'>
                        <img src={UIUX} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>UI / UX Design </h2>
                            <p> This is demo text, you can write your own content here </p>
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={WEBdesgin} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2> Websites Design  </h2>
                            <p> This is demo text, can be changed while making the producation ready site   </p>
                        </div>
                    </div>
                    <div className='skillbar'>
                        <img src={AppDesgin} alt='' className='skillbarImg'/>
                        <div className='skillbarText'>
                            <h2>App Desgin </h2>
                            <p>You can write text related to mobile app developments. </p>
                        </div>
                    </div>

                  </div>

        </section>
    )
}

export default Skills