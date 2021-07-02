import React from 'react'
export default function Currency({    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount}) {
  return (
       
    <div>
   
      <input type="number" className="input" id='currency' value={amount} onChange={onChangeAmount} />
      <select className='option_' value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option,index)=>(
                      <option className='option_' key={index} value={option}>{option}</option>

        ))}
      </select>
     
    </div>
  )
}















































