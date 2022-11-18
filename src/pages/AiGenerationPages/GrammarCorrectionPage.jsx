import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';

export default function GrammarCorrectionPage() {
  const [userPrompt, setUserPrompt] = useState('');

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );

  const [temp, setTemp] = useState(1);
  // console.log(typeof(temp))
  // console.log(temp)
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

    const response = await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `Correct this to standard English: ${userPrompt}`,
        temperature: 0,
        // temperature: { temp },
        max_tokens: 200,
        // max_tokens: 30,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(
          `AI Grammar Correction for: ${userPrompt}`
        );
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
        <h1>Grammar Correction</h1>
        <p>
          Correct sentences into standard English.
        </p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          Enter your sentence below to be corrected
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>

       
        <button onClick={handleSubmit}>Correct Grammar</button>
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
          <img src={loadingCube} className='loading' />
        )}
      </div>
    </div>
  );
}