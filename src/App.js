import './App.css';
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import {useEffect, useState} from "react";

function App() {
    const [length, getLength] = useState(-1);
    const data = (e) => {
        getLength(e);
    };
      return (
        <div className="App">
            <Navbar dataLength={length}/>
            <Container data={data}/>
        </div>
      );
}

export default App;
