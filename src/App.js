import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Coins';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getCoins = async () => {
    try {
      let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')

      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }

    // .then((res) => {
    //   setCoins(res.data);
    //   console.log("data:", coins);
    // }).catch(error => console.log(error))
  }


  const searchResults = (coins.filter(coin =>
    (coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))));

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  }


  useEffect(() => {
    getCoins();
  }, [])

  return (
    <div className="App">
      <div className="container my-3 text-center text-white-50">
        <label htmlFor="inputPassword5" className="form-label">
          <h2>Search a currency</h2>
        </label>
        <form className="d-flex justify-content-center w-50 m-auto">
          <input className="form-control me-2 bg-warning text-white bg-gradient" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange} />
        </form>
      </div>

      <div className="container-fluid text-center">
        <table className="table text-white m-0">
          <thead>
            <tr>
              <th className='width-2rem' scope="col">Rank</th>
              <th className='width-4rem' scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">24hr Price Change</th>
              <th scope="col">24hr Price Change %</th>
              <th scope="col">Market Cap</th>
            </tr> 
          </thead>
        </table>

        {searchResults.map(coin => {
          return (
            <Coins
              key={coin.id}
              market_cap_rank={coin.market_cap_rank}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              current_price={coin.current_price}
              price_change_24h={coin.price_change_24h}
              price_change_percentage_24h={coin.price_change_percentage_24h}
              market_cap={coin.market_cap}
            />
          )
        })}
      </div>
    </div>

  );
}

export default App;
