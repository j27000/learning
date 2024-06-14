import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import './App.css';
// Reducers and Context 
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
