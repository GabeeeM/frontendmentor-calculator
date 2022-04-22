import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [use, setUse] = useState(0);

  const calc = (input) => {
    setUse((prev) => prev + 1);
    console.log(use);

    if (input === "del") {
      setDisplay((prev) =>
        prev
          .split("")
          .slice(0, prev.length - 1)
          .join("")
      );
    } else if (input === "reset") {
      setDisplay("0");
      setUse(0);
    }

    if (display.length <= 16) {
      switch (input) {
        case "del":
          break;

        case "reset":
          break;

        case "=":
          setDisplay(eval(display));
          setUse(0);
          break;

        case "+":
          if (use > 0) {
            setDisplay((prev) => prev + input);
            break;
          } else {
            setUse(0);
            break;
          }

        case "-":
          if (use > 0) {
            setDisplay((prev) => prev + input);
            break;
          } else {
            setUse(0);
            break;
          }

        case "/":
          if (use > 0) {
            setDisplay((prev) => prev + input);
            break;
          } else {
            setUse(0);
            break;
          }

        case "*":
          if (use > 0) {
            setDisplay((prev) => prev + input);
            break;
          } else {
            setUse(0);
            break;
          }

        case ".":
          if (use > 0) {
            setDisplay((prev) => prev + input);
            break;
          } else {
            setUse(0);
            break;
          }

        default:
          if (use == 0) {
            setDisplay(input);
          } else if (use > 0) {
            setDisplay((prev) => prev + input);
          }
          break;
      }
    }
  };

  return (
    <div className="App">
      <body className="bg-t1-main-bg h-screen flex flex-col justify-center items-center">
        <div className="calculator md:h-[40rem] md:w-[40rem] ">
          <div className="calc-top flex flex-rows items-center">
            <div className="calc-left w-1/2">
              <h2 className="text-white">calc</h2>
            </div>
            <div className="calc-right w-1/2 flex flex-row justify-end gap-5">
              <h3 className="text-white translate-y-6">THEME</h3>
              <div className="toggle flex flex-col">
                <h3 className="text-white flex flex-row justify-around">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </h3>
                <div className="bg-t1-screen-bg w-20 rounded-2xl">
                  <div className="m-1 w-5 h-5 rounded-full bg-t1-toggle_key-color"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="display bg-t1-screen-bg md:h-[7rem] flex flex-col justify-center text-right pr-[2rem] mt-5 rounded-xl">
            <p className="text-white">{display}</p>
          </div>
          <div className="keypad h-4/5 bg-t1-toggle_keypad-bg mt-5 p-5 rounded-xl">
            <div className="buttons grid grid-cols-4 grid-rows-5 h-full gap-2 text-center">
              <div
                onClick={() => calc("7")}
                className="button number seven flex justify-center items-center bg-t1-key-bg2"
              >
                <p>7</p>
              </div>
              <div
                onClick={() => calc("8")}
                className="button number eight flex justify-center items-center bg-t1-key-bg2"
              >
                <p>8</p>
              </div>
              <div
                onClick={() => calc("9")}
                className="button number nine flex justify-center items-center bg-t1-key-bg2"
              >
                <p>9</p>
              </div>
              <div
                onClick={() => calc("del")}
                className="button del flex justify-center items-center bg-t1-key-bg"
              >
                <p>DEL</p>
              </div>
              <div
                onClick={() => calc("4")}
                className="button number four flex justify-center items-center bg-t1-key-bg2"
              >
                <p>4</p>
              </div>
              <div
                onClick={() => calc("5")}
                className="button number five flex justify-center items-center bg-t1-key-bg2"
              >
                <p>5</p>
              </div>
              <div
                onClick={() => calc("6")}
                className="button number six flex justify-center items-center bg-t1-key-bg2"
              >
                <p>6</p>
              </div>
              <div
                onClick={() => calc("+")}
                className="button number plus flex justify-center items-center bg-t1-key-bg2"
              >
                <p>+</p>
              </div>
              <div
                onClick={() => calc("1")}
                className="button number one flex justify-center items-center bg-t1-key-bg2"
              >
                <p>1</p>
              </div>
              <div
                onClick={() => calc("2")}
                className="button number two flex justify-center items-center bg-t1-key-bg2"
              >
                <p>2</p>
              </div>
              <div
                onClick={() => calc("3")}
                className="button number three flex justify-center items-center bg-t1-key-bg2"
              >
                <p>3</p>
              </div>
              <div
                onClick={() => calc("-")}
                className="button number minus flex justify-center items-center bg-t1-key-bg2"
              >
                <p>-</p>
              </div>
              <div
                onClick={() => calc(".")}
                className="button number decimal flex justify-center items-center bg-t1-key-bg2"
              >
                <p>.</p>
              </div>
              <div
                onClick={() => calc("0")}
                className="button number zero flex justify-center items-center bg-t1-key-bg2"
              >
                <p>0</p>
              </div>
              <div
                onClick={() => calc("/")}
                className="button number divide flex justify-center items-center bg-t1-key-bg2"
              >
                <p>/</p>
              </div>
              <div
                onClick={() => calc("*")}
                className="button number multiply flex justify-center items-center bg-t1-key-bg2"
              >
                <p>x</p>
              </div>
              <div
                onClick={() => calc("reset")}
                className="button reset col-span-2 flex justify-center items-center bg-t1-key-bg"
              >
                <p>RESET</p>
              </div>
              <div
                onClick={() => calc("=")}
                className="button equals col-span-2 flex justify-center items-center bg-t1-toggle_key-color"
              >
                <p>=</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
