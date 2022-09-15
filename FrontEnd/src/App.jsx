import { hot } from 'react-hot-loader/root';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  var testAPI = async () => {
    let res = await fetch("/api")
    let resJson = await res.json()
    setData(resJson.message); 
     };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>This is an example of the Authorization Code flow</h1>
          <p>{!data ? "Loading..." : data}</p>
          <a onClick={() => testAPI()} className="btn btn-primary">
            Log in with Spotify
          </a>
        </div>
      </header>
    </div>  );
}

export default hot(App);
