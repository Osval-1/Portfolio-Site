import React from 'react'
import image from '../assets/Pfp.jpg'

const Intro = () => {
    return (
    <div className='profile'>
       <div>
        <h1>Hi there<br/>
            I am Nde Oswald</h1>
        <p>i am a web Developer!</p>
        </div>
        <img src={image}
            className='profile-picture'
            alt="profile-pic"/>
        <p>facebook</p>
        <p>twitter</p>
        <p>linkedin</p>
        <p>github</p>
    </div>)
}

export default Intro

