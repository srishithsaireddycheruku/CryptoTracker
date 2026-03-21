import { useState, useEffect } from "react";
import currencyStore from "../../zustandState/store";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { setCurrency } = currencyStore();
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Fetch crypto search results from CoinGecko
  useEffect(() => {
    if (query.length > 1) {
      fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.coins || []);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li onClick={() => setCurrency("inr")}><a>INR</a></li>
            <li onClick={() => setCurrency("usd")}><a>USD</a></li>
          </ul>
        </div>
      </div>

      <div onClick={goToHome} className="navbar-center">
        <a className="btn btn-ghost text-xl">Crypto Tracker</a>
      </div>

      <div className="navbar-end flex items-center space-x-2">
        {/* Search button */}
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => setShowSearch(!showSearch)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Search bar + dropdown */}
        {showSearch && (
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search crypto..."
              className="input input-bordered w-48"
            />
            {query && results.length > 0 && (
              <ul className="absolute left-0 mt-1 w-48 bg-base-100 shadow rounded-box z-10 max-h-60 overflow-y-auto">
                {results.map((coin) => (
                  <li
                    key={coin.id}
                    className="p-2 hover:bg-base-200 cursor-pointer flex items-center space-x-2"
                    onClick={() => {
                      navigate(`/details/${coin.id}`); // navigate to coin detail page
                      setQuery("");
                      setShowSearch(false);
                    }}
                  >
                    <img src={coin.thumb} alt={coin.name} className="w-5 h-5" />
                    <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
