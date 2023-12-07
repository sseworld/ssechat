import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";
import EditProfile from "./Pages/EditProfile";
import ForgetPassword from "./components/Profile/ForgetPassword";
import EditPage from "./components/Profile/EditPage";
import UpdatePassword from "./components/Profile/UpdatePassword";

function App() {
  return (
    <>
      <div className="App">
        {/* <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} /> */}
        <Route path="/" component={Chatpage} exact />
        <Route path="/login" component={Homepage} />
      </div>
      <Route path="/profile/password" component={ForgetPassword} exact />
      <Route path="/profile/password/update" component={UpdatePassword} exact />
      <Route path="/profile" component={EditPage} exact />
    </>
  );
}

export default App;
