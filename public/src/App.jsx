import { Route, Routes } from "react-router-dom";
import Anchor from "./components/Anchor/Anchor";
import Birth from "./components/Birth/Birth";
import East from "./components/East/East";
import Footer from "./components/Footer/Footer";
import Photo from "./components/Photo/Photo";
import AllSpeech from "./components/Speeches/AllSpeech";
import SpeachesDetails from "./components/Speeches/SpeachesDetails";
import SpeecheContainer from "./components/Speeches/SpeecheContainter";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Nav from "./components/home/Nav";
import Legachy from "./components/legacy/Legachy";
import Political from "./components/political/Political";
import Timeline from "./components/timeline/Timeline";

import EventHome from "./components/Event/EventHome";
import Slider2 from "./components/slider/Slider2";
import Military from "./components/military/Military";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech" element={<SpeecheContainer />} />
        <Route path="/speeches/:sl" element={<SpeachesDetails />} />
        <Route path="/birth" element={<Birth />} />
        <Route path="/east" element={<East />} />
        <Route path="political" element={<Political />} />
        <Route path="/allspeeach" element={<AllSpeech />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legachy" element={<Legachy />} />
        <Route path="/anchor" element={<Anchor />} />
        {/* <Route path="/slider" element={<Slider2 />} /> */}
        <Route path="/event" element={<EventHome />} />
        <Route path="/military" element={<Military />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
