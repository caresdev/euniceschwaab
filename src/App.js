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

      <main>
        <Background/>

        <div className="section-container col-xs-4 col-md-10">

          {/* Books section */}
          <section>
            <Books />
          </section>
          
          {/* Section 3 */}

          {/* Section 3 */}

        </div>


        

      </main>


      
     
    </div>
  );
}

export default App;
