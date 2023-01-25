import Header from '/components/Header'
import Overview from '/components/Overview'
import QandA from '/components/QandA'
import Ratings from '/components/Ratings'
import Related from '/components/Related'

function App() {
  return (
    <div className="App">
    <Header />
    <Overview />
    <QandA />
    <Ratings />
    <Related />
    </div>
  );
}

export default App;
