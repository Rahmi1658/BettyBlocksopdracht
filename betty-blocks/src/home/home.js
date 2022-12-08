import React, { useState, useEffect } from 'react'; 
const title = 'New cat fact';

const App = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://catfact.ninja/fact');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <h3>{title}</h3>
      {Object.keys(data).map(key => (
        <p key={key}>{data[key]}</p>
      ))}
    </div>
  );
}

export default App;