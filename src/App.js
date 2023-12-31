import './App.css';
import CurrencyBar from './components/CurrencyBar/CurrencyBar';
import RegionPage from './components/Region/RegionPage';



function App() {

  const RegionActions = {
    feed: { name: "Feed Dogs", timeToComplete: 10,unlocked:true },
    vacinate: { name: "Vacinate", timeToComplete: 20,unlocked:true},
    fleatTick: { name: "Treat Fleas", timeToComplete: 60,unlocked:true},
    steralise: { name: "Steralise", timeToComplete: 30,unlocked:true}
  }

  const Currencies = {
    cash:{icon:"dollar.png",value:0,altText:"$"},
    influence:{icon:"influence.png",value:0,altText:"Influence"},
    content:{icon:"content.png",value:0,altText:"Content"},
    food:{icon:"food.png",value:0,altText:"Food"},
    treatments:{icon:"treatment.png",value:0,altText:"Treatments"}
  }
  
  return (
    <div className="App">
      <CurrencyBar Currencies={Currencies}/>
      <RegionPage RegionActions={RegionActions} />
    </div>
  );
}

export default App;
