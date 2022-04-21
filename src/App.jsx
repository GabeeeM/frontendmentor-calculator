import {useState} from "react";
import './App.css';

function App() {
  const [display, setDisplay] = useState("0");


  return (
    <div className="App">
      <body className="bg-t1-main-bg h-screen flex flex-col justify-center items-center">
        <div className="calculator md:h-[40rem] md:w-[40rem]">
          <div className="top">
            <div className="left">
              <h2>calc</h2>
            </div>
            <div className="right">

            </div>
          </div>
          <div className="display bg-t1-screen-bg md:h-[5rem] flex flex-col justify-center text-right pr-[2rem] mt-5">
            <p className="text-white">{display}</p>
          </div>
          <div className="keypad h-4/5 bg-t1-toggle_keypad-bg mt-5 p-5">
            <div className="buttons bg-white grid grid-cols-4 grid-rows-5 h-full gap-2 text-center">
              <div className="seven flex justify-center items-center bg-t1-key-bg2">7</div>
              <div className="eight flex justify-center items-center bg-t1-key-bg2">8</div>
              <div className="nine flex justify-center items-center bg-t1-key-bg2">9</div>
              <div className="del flex justify-center items-center bg-t1-key-bg">DEL</div>
              <div className="four flex justify-center items-center bg-t1-key-bg2">4</div>
              <div className="five flex justify-center items-center bg-t1-key-bg2">5</div>
              <div className="six flex justify-center items-center bg-t1-key-bg2">6</div>
              <div className="plus flex justify-center items-center bg-t1-key-bg2">+</div>
              <div className="one flex justify-center items-center bg-t1-key-bg2">1</div>
              <div className="two flex justify-center items-center bg-t1-key-bg2">2</div>
              <div className="three flex justify-center items-center bg-t1-key-bg2">3</div>
              <div className="minus flex justify-center items-center bg-t1-key-bg2">-</div>
              <div className="decimal flex justify-center items-center bg-t1-key-bg2">.</div>
              <div className="zero flex justify-center items-center bg-t1-key-bg2">0</div>
              <div className="divide flex justify-center items-center bg-t1-key-bg2">/</div>
              <div className="multiply flex justify-center items-center bg-t1-key-bg2">x</div>
              <div className="reset col-span-2 flex justify-center items-center bg-t1-key-bg">RESET</div>
              <div className="equals col-span-2 flex justify-center items-center bg-t1-toggle_key-color">=</div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
