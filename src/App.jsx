import Port from "./components/Port";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      
      <Navbar />

      
      <div className="dashboard">
        <h1>Welcome to My Dashboard</h1>

    
        <div className="card-container">

          <Port
            name="Premalatha"
            dept="Information Technology"
            year="2nd Year"
          />

          <Port
            name="Ayesha"
            dept="Computer Science"
            year="3rd Year"
          />

          <Port
            name="Riya"
            dept="Electronics"
            year="3rt Year"
          />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;