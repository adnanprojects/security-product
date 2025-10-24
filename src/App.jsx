import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App