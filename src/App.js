import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Books from './components/Books';
import './App.css';

function App() {
  return (
    <div className="App">

      
      <header className="App-header">
        <NavigationBar/>
        <Hero/>
      </header>

      <main >
        <Background/>

        <div className="sections-container">

          {/* Books section */}
          <Books />

          {/* Section 2 */}

          {/* Section 3 */}

          {/* Section 3 */}

        </div>


        

      </main>


      
     
    </div>
  );
}

export default App;
