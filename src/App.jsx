import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  // return <Game gameId={1}/>;
  return (
    <div className="App">
      <div className="content">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
