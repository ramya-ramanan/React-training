import Port from "../components/Port";
function Home() {
  return (
    <div className="dashboard">
      <h1>Welcome to Student Dashboard</h1>

      <div className="card-container">
        <Port name="Sumaiya" dept="IT" year="2nd Year" />
        <Port name="Premalatha" dept="CSE" year="3rd Year" />
        <Port name="Riya" dept="ECE" year="1st Year" />
        <Port name="Charumathy" dept="EEE" year="1st Year" />
        <Port name="Alisha Sanofar" dept="IT" year="2nd Year" />
        <Port name="Sri devi" dept="IT" year="2nd Year" />
      </div>
    </div>
  );
}

export default Home;