import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import facebookIcon from '../../images/title-icons/facebook-icon.png'

export default function FacebookAdsPage() {
  const [userPrompt, setUserPrompt] = useState('');

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );

  const [temp, setTemp] = useState(1);

  const [aiResponse, setAiResponse] = useState('...await the response');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // {userPrompt} send this to api

    // OPEN AI-START

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `Write a facebook ad for ${userPrompt}`,
        temperature: temp,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(
          `AI Facebook ads suggestions for: ${userPrompt}`
        );
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };

  return (
    <div className='productDiv'>
      <div className='infoArea'>
      <img
          src={facebookIcon}
          alt='facebook icon'
          className='titleIcons'
        />
        <h1>Generate Facebook Ads</h1>
        <p>
          Genereate Facebook Ads for any type of product, simply enter
          the name and product description to get started.
        </p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          What Product Would You like to get a Facebook Ad for?
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>

        <div className='rangeSlider'>
          <div className='rangeInfo'>
            <p>Deterministic</p>
            <p>{temp}</p>
            <p>Creative</p>
          </div>
          <input
            type='range'
            min={0}
            max={1}
            step={0.01}
            value={temp}
            onChange={(e) => setTemp(e.target.value * 1)}
            className='slider'
          />
        </div>
        <button onClick={handleSubmit}>Generate Ad Text</button>
      </div>
      <hr className='blogPageHr' />
      <div className='responseDiv'>
        {!loading ? (
          <>
            <span className='aiResponseTitle'>{responseTitle}</span>
            <hr />
            <span className='aiResponse'>{aiResponse}</span>
          </>
        ) : (
          <img src={loadingCube} alt='loading' className='loading' />
        )}
      </div>
    </div>
  );
}
