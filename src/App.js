import './App.css';
import Currency from './Currency'
function App() {
  return (
    <div className="App">
      <nav className="nav">
        <h1>AccuRATE Currency Convertor</h1>
        <a href="#how">How It Works?</a>
      </nav>
     <Currency />
     <div id="how" className="info">
       <div className="how-it-works">
         <h4>How it Works</h4>
         <p>Enter an amount in the <em>from</em> area</p>
         <p>Select the currencies in the <em>from</em> and <em>to</em> areas</p>
         <p>Click <em>Convert</em> to get the desired currency value!</p>
       </div>
     </div>
    </div>
  );
}

export default App;
