import '../App.css';
import AboutComponent from '../components/AboutComponent';
import Header from '../components/Header';
import Hero from '../pages/Hero';
import ImpactComponent from '../components/ImpactComponent';
import ServiceComponent from '../components/ServiceComponent';
import EventsComponent from '../components/EventsComponent';
import PartnersComponent from '../components/PartenrsComponent';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

function Home() {
 

  return (
    <div className="App bg-blue-100">
      <Header/>
      <Hero />
      <AboutComponent />
      <ImpactComponent/>
      <ServiceComponent/>
      <EventsComponent/>
      <PartnersComponent/>
      <Footer/>
    </div>
  );
}

export default Home;
