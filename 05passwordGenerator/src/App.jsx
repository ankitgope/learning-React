import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);
  const [password, setPassword] = useState("");

  // for alert message after copied 
  const [copied, setCopied]=useState("false") 

  // using useRef hook it takes a callBack and dependency useEffect(()=>{} [ ,  , ])
  const passwordRef = useRef(null)

  // using callback hook useCallback(fn (aka function) ,  dependency (array format))

  //creating password Generator using callback hooks
  // we can do wirhout use callback hook but it made some optimization 
  //********************************************************************************************************************** */
  // why used --->  setCallback memorize function as musch as possinble suppose it can memorize whole
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // data by each we will make our password

    if (includeNumbers) str += "123456789";
    if (includeChar) str += "!@#$%^&*";

    // the loop will govern by the length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // this will generate the random character index value
      pass += str.charAt(char); // whithout using plus it is giving only one character so we are using += this will concatinate  
    }
    // not the correct way cannot do just setPassword(pass) we need to add a useEffect hoook to run
    // updatiing state below
   setPassword(pass);
  }, [length, includeNumbers, includeChar, setPassword]); // if we cange any thing over here it will change autometically
  // above using setPassword because of optimization just it if we dont want we will not 
  // if we use password here it will give infinite pasword it will not stop generating so using its relation setPassword
  // the dependencies we are giving here will which will be possiblly running we are optimizig the method 
  // above dependencies we are talking about optimization 
  
  //working of copy button /////////////////////////////////////////////////////////////////////////////////////////////////////
  // using callback for optimization may not be used no  problem
  const usePasswordClipBoard = useCallback(()=>{
    // using passwordRef for showing howmusch copied by highlighting
    // using current? suppose current value is 0 means nothing to select  
    passwordRef.current?.select() 
    //optimization//////////////////////////////////////////////////
     passwordRef.current?.setSelectionRange(0,99) // selection of 0to 3 digit I mean first 3
    window.navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(()=>{setCopied(false),1000})
      alert('Password copied!');
    })
    
    // window => DOM property only work in react  
    // navigation => property 
    //clipboard => property in navigator property
    // writeText => read and write is the property in clipboard  using writeText because 
       //            we need to copy and paste from th window 
       // password -> contains the value of password 
  },
  [password]) // password as a dependency because the button will copy the password only
  
  
  
  //******************************************************** 
  // connecting the password
  // passwordGenerator() cannot do like this not possible
// ***********************************************************
  // using a useEffect hooks it  takes a callback and  a dependency array
  //def ---->  when page loads useEffect gets called and if any changes has been done in dependency it will re run more things there 
  //         it have cleanup function and more to come ...............................
  useEffect(() => {
    passwordGenerator();
  }, [length, includeChar, includeNumbers, passwordGenerator]); // in this dependency if anything changes rerun this 


  return (
    <div
      className="w-full max-w-md  mx-auto shadow-md
      rounded-lg px-4 my-8 text-black bg-yellow-300"
    >
      <h2 className="text-black text-center">Password Generator</h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-2 gap-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
              // using ref={passwordRef} for useRef hook to create a reference
          ref={passwordRef}
        />
        <button
        onClick={usePasswordClipBoard} // this in {..} this bracket is a method 
          className={`outline-none bg-blue-700 text-white 
              px-3 py-2 shrink-0 ${copied?'bg-green-700' : 'bg-blue-700'}`}
        >
          {copied? 'copy':'copied'}
        </button>
      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1 mb-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            id="numberInput"
            onChange={() => {
              setIncludeNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>

          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            id="characterInput"
            onChange={() => {
              // check 32:18 min vid once again
              setIncludeChar((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
