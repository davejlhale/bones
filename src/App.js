import './App.css';
import BasicSlider from './components/BasicSlider/BasicSlider';

function App() {

  const AC_FeedDogs ={
    name:"Feed Dogs",
    timeToComplete:10
  }
  const AC_Vacinate ={
    name:"Vacinate",
    timeToComplete:20
  }
  const AC_Treat ={
    name:"Treat",
    timeToComplete:40
  }
  const AC_Steralise ={
    name:"Steralise",
    timeToComplete:60
  }
  return (
    <div className="App">
            <BasicSlider ActionConfig={AC_FeedDogs}/>
            <BasicSlider ActionConfig={AC_Vacinate}/>
            <BasicSlider ActionConfig={AC_Steralise}/>
            <BasicSlider ActionConfig={AC_Treat}/>
    </div>
  );
}

export default App;
