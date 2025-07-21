import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import FindDestination from './FindDestination';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FindDestination />
        <Destinations />
      </main>
    </div>
  );
};

export default Home;
