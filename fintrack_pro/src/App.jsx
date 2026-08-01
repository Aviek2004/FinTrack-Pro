import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
// import { useEffect, useState } from "react";

function App() {

const [user, setUser] = useState(() => {
  return JSON.parse(localStorage.getItem("currentUser"));
});

  const [toggle,setToggle]=useState(true);

  return (

    <div className="min-h-screen bg-slate-100">

      {

      user ?

      <Home
      user={user}
      setUser={setUser}
      />

      :

      toggle ?

      <Login
      setToggle={setToggle}
      setUser={setUser}
      />

      :

      <Register
      setToggle={setToggle}
      />

      }

    </div>

  );
}

export default App;