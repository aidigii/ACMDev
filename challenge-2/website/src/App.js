import React, {useState, useEffect} from 'react';
import axios from 'axios'


function App() {

  let [showDisplay, setDisplay] = useState([])
  const name = "Aliah"
  useEffect(() => {
    axios
      .get(`https://harshasrikara.api.stdlib.com/acm-dev@dev/challenge?value=${name}`)
      .then(response => {
        setDisplay(response.data)
      })
  }, [])

  return(
    <div>Hello, my name is {showDisplay.message}</div>
  )
}

export default App;
