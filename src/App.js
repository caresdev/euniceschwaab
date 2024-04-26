import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Books from './components/Books';
import Arts from './components/Arts';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header>
        <NavigationBar/>
        <Hero/>
      </header>

      <main>
        <Background/>

        <div className="container section-container col-md-12">

          {/* Books section */}
          <section className='container'>
            <Books />
          </section>
          
          {/* Arts section */}
          <section className='container'>
            <Arts />
          </section>

          {/* Section 3 */}



        </div>
        


      </main>

      
     
    </div>
  );
}

export default App;
