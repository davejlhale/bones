import { useState } from 'react';
import {  CurrencyValue } from './CurrencyBar.styles'
import React from "react";


const Value =({value}) => {
const [sValue,setValue] = useState(value)
    return (
        
        <CurrencyValue>{value}</CurrencyValue>
        );
}

export default Value;