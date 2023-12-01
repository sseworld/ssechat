import "./App.css"
import { Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} /> */}
      <Route path="/" component={Chatpage} exact />
      <Route path="/login" component={Homepage} />
    </div>
  );
}

export default App;
