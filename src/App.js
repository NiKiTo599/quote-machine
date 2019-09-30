import React from "react";
import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-8 col-12">
            <Quotes />
          </div>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </>
  );
}

export default App;
