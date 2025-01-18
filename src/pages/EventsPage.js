
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import NextEvents from '../components/NextEvents';

function EventsPage() {
 

  return (
    <div className="App bg-pagebg">
      <Header/>
      <EventCard/>
      <NextEvents/>
      <Footer/>
    </div>
  );
}

export default EventsPage;
