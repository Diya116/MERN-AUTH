import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Username from "./component/Username";
import Password from "./component/Password";
import Register from "./component/Register";
import Profile from "./component/Profile";
import Recovery from "./component/Recovery";
import Reset from "./component/Reset";
import Otp from "./component/Otp";
import PageNotFound from "./component/PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Username />} />
          <Route path="register" element={<Register />} />
          <Route path="password" element={<Password />} />
          <Route path="profile" element={<Profile />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="recovery/otp" element={<Otp />} />
          <Route path="reset" element={<Reset />} />
         
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
