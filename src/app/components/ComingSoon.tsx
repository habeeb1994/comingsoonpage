"use client";
import Image from 'next/image';
import logo from '../../images/slaylogo.svg';
import instgramsvg from '../../images/instagram.svg';
import imagemobile from '../../images/hero-mobile.jpg'
import imagedesktop from '../../images/hero-desktop.jpg'
import {useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

function ComingSoon(){
    const [days,setDays]=useState(0);
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);

useEffect(()=>{
    const target =new Date("02/27/2024 23:59:59");
const interval=setInterval(()=>{
    const now=new Date();
    const distance=target.getTime()-now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const second = Math.floor((distance % (1000 * 60)) / 1000);
console.info(day);
setDays(day);
setHours(hour);
setMinutes(minute);
setSeconds(second);
},1000);
return ()=>clearInterval(interval);
},[]
);

    return (
<div className='container'> 
       <div className='logo'>
        <Image
         src={logo}
         alt=""
        />
    </div>
    <main>
        
      <article>
       
        <h1 className={inter.className}><span>We&apos;re</span> coming soon</h1>
        <p>
          Hello fellow shoppers! We&apos;re currently building our new fashion store.
          Stay Tuned for more Updates.
        </p>
        <div className='launch'>
            <div>
                <p>{days}</p>
                <span>Days</span>
            </div>
            <div>
                <p>{hours}</p>
                <span>Hours</span>
            </div> <div>
                <p>{minutes}</p>
                <span>Minutes</span>
            </div> <div>
                <p>{seconds}</p>
                <span>Seconds</span>
            </div>
        </div>
        <div className='instagram'>
       <p> Follow us on Instagram </p>
       <a href='https://www.instagram.com/slayfitstore.in/'><Image
         src={instgramsvg}
         alt=""
        />
        </a>
        </div>
      </article>
    
      <article>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={imagedesktop.src}
          />
          <img src={imagemobile.src} alt="" />
        </picture>
      </article>
    </main>
</div>    );
}

export default ComingSoon;