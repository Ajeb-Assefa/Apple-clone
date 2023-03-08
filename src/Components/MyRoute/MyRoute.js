import React from "react";
import Header from "../Header/Header";
import Alert from "../Alert/Alert";
import Ipad from "../Ipad/Ipad";
import Mac from "../Mac/Mac";
import Iphone from "../Iphone/Iphone";
import Productpage from "../Pages/Productpage";
import IphonePro from "../Pages/IphonePro/IphonePro";
import Leftrightiphone from "../Leftrightiphone/Leftrightiphone";
import Actorwatch from "../Actorwatch/Actorwatch";
import Arcadeapplecard from "../Arcadeapplecard/Arcadeapplecard";
import Watch from "../Pages/Watch/Watch";
import Tv from "../Pages/Tv/Tv";
import Music from "../Pages/Music/Music";
import Support from "../Pages/Support/Support";
import Search from "../Pages/Search/Search";
import Cart from "../Pages/Cart/Cart";
import Four04 from "../Pages/Four04/Four04";
// import AppleYouTube from "../AppleYouTube/AppleYouTube";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
function MyRoute() {
  return (
    <div>
      <Header />
      <Routes>
       
        <Route path="/mac" element={<Mac />}></Route>
        <Route path="/iphone" element={<Iphone />}></Route>
        <Route path="/iphone/:pid" element={<Productpage />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Four04 />}></Route>
        <Route
          path="/"
          element={
            <>
              <Alert />
              <Ipad />
              <Mac />
              <IphonePro />
              <Leftrightiphone />
              <Actorwatch />
              <Arcadeapplecard />
              {/* <AppleYouTube /> */}
            </>
          }
        ></Route>
      </Routes>
      {/* <IphonePro /> */}
      <Footer />
    </div>
  );
}

export default MyRoute;
