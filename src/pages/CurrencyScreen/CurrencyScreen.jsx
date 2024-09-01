import React, { useEffect, useState } from 'react';
import { getCurrencyData } from '../../utils/api';

// import styles from './CurrencyScreen.module.css'

function CurrencyScreen() {
  const [currency, setCurrency] = useState(null);

  const fetchCurrency = () => {
    getCurrencyData().then(res => {
        if (res?.Valute?.USD?.Value) setCurrency(res?.Valute?.USD?.Value)
        
    })
    getCurrencyData('R01235') // Код для USD в XML
    .then(data => console.log(`Курс ${data.name}: ${data.rate} RUB`))
  };

  useEffect(() => {
    fetchCurrency()
  }, [])

  return (
    <div>
      <h2>
        Курс ЦБ РФ USD: 
      </h2>
      {currency && (
        <div>
          <h3>
            <b>{currency} RUB</b>
          </h3>
        </div>
      )}
    </div>
  );
}

export default CurrencyScreen;