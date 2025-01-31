import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Amd from './Module/Amd.jsx'
import Cards from './Cards.jsx'

function App() {
  return(
  <>
  <Header/>
  <Card/>
  <Amd/>
  <Cards Name="RTX5090" Price={199} Watt={500}/>
  <Cards Name="RTX5080" Price={999} Watt={400}/>
  <Cards Name="RTX5070" Price={749} Watt={350}/>
  <Cards Name="RTX5060" Price={549} Watt={300}/>
  <Food/>
  <Footer/>
    </>
  );
}

export default App
