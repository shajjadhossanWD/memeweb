import React, { useState } from 'react';
import "./ComingSoon.css";
// import Fade from 'react-reveal/Fade';

const ComingSoon = () => {
  
  return (
    <>
      <section class="section_stories">
        <div className="section_content">
        {/* <Fade bottom> */}
        <div className="videodiv">
         <video src="/dancing-girl.mp4" className='video' controls autoPlay />
         </div>
          <h1>Coming Soon</h1>
          <a href='https://dslegends.org'><button className="btn btn--white">KNOW MORE</button></a>
          {/* </Fade> */}
          <div className="content">
          <div className="content1">
          <h4 className='text-white'>Science has found the key success, well, for men anyway.</h4>
            In the United Kingdom, men in general are not expected to live as long as women – so maybe they need a little bit more help.
           <br/>

            The average life expectancy for a man is 79, compared to women who are expected to live until 82 years old.
            <br/>
            <p>
            The most common age of death for men in the UK between 2012 and 2014 was 86, but women were living until 89 during the same time period, according to the Office of National Statistics.
            <br />
            The reason for women outliving men is down to genetics, according to sources.
            <br />
            Women have two X chromosomes, which provides them with a back-up if a mutation occurs.
            <br />
            However, men do not have that luxury – they only have one X chromosome to express all their genes.
            <br />
            Lifestyle factors can also impact how long a person will live.
            <br />
            Here are six ways a man can boost his life expectancy.
            <br />
            Stare at boobs
            <br />
            It may seem like an inconvenience, or an invasion of privacy, to many women but staring at boobs creates a positive mindset in men.
            <br />
            The same effect occurs when they look at cute animals.
            <br />
            A 2012 study, published in the Archives of Internal Medicine, looked at the effects positive thinking had on men’s health.
            <br />
            After a year, positive thinking had a powerful effect on health choices.
            <br />
            More than half of the patients with coronary artery disease increased their physical activity versus 37 percent in the control group, who were not asked to write down positive thoughts in the morning.
            <br />
            The same happened in men with high blood pressure.
            <br />
            More than 40 percent of those with high blood pressure followed their medication plan compared to 36 percent in the non-positive thinking group.
            <br />
            So this website helps you with that!
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default ComingSoon;