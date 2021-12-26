import "./index.css";
import { useState } from "react";
import AuthenticatedUser from "./components/auth/AuthenticatedUser";
import UnAuthenticatedUser from "./components/auth/UnAuthenticatedUser";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./context/auth-context";

function App() {
  const [user] = useState<boolean>(false);

  return user ? (
    <AuthContext.Provider value={{ user }}>
      <Router>
        <AuthenticatedUser />
      </Router>
    </AuthContext.Provider>
  ) : (
    <UnAuthenticatedUser user={user} />
  );
}

export default App;
