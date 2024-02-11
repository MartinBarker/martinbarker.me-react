import React, { useEffect, useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('pink');

  useEffect(() => {
    // Function to fetch colors from local JSON file
    const fetchColors = async () => {
        /*
      try {
        const response = await fetch('/colors.json'); // Assuming colors.json is in public folder
        console.log('response=',response)
        if (!response.ok) {
          throw new Error('Failed to fetch colors');
        }
        const colorsData = await response.json();
        console.log('colorsData=',colorsData);
        const randomColor = Object.values(colorsData)[Math.floor(Math.random() * Object.keys(colorsData).length)].color1;
        setBackgroundColor(randomColor);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
      */
    };

    fetchColors();
  }, []);

  return (
    <div style={{ background: '${apple}'  }}>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
      <h1>color contentcolor contentcolor contentcolor contentcolor contentcolor content</h1>
    </div>
  );
};
export default App;
