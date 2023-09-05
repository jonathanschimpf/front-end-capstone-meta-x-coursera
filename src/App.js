import {
  Route, 
  Routes,
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
// import MenuUnderConstruction from './components/pages/UnderConstruction/menu_index';
import Menu from './components/pages/Menu/Menu';
import OnlineOrderingUnderConstruction from './components/pages/UnderConstruction/online-ordering_index';

// APP WORKING 

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('home').path} element={<Home />} 
          />
          {/* <Route 
            path={pages.get('menu').path} 
            element={<MenuUnderConstruction />} 
          /> */}
          <Route 
            path={pages.get('menu').path} 
            element={<Menu />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<OnlineOrderingUnderConstruction  />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
