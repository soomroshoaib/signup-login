import React from 'react'
import  "./Work.css";
import Team1 from '../../image/LEO.jpg';
import Team2 from '../../image/Ali.jpg';
import Team3 from '../../image/Alian.jpg';
import Team4 from '../../image/lovely.jpg';
import Team5 from '../../image/SEO.jpg';
import Team6 from '../../image/wase.jpg';

const Work = () => {
  return (
    <section id="Works">
       <h2 className='workTitle'>
         Join Our Team
       </h2>
       <span className='worksDece'>
       Here at Strugbits, we are in search of unique individuals with the right attitude - someone who 
       is not afraid of raising the bar and exceeding all expectations. Are you ready for the next chapter of your career story? Get in touch with us now and discover new opportunities.
       </span>
       <div className='worksImgs'>
        <img src={Team1} alt='' className='worksImg' />
        <img src={Team2} alt='' className='worksImg' />
        <img src={Team3} alt='' className='worksImg' />
        <img src={Team4} alt='' className='worksImg' />
        <img src={Team5} alt='' className='worksImg' />
        <img src={Team6} alt='' className='worksImg' />
       </div>
       <button className='workbtn'> See More  </button>
    </section>
  )
}

export default Work