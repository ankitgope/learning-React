// there are differnet types of hooks there are hooks those are optional and there non optional
// our hooks are not optional
// curency is a variable
// function useCurrencyInfo(currebmcy){
//** this a format of hooks  */
// }
// 2nd step -> we want to call a API now we can call a api by fetch but we want
// when the api will load or someone will use it then we want to fetch  so using hooks useEffect  in this the function will
//get called autometically no other function will be not be rewuired to call
//  https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
// this above api give a string format json we need to handel that
// we can do chaining howmany we can using THEN
// THEN have a callback in it
//.then((res)=> res.json) it takes a call back and in call back will convert the json  but we need to hold the data
// but we cannot hold in normal it will never updated in uI  so
// this hook gives a advantage to return a value from useState
//in  useState we are passing a empty object for if there is no data then it will  return the object

import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // step 2---->
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`
    )
      .then((res) => res.json())
      // this . then will know that it is holding a json format  and setting the got data with its dependency
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  return data
}
// return the whole method  used for hooks 
export default useCurrencyInfo;
