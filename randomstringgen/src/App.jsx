import { useEffect, useState, useCallback, useRef } from "react";

function App() {
  //* states
  const [numAllow, toggleNum] = useState(false);
  const [charAllow, toggleChar] = useState(false);
  const [strLength, setLength] = useState(8);
  const [string, updateString] = useState("");

  //* string Generator function
  const stringGen = useCallback(() => {
    let baseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      baseString += "0123456789";
    }
    if (charAllow) {
      baseString += "!@#$%^&*-_+=[]{}~`";
    }
    let pass = "";
    for (let index = 1; index <= strLength; index++) {
      let char = baseString.charAt(
        Math.floor(Math.random() * baseString.length)
      );
      pass += char;
    }
    updateString(pass);
  }, [strLength, numAllow, charAllow]);

  //* executing stringGen as the page gets rendered
  useEffect(() => {
    stringGen();
  }, [stringGen, strLength, numAllow, charAllow]);

  //* handling the changes
  const changeLength = (e) => {
    setLength(e.target.value);
  };

  const changeNum = () => {
    toggleNum((prev) => !prev);
  };

  const changeChar = () => {
    toggleChar((prev) => !prev);
  };

  //* adding the copy functionality
  const stringRef = useRef(null);

  const copyString = useCallback(() => {
    stringRef.current?.select();
    stringRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(string);
  }, [string]);

  return (
    <>
      {/* //* output and copy area */}
      <h3>Random String Generator</h3>
      <input
        type="text"
        placeholder="string shall appear here"
        value={string}
        ref={stringRef}
        disabled
      />
      <button onClick={copyString}>Copy</button>
      <br />
      <br />
      {/* //* Selection Area */}
      Length - {strLength}:{" "}
      <input
        type="range"
        min={8}
        max={30}
        value={strLength}
        onChange={changeLength}
      />
      <br />
      <input type="checkbox" checked={numAllow} onChange={changeNum} />
      Numbers <br />
      <input type="checkbox" checked={charAllow} onChange={changeChar} />
      Special Characters <br />
    </>
  );
}

export default App;
