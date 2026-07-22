// import logo from './logo.svg';
import './App.css';

function App() {
  const office = {
    Name:"DBS Business Center",
    Rent:55000,
    Address:"Chennai"
  };

  const officeList = [
    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Chennai"
    },
    {
      Name: "Regus Office",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WebWork",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office Space"
        width="500"
      />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          ₹{office.Rent}
        </span>
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (
        <div key={index}>
          <h3>{item.Name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              ₹{item.Rent}
            </span>
          </p>

          <p><b>Address:</b> {item.Address}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
