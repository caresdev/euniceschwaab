import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Books from './components/Books';
import Arts from './components/Arts';
import About from './components/About';
import AppFooter from './components/AppFooter';
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

          {/* News  */}

          

          {/* About */}
          <section className='container'>
            <About/>
          </section>


          {/* Footer should be outside of main. Fix css properties for position, etc. */}
          {/* Footer */}
          <footer id='app-footer' className='container p-3'>
            <AppFooter/>
          </footer>

      </div>

    </main>

      
     
    </div>
  );
}

export default App;
