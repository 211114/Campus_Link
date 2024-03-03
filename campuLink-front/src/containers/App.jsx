import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/molecules/Navbar";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Feed from "../pages/Feed";
import CompleteProfile from "../pages/CompleteProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/app/*"
          element={
            <>
              <Navbar>
                <Routes>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/completeprofile" element={<CompleteProfile />} />
                  <Route path="/feed" element={<Feed />} />
                </Routes>
              </Navbar>
              {/* <Footer /> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
