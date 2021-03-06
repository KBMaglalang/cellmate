import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HeaderBanner = ({headerBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div className="hero-banner-top">
      </div>
        <Link href={`/product/${headerBanner.product}`}>
          <button id='hero-banner-button' type='button'>{headerBanner.buttonText}</button>
        </Link>
      <div>
        <div className='hero-banner-top-half'>
          <h3>{headerBanner.midText}</h3>
          <h1>{headerBanner.largeText2}</h1>
          <h4 id='hero-product-name'>{headerBanner.smallText}</h4>
        </div>
          <h1 id='discount'>{headerBanner.discount}</h1>
          <h3 id='hero-banner-at'>at</h3>
        <img src={urlFor(headerBanner.image)} alt='Mobilephones' className='hero-banner-image'/>
      <div className='hero-banner-container-button'>
      </div>
      </div>
      <div className='desc'>
        {/* <h5>Details</h5> */}
        <p>{headerBanner.desc}</p>
      </div>
  
    </div>
  )
}

export default HeaderBanner