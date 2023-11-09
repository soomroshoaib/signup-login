import React from 'react'
import bg from '../../image/sirumair.jpg';
import {Link} from 'react-scroll';

import "./intro.css"
const Intro = () => {
  return (
    <div id='intro'>
        <div className='introcontent'>
          <span className='yello'>Hello, </span>
          <span className='introtext'>I'm <span className='introName'> Umair Ullah Khan</span>
           <br /> <span className='cto'> Chief Technology Officer at Strugbits</span>  </span>
          <p className='intropara'>TURN YOUR CAREER INTO A
              SUCCESS STORY WITH STRUGBITS</p>
              <Link><button className='btn'><img src=''  className='imgbtn'/> Heir me  </button></Link>
        </div>
        <img src={bg} alt='ctoimg' className='bg' />
      
    </div>
  )
}

export default Intro
