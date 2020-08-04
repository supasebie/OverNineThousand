import React from 'react';
import pic01 from '../../images/pic01.jpg'

export default class MainListItemIntro extends React.Component {
    render () {
      return (
        <React.Fragment>
          <h2 className="major">Over Nine Thousand</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p> We're a company focused on
            solving the complex problem of creating a strong web presence for your company and personal works.</p>
          <p>Over Nine Thousand was founded by Sebastian, a software solution 
            veteran with extensive experience in managing and creating complex web 
            solutions. His career spans multiple online industries inclusive of; 
            Massively Multiplay Online Gaming, Twitch Broadcasting, Online Document 
            Processing, International Business, Open Source Software Development, 
            Hackathon Victory Accolades, and more!</p>
        </React.Fragment>
        )
    };
};