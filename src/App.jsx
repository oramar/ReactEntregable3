import axios from "axios";
import { useEffect, useState } from "react";
import LocationInfo from "./components/LocationInfo"
import ResidentCard from "./components/ResidentCard"
import "./App.css";
import ErrorFetch from "./components/ErrorFetch"

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState();
  const [hasError, setHasError] = useState()
  const [hasErrorPersonalizado, setHasErrorPersonalizado] = useState()
  const getLocation = () => {
    let URL;
    if (locationInput) {
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randoIdLocation = Math.floor(Math.random() * 126) + 1;
      URL = `https://rickandmortyapi.com/api/location/${randoIdLocation}`;
    }
    axios
      .get(URL)
      .then((res) =>{
         setLocation(res.data)
         setHasError(false)
      })
      .catch((err) =>{
        setHasError(true);
        setHasErrorPersonalizado(err.response)
        console.log(err.response)
      } )
  };
  useEffect(() => {
    getLocation();
  }, [locationInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationInput(event.target.inputSearch.value);
    
  };

  return (
    <div className="App">
      <article className="form-container">
        
      <h1 className="form-container__title">Rick and Morty</h1>
      <form className="form__group field" onSubmit={handleSubmit}>
        <input id="inputSearch" className="form__field " type="input" placeholder="Name" name="name" />
        <label for="name" className="form__label">Type a location id</label>
        <button>Search</button>
      </form>
      </article>
    {
      hasError ?
      <ErrorFetch hasErrorPersonalizado={hasErrorPersonalizado} />
      :
      <>
      <LocationInfo location={location} />

      <div className="residents-container">
        {location?.residents.map((url) => (
          <ResidentCard key={url} url={url} />
        ))}
      </div>
      </>
    }
    </div>
  );
}

export default App;
