import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [body, setBody] = useState('');

  useEffect( () => {
    axios
        .get("http://localhost:7777/")
        .then((response) => {
          console.log(response)
          // const data = response.data;
          // setBody(data)
        })
        .catch( (e) => {
          //
        })
  }, [])

  return (
    <div className="App">
        {body}
    </div>
  );
}

export default App;
