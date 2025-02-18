// App.jsx
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

import Home from "./pages/Home"; // Your main landing page
import Terms from "./pages/Terms"; // The new Terms component
import Privacy from "./pages/Privacy"; // The new Privacy component
import Eula from "./pages/Eula.jsx"; // The new EULA component

const theme = extendTheme({
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                {/* You can still have a nav bar inside or outside your Router */}
                {/* Example of a simple nav: */}


                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/butterflies-of-zimbabwe/terms-and-conditions" element={<Terms/>}/>
                    <Route path="/butterflies-of-zimbabwe/privacy-policy" element={<Privacy/>}/>
                    <Route path="/butterflies-of-zimbabwe/eula" element={<Eula/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
