import { useState } from "react";
import PRODUCTS from "../games";
import { Link } from "react-router-dom";

const SearchBar = () => {
    // Importing internal CSS
    const myTableRow = {
        position: 'absolute',
        left: '57rem' ,
        textAlign: 'start',
        backgroundColor: '#112222c9',
        padding: '10px'
    }
    const myTableLinks = {
        fontSize: '20px',
    }


  const [searchBar, setSearchBar] = useState("");
  console.log(searchBar);

  const filteredProducts = PRODUCTS.filter((product) => {
    // Convert both product name and search query to lowercase for case-insensitive search
    const productName = product.game.toLowerCase();
    const searchQuery = searchBar.toLowerCase();

    return searchQuery === '' || productName.includes(searchQuery);
  });

  return (
    <div>
      <input type="text" onChange={(e) => setSearchBar(e.target.value)} placeholder="Search your Game Here.."/>
      {searchBar && (
        <table>
          <tbody style={myTableRow}>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <Link style={myTableLinks}>{product.game}</Link>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
