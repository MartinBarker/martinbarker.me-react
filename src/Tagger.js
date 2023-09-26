import React, { useState, useEffect } from 'react';

function Tagger() {
  // Load saved state from localStorage or use initial values
  const savedDiscogsUrl = localStorage.getItem('discogsUrl') || '';
  const savedStartWord = localStorage.getItem('startWord') || '';
  const savedDashWord = localStorage.getItem('dashWord') || '';
  const savedEndWord = localStorage.getItem('endWord') || '';
  const savedDomTextField = localStorage.getItem('domTextField') || '';
  
  const [discogsUrl, setDiscogsUrl] = useState(savedDiscogsUrl);
  const [domTextField, setDomTextField] = useState(savedDomTextField);
  const [characterCount, setCharacterCount] = useState(savedDomTextField.length);
  const [startWord, setStartWord] = useState(savedStartWord);
  const [dashWord, setDashWord] = useState(savedDashWord);
  const [endWord, setEndWord] = useState(savedEndWord);

  // Save state to localStorage and log whenever anything changes
  useEffect(() => {
    localStorage.setItem('discogsUrl', discogsUrl);
    localStorage.setItem('startWord', startWord);
    localStorage.setItem('dashWord', dashWord);
    localStorage.setItem('endWord', endWord);
    localStorage.setItem('domTextField', domTextField);

    console.log('Saved to localStorage:');
    console.log('Discogs URL:', discogsUrl);
    console.log('Start Word:', startWord);
    console.log('Dash Word:', dashWord);
    console.log('End Word:', endWord);
    console.log('domTextField:', domTextField);
  }, [discogsUrl, startWord, dashWord, endWord, domTextField]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Discogs URL:', discogsUrl);
    setCharacterCount(domTextField.length);
  };

  const handleCopy = () => {
    const textField = document.getElementById('outputText');
    textField.select();
    document.execCommand('copy');
  };

  const handleDomTextFieldChange = (e) => {
    const newText = e.target.value;
    setDomTextField(newText);
    setCharacterCount(newText.length);
  };

  return (
    <div>
      <h1>Tagger</h1>
      {/* Row with dropdown selections */}
      <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid black' }}>
        <select value={startWord} onChange={(e) => setStartWord(e.target.value)}>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="-">-</option>
          <option value="">Blank</option>
        </select>
        <select value={dashWord} onChange={(e) => setDashWord(e.target.value)}>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="-">-</option>
          <option value="">Blank</option>
        </select>
        <select value={endWord} onChange={(e) => setEndWord(e.target.value)}>
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="-">-</option>
          <option value="">Blank</option>
        </select>
      </div>
      {/* Resizable text output field with a clear border */}
      <textarea
        id="outputText"
        value={domTextField}
        onChange={handleDomTextFieldChange}
        style={{ border: '1px solid #ccc', width: '100%', minHeight: '100px' }}
      />
      {/* Copy button directly under the text output box */}
      <button onClick={handleCopy}>Copy</button>
      {/* Character counter updated dynamically */}
      <p>Character Count: {characterCount}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Discogs URL:
          <input
            type="text"
            value={discogsUrl}
            onChange={(e) => setDiscogsUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Tagger;
