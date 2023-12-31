import './App.css';
import RegionPage from './components/Region/RegionPage';
function App() {

  const RegionActions = {
    feed: { name: "Feed Dogs", timeToComplete: 10,unlocked:true },
    vacinate: { name: "Vacinate", timeToComplete: 20,unlocked:true},
    fleatTick: { name: "Treat Fleas", timeToComplete: 60,unlocked:true},
    steralise: { name: "Steralise", timeToComplete: 30,unlocked:true}
  }
  
  return (
    <div className="App">
      <RegionPage RegionActions={RegionActions} />
    </div>
  );
}

export default App;
