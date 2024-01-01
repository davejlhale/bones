import './App.css';
import CurrencyBar from './components/CurrencyBar/CurrencyBar';
import RegionPage from './components/Region/RegionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import ComingSoon from './components/ComingSoon/ComingSoon';
import Homepage from './components/Homepage/Homepage';

function App() {
  //define some objects to group stuff such as actions/currencies etc
  const RegionActions = {
    feed: { name: "Feed Dogs", timeToComplete: 10, unlocked: true },
    vacinate: { name: "Vacinate", timeToComplete: 20, unlocked: true },
    fleatTick: { name: "Treat Fleas", timeToComplete: 60, unlocked: true },
    steralise: { name: "Steralise", timeToComplete: 30, unlocked: true }
  }

  const Currencies = {
    cash: { icon: "dollar.png", value: 0, altText: "$" },
    influence: { icon: "influence.png", value: 0, altText: "Influence" },
    content: { icon: "content.png", value: 0, altText: "Content" },
    food: { icon: "food.png", value: 0, altText: "Food" },
    treatments: { icon: "treatment.png", value: 0, altText: "Treatments" }
  }


  //todo: import save (cookie?) and throw key:value pairs into above objects ?
  //could this be done by 
  //eg preloading save and using teneray apperator when defining the objects?


  return (
    <div className="App">
      <BrowserRouter>
        <CurrencyBar Currencies={Currencies} />
        <NavMenu />
        
        <Routes>
        <Route path="/" element={<Homepage/>} />
          <Route
            path="/Regions"
            element={
              <RegionPage RegionActions={RegionActions} />
            }
          />

          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
