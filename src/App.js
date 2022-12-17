import './styles.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
// import img from './img/katie-zaferes.png';
import data from './Data/data.js';


function App() {
  console.log("not working i guess");
  const cardArray = data.map(obj=> {
    return <Card 
      key = {obj.id}
      {...obj}

    />
  });
  return (
    <div>
      <Nav />

      <HeroSection />

      <section className="card-list">
        {cardArray}
      </section>

      
    </div>
  );
}

export default App;
