import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Community from './community/community';
import Opportunities from './community/opportunities';
import PodcastPage from './community/podcasts';
import Marketplace from './community/marketplace';
import Signin from './signin/signin';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'


const App = (props) => {
  return (
    <ChakraProvider>
    <div>
      <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/opportunities" element={<Opportunities />} />
          {/* <Route path="/podcasts" element={<PodcastPage />} /> */}
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
