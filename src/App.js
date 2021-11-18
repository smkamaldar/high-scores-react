// import logo from './logo.svg';
import './App.css';
import Table from "./Table.js"
import allCountryScores from "./scores.js";

function App() {
  const sortedCountries = allCountryScores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  return (
    <div className="container">
      {sortedCountries.map((country, index) => {
        let sortedScores = country.scores.sort((a, b) => {
          return b.s - a.s;
        })
        return (
          <div key={index} className="row justify-content-md-center mb-2">
            <div className="border border-primary col-6 ">
              <h3 className="text-center text-primary">High scores : {country.name}</h3>
              <Table scores={sortedScores} />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
