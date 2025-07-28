import './App.css';
import {Routes, Route} from 'react-router-dom'

//  STYLES
import './styling/app.css'
  // QUERIES
  import '../src/styling/media-queries/screen-2560.css'
  import '../src/styling/media-queries/screen-1440.css'
  import '../src/styling/media-queries/screen-1024.css'
  import '../src/styling/media-queries/screen-425.css'
  import '../src/styling/media-queries/screen-768.css'

// PAGES
import HomePage from './pages/HomePage';
import Book from './pages/Book';
import HelpCenter from './pages/HelpCenter';
import MyTripsPage from './pages/MyTripsPage';
import TravelInfoPage from './pages/TravelInfoPage';
import MileagePlusPage from './pages/MileagePlusPage';
import DealsPage from './pages/DealsPage';



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/book' element={<Book />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/my-trips' element={<MyTripsPage />} />
        <Route path='/travel-info' element={<TravelInfoPage />} />
        <Route path='/mileage-plus' element={<MileagePlusPage />} />
        <Route path='/deals' element={<DealsPage />} />
      </Routes>
    </div>
  );
}

export default App;

