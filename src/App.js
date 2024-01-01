import './App.css';
import CurrencyBar from './components/CurrencyBar/CurrencyBar';
import RegionPage from './components/Region/RegionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import ComingSoon from './components/ComingSoon/ComingSoon';
import Homepage from './components/Homepage/Homepage';
import { useEffect, useState } from 'react';

function App() {
  //define some objects to group stuff such as actions/currencies etc
  const RegionActions = {
    feed: { name: "Feed Dogs", timeToComplete: 10, unlocked: true,
    costs :{food:1} },

    vacinate: { 
      name: "Vacinate", 
      timeToComplete: 20, 
      unlocked: true,
      costs :{cash:40,treatments:1}
    
    },
    fleatTick: { name: "Treat Fleas", timeToComplete: 60, unlocked: true,
    costs :{treatments:1} },

    steralise: { name: "Steralise", timeToComplete: 30, unlocked: true,
    costs :{cash:120} }
  }

  const Currencies = {
    cash: { icon: "dollar.png", value: 0, altText: "Cash" },
    influence: { icon: "influence.png", value: 0, altText: "Influence" },
    content: { icon: "content.png", value: 0, altText: "Media Content" },
    food: { icon: "food.png", value: 0, altText: "Food" },
    treatments: { icon: "treatment.png", value: 0, altText: "Treatments" }
  }

const [sCurrencies,setSCurrencies] = useState(Currencies);
  //todo: import save (cookie?) and throw key:value pairs into above objects ?
  //could this be done by 
  //eg preloading save and using teneray apperator when defining the objects?
  useEffect(() => {

    const id = setInterval(() => {
      let statusCopy = Object.assign({},sCurrencies);
      statusCopy.cash.value++
      setSCurrencies(statusCopy)
            
        
    }, 1000);

    return () => { clearInterval(id); };

}, [sCurrencies]);

  return (
    <div className="App">
      <BrowserRouter>
        <CurrencyBar Currencies={sCurrencies} />
        <NavMenu />
        
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route
            path="/Regions"
            element={
              <RegionPage RegionActions={RegionActions} Currencies={sCurrencies}/>
            }
          />

          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
