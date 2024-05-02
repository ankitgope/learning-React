import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import News from './News';

function MyApp(){
  return (
    <div>
    <h1>coustom App</h1>
    </div>
  );
}
// important interviw question this valuated expression also check app.js for variable injection in HTML
const text ='   Evaluated Expression or this variable inject thats mean ot will show final value after calculating all the calculatin lie if else ' 
const anotherVariable= (
  <a href='https://google.com' target= '_blank_'>Visit google </a>
)

//this behind the scene work done by a packge name BABLE
const newElement = React.createElement(
  //1st expected parameter as per rule is a TAG
  //2nd expected parameter is an OBJECT it adds properties like we set attributes is custom react This is  mandatory if no attribute keep it empty 
  //3rd expected parameter is a  DIRECT TEXT 
  //4th evaluated Expression
  'a',
  {
    href:'https/:google.com', target:'_blank',
  },
  'Click me to VISIT GOOGLE',
  // important interviw question this valuated expression
   text
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyApp />
    <App/>
    <News />
    {/* {anotherVariable} */}
    {newElement}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

