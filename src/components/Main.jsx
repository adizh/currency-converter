import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Main() {
  const [ratesList, setRatesList] = useState([]);
  const [base, setBase] = useState("EUR");

  useEffect(() => {
    getRates("EUR");
  }, []);
const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=615fdbb25d738d097ab77383d8f43eb2&format=1'

  const getRates = async (base) => {
    const res = await axios.get(
      BASE_URL
    );
    const { rates } = res.data;
  
  
    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };

  return (
    <div className="App">
     <Link to='/currency'>Подсчитать курс валют</Link>
      <select
        className="custom-select"
        value={base}
        onChange={(e) => {
          const value = e.target.value;
          setBase(value);
          getRates(value);
        }}
      >
        {ratesList.map((d) => (
          <option value={d.symbol} key={d.symbol}>
            {d.symbol}
          </option>
        ))}
      </select>
      <ul className="list-group">
        {ratesList.map((d) => (
          <li className="list-group-item" key={d.symbol}>
            {d.symbol} - {d.rate}
          </li>
        ))}
      </ul>
     
    </div>
  );
}

export default Main;