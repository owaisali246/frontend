import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import ImageSection from './components/ImageSection';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
      <ImageSection />
      <Footer />

    </div>
  );
}

export default App;
