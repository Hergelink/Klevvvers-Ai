import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

import heroImage from '../../images/hero-image.png';
import productIcon from '../../images/header-icons/product-icon.png';
import languageIcon from '../../images/header-icons/language-icon.png';
import summaryIcon from '../../images/title-icons/summary-icon.png';
import facebookIcon from '../../images/title-icons/facebook-icon.png';
import googleIcon from '../../images/title-icons/google-icon.png';
import javascriptIcon from '../../images/title-icons/javascript-icon.png';
import timeIcon from '../../images/title-icons/time-icon.png';
import youtubeIcon from '../../images/title-icons/youtube-icon.png';
import plusIcon from '../../images/title-icons/plus-icon.png'
import chatIcon from '../../images/title-icons/chat-icon.png'


export default function LandingPage() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }

  return (
    <div className='informationContainer'>
      <div className='heroContainer'>
        <div className='heroTextContainer'>
          <h1>Generate text content on demand with the help of GPT-3</h1>
          
          <h4>
            AI powered software that generates ad copies, product descriptions,
            sales copies, blog paragraphs, video scripts more.
          </h4>
        </div>
        <div className='coverImageContainer'>
          <img loading='lazy' src={heroImage} alt='ai drawn' />
        </div>
      </div>

      <hr className='landingPageHr' />

      <div className='thirdInfoDiv'>
        <h3>Automatically generate unique and human-like copy in <span id='gradientText'>seconds.</span></h3>
        <p>
          Built on top of the world’s most advanced AI language model GPT-3.
        </p>
      </div>

      <div className='featuresDiv'>
        <Link to='/product-description' className='featureItem' onClick={scrollToTop} >
          <div className='featureItemContext'>
            <img src={productIcon} alt='product icon' />
            <h3>Product description generator</h3>
            <p>Generate product decriptions for your need.</p>
          </div>
        </Link>

        <Link to='/facebook-ads' className='featureItem' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={facebookIcon} alt='facebook icon' />
            <h3>Facebook Ads generator</h3>
            <p>Generate Facebook ad copies fast & simple.</p>
          </div>
        </Link>

        <Link to='/product-description' className='featureItem' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={googleIcon} alt='google icon' />
            <h3>Google Ads generator</h3>
            <p>Generate Google ad copies fast & simple.</p>
          </div>
        </Link>

        <Link to='/youtube-ideas' className='featureItem' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={youtubeIcon} alt='youtube icon' />
            <h3>Youtube Idea generator</h3>
            <p>Generate Youtube titles, video topics and thumbnails. </p>
          </div>
        </Link>

        <Link className='featureItem' to='/grammar-correction' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={languageIcon} alt='language icon' />
            <h3>Grammar Correction</h3>
            <p>
              Correct your sentences with the help of the most powerful language
              neural network.
            </p>
          </div>
        </Link>

        <Link className='featureItem' to='/generate-summary' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={summaryIcon} alt='summary icon' />
            <h3>Generate Summary</h3>
            <p>Summarize your long text or paragraphs.</p>
          </div>
        </Link>

        <Link className='featureItem' to='/chat' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={chatIcon} alt='summary icon' />
            <h3>Chat with AI</h3>
            <p>Start a conversation with the most capable neural network.</p>
          </div>
        </Link>

        <Link className='featureItem' to='/javascript-helper' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={javascriptIcon} alt='javascript icon' />
            <h3>JavaScript helper</h3>
            <p>Let AI help you with your JavaScript problems.</p>
          </div>
        </Link>

        <Link className='featureItem' to='/time-complexity' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={timeIcon} alt='time icon' />
            <h3>Time Complexity Calculator</h3>
            <p>Let AI help calculate your functions time complexity.</p>
          </div>
        </Link>

        <Link className='featureItem' id='recommend' to='/contact' onClick={scrollToTop}>
          <div className='featureItemContext'>
            <img src={plusIcon} alt='plus icon' />
            <h3>Recommend more features</h3>
            <p>We really want to hear and implement your recommendations!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
