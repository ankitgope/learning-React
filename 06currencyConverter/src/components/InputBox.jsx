import React from "react";
import { useId } from "react"

function InputBox({
  // taking input
  //lable ->> want to know from or to in the input box
  label,
  // how much currency to be change
  amount,
  onAmountChange,
  //for changing the currency filter
  onCurrencyChange,
  //bychance if any filter is not given by user then a default array to be used
  currencyOptions = [],
  // for selecting the currency and by default usd is using
  selectCurrency = "usd",
  //some user may dont give a amount or may give a amount
  // can  be ignored  But production grade app
  amountDisable = false,
  currencyDisabled = false,
  className = "",
}) {
  // this id will generate a uniqu id with random strings value check vid 11 42:39
  const amountInputId = useId()
  return (
    <div className={`bg-slate-500 p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        {/* binding the useId in lable  */}
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // checking if the input is enabled or disabled
          disabled={amountDisable}
          // taking the value from the user in the amount
          value={amount}
          // if the amount gets change then how will it work
          //now we havent set an empty value in here so if some one dosent passes any value 
          //then it will crash so we usee &&  as a checkeras it exist or not
          // e.target.value we are wrapping with number as js take a string format value in this area 
          onChange={(e) => onAmountChange && onAmountChange(Number((e.target.value))) } 
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none"
        value={selectCurrency}
        // not changing in number as as usd inr etc the value is String
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
        >
          {/*adding loop in currency option  aka in that dropdowm part 
           {currencyOptions.map((currency)=>(
            <option value="usd">
              usd
              </option>
          ))} when this kind of value repetation occure then it hit the performance because the DOM created
          by react is maing multiple time because rect dont know that it have already made that dom so to stop thet 
          we use this field ---> key={} always uese this when repetation occure 
          remember the key in loops 
          */}
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
              {currency}
              </option>
          ))}
          
        </select>
      </div>
    </div>
  );
}

export default InputBox;
