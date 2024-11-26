// App.jsx

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import PrivacyPolicy from "./components/butterflies_privacy_policy.jsx"; // Import PrivacyPolicy component
import TermsAndConditions from "./components/butterflies_terms_and_conditions.jsx"; // Import TermsAndConditions component

// Extend Chakra UI theme to use Poppins font
const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif", // Set for headings
    body: "Poppins, sans-serif", // Set for body text
  },
});

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </Router>
      </ChakraProvider>
  );
}

export default App;
