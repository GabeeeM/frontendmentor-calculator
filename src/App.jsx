import { useState } from "react";
import "./App.css";

function App() {
  const theme1 = [
    //main theme 0
    {
      backgroundColor: "hsl(222, 26%, 31%)",
    },
    //tertiary theme 1
    {
      backgroundColor: "hsl(223, 31%, 20%)",
    },
    //accent theme 2
    {
      backgroundColor: "hsl(224, 36%, 15%)",
    },
    //delete and reset keys 3
    {
      backgroundColor: "hsl(225, 21%, 49%)",
      boxShadow: "0px 4px hsl(224, 28%, 35%)",
    },
    //equals key 4
    {
      backgroundColor: "hsl(6, 63%, 50%)",
      boxShadow: "0px 4px hsl(6, 70%, 34%)",
    },
    //theme toggle circle 5
    {
      backgroundColor: "hsl(6, 63%, 50%)",
    },
    //number keys 6
    {
      backgroundColor: "hsl(30, 25%, 89%)",
      boxShadow: "0px 4px hsl(28, 16%, 65%)",
    },
    //number key text color 7
    {
      color: "hsl(221, 14%, 31%)",
    },
    //everything else text color 8
    {
      color: "white",
    },
    //equals key text color 9
    {
      color: "hsl(0, 0, 100%)",
    },
  ];

  const theme2 = [
    //main theme 0
    {
      backgroundColor: "hsl(0, 0%, 90%)",
    },
    //tertiary theme 1
    {
      backgroundColor: "hsl(0, 5%, 81%)",
    },
    //accent theme 2
    {
      backgroundColor: "hsl(0, 0%, 93%)",
    },
    //delete and reset keys 3
    {
      backgroundColor: "hsl(185, 42%, 37%)",
      boxShadow: "0px 4px hsl(185, 58%, 25%)",
    },
    //equals key 4
    {
      backgroundColor: "hsl(25, 98%, 40%)",
      boxShadow: "0px 4px hsl(25, 99%, 27%)",
    },
    //theme toggle circle 5
    {
      backgroundColor: "hsl(25, 98%, 40%)",
      marginLeft: "1.75rem",
    },
    //number keys 6
    {
      backgroundColor: "hsl(45, 7%, 89%)",
      boxShadow: "0px 4px hsl(35, 11%, 61%)",
    },
    //number key text color 7
    {
      color: "hsl(60, 10%, 19%)",
    },
    //everything else text color 8
    {
      color: "black",
    },
    //equals key text color 9
    {
      color: "hsl(0, 0, 100%)",
    },
  ];

  const theme3 = [
    //main theme 0
    {
      backgroundColor: "hsl(268, 75%, 9%)",
    },
    //tertiary theme 1
    {
      backgroundColor: "hsl(268, 71%, 12%)",
    },
    //accent theme 2
    {
      backgroundColor: "hsl(268, 71%, 12%)",
    },
    //delete and reset keys 3
    {
      backgroundColor: "hsl(281, 89%, 26%)",
      boxShadow: "0px 4px hsl(285, 91%, 52%)",
    },
    //equals key 4
    {
      backgroundColor: "hsl(176, 100%, 44%)",
      boxShadow: "0px 4px hsl(177, 92%, 70%)",
    },
    //theme toggle circle 5
    {
      backgroundColor: "hsl(176, 100%, 44%)",
      marginLeft: "3.5rem",
    },
    //number keys 6
    {
      backgroundColor: "hsl(268, 47%, 21%)",
      boxShadow: "0px 4px hsl(290, 70%, 36%)",
    },
    //number key text color 7
    {
      color: "hsl(52, 100%, 62%)",
    },
    //everything else text color 8
    {
      color: "hsl(52, 100%, 62%)",
    },
    //equals key text color 9
    {
      color: "hsl(198, 20%, 13%)",
    },
  ];

  const [display, setDisplay] = useState("0");
  const [use, setUse] = useState(0);
  const [theme, setTheme] = useState(theme1);

  const changeTheme = (theme) => {
    if (theme === 1) {
      setTheme(theme1);
    } else if (theme === 2) {
      setTheme(theme2);
    } else if (theme === 3) {
      setTheme(theme3);
    }
  };

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
          if (use === 0) {
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
      <body
        className="h-screen flex flex-col justify-center items-center"
        style={theme[0]}
      >
        <div className="calculator h-[35rem] w-[22rem] sm:w-[35rem] sm:h-[37rem]">
          <div className="calc-top flex flex-rows items-center">
            <div className="calc-left w-1/2">
              <h2 style={theme[8]} className="text-[2rem] sm:text-[3rem]">
                calc
              </h2>
            </div>
            <div className="calc-right w-1/2 flex flex-row justify-end gap-5">
              <h3 className="translate-y-6 text[2rem]" style={theme[8]}>
                THEME
              </h3>
              <div className="toggle flex flex-col">
                <h3 className="flex flex-row justify-around" style={theme[8]}>
                  <p
                    onClick={() => changeTheme(1)}
                    className="cursor-pointer"
                    style={theme[8]}
                  >
                    1
                  </p>
                  <p
                    onClick={() => changeTheme(2)}
                    className="cursor-pointer"
                    style={theme[8]}
                  >
                    2
                  </p>
                  <p
                    onClick={() => changeTheme(3)}
                    className="cursor-pointer"
                    style={theme[8]}
                  >
                    3
                  </p>
                </h3>
                <div className="w-[5rem] mb-5 rounded-2xl" style={theme[1]}>
                  <div className="m-1 w-5 h-5 rounded-full" style={theme[5]} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="display h-[5rem] sm:h-[8rem] flex flex-col justify-center text-right pr-[2rem] mt-5 rounded-xl"
            style={theme[2]}
          >
            <p style={theme[8]} className="text-[3rem] sm:text-[5rem]">
              {display}
            </p>
          </div>
          <div className="keypad h-4/5 mt-5 p-5 rounded-xl" style={theme[1]}>
            <div className="buttons grid grid-cols-4 grid-rows-5 h-full text-center">
              <div
                onClick={() => calc("7")}
                style={theme[6]}
                className="button number seven flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  7
                </p>
              </div>
              <div
                onClick={() => calc("8")}
                style={theme[6]}
                className="button number eight flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  8
                </p>
              </div>
              <div
                onClick={() => calc("9")}
                style={theme[6]}
                className="button number nine flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  9
                </p>
              </div>
              <div
                onClick={() => calc("del")}
                style={theme[3]}
                className="button del flex justify-center items-center sm:w-[7rem] w-[4rem] h-[4rem] sm:h-[4rem]"
              >
                <p className="text-white text-[1.5rem] sm:text-[2rem]">DEL</p>
              </div>
              <div
                onClick={() => calc("4")}
                style={theme[6]}
                className="button number four flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  4
                </p>
              </div>
              <div
                onClick={() => calc("5")}
                style={theme[6]}
                className="button number five flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  5
                </p>
              </div>
              <div
                onClick={() => calc("6")}
                style={theme[6]}
                className="button number six flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  6
                </p>
              </div>
              <div
                onClick={() => calc("+")}
                style={theme[6]}
                className="button number plus flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  +
                </p>
              </div>
              <div
                onClick={() => calc("1")}
                style={theme[6]}
                className="button number one flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  1
                </p>
              </div>
              <div
                onClick={() => calc("2")}
                style={theme[6]}
                className="button number two flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  2
                </p>
              </div>
              <div
                onClick={() => calc("3")}
                style={theme[6]}
                className="button number three flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  3
                </p>
              </div>
              <div
                onClick={() => calc("-")}
                style={theme[6]}
                className="button number minus flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  -
                </p>
              </div>
              <div
                onClick={() => calc(".")}
                style={theme[6]}
                className="button number decimal flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  .
                </p>
              </div>
              <div
                onClick={() => calc("0")}
                style={theme[6]}
                className="button number zero flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  0
                </p>
              </div>
              <div
                onClick={() => calc("/")}
                style={theme[6]}
                className="button number divide flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  /
                </p>
              </div>
              <div
                onClick={() => calc("*")}
                style={theme[6]}
                className="button number multiply flex justify-center items-center w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[4rem]"
              >
                <p style={theme[7]} className="text-[2rem] sm:text-[3rem]">
                  x
                </p>
              </div>
              <div
                onClick={() => calc("reset")}
                style={theme[3]}
                className="button reset col-span-2 flex justify-center items-center"
              >
                <p className="text-white text-[2rem] sm:text-[2rem]">RESET</p>
              </div>
              <div
                onClick={() => calc("=")}
                style={theme[4]}
                className="button equals col-span-2 flex justify-center items-center"
              >
                <p style={theme[9]} className="text-[2rem] sm:text-[3rem]">
                  =
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
