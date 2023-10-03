/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { PRODUCTS } from "../games";
import Cartitem from "../components/itemCart";
import "../CSS/profile.css"


function Profile() {
  const { gamesItems, totalCartAmount } = useContext(ShopContext);
  const totalAmount = totalCartAmount();

  const [name, setName] = useState('Frank');
  const [username, setUsername] = useState('Frankie 123');
  const [isEditMode, setIsEditMode] = useState(false);

    // This is for the button that are going to hangle the funtionc about Edit Profile
    const handleEditClick = () => {
        setIsEditMode(true);
      };
    // This is for the button that are going to hangle the funtionc about Saveee Profile
      const handleSaveClick = () => {
        // Handle saving changes to updating the profile as needed
        //edit mode
        setIsEditMode(false);
      };

        // Event handler for the image upload input
  const handleImageChange = (event) => {
    let image = document.getElementById("profile-image");
    let file = event.target.files[0];
  
    if (file) {
        var reader = new FileReader();
  
        reader.onload = function (e) {
            image.src = e.target.result;
        };
  
        reader.readAsDataURL(file);
    }
  };

  const Maintanance = () => {
    alert("This Page is undermaintenance")
  }
  return (
    <section className="d-flex">
      <div className="info left">
      <img id="profile-image" src="https://cdn.oneesports.gg/cdn-data/2022/10/MLBB_MPL_PH_S10_MVP_BlacklistInternational_OhMyV33nus.webp" alt=""/>
      <label htmlFor="image-upload" className="upload">Choose Picture</label>
            <input type="file" id="image-upload" className="upload" accept="jpg." onChange={handleImageChange}/>
        <form id="name-form">
          <input id="name" type="text" placeholder="Name" value={name} className="Name" onChange={(e) => setUsername(e.target.value)}
          disabled={!isEditMode}/>
        </form>
        <form id="username-form">
          <input id="username" type="text" placeholder="Username" value={username} className="userName" onChange={(e) => setName(e.target.value)}
          disabled={!isEditMode}/>
        </form>
        <div className="editBTN">
          <button onClick={handleEditClick}>
            <h4 className="EditProf">EDIT PROFILE</h4>
          </button>
          <button onClick={handleSaveClick}> 
            <h4 className="SaveChange">SAVE CHANGES</h4>
          </button>
        </div>
      </div>

      <div className="Cart right">
        <div className="cartContainer">
          <h1>Your games in Cart</h1>
        </div>
        <div className="cartProducts">
          {PRODUCTS.map((Product) => {
            if (gamesItems[Product.id] !== 0) {
              return <Cartitem key={Product.id} data={Product} />;
            }
          })}
        </div>
        <div className="overAll">
          <p className="totalOf">Total Purchase:₱{totalAmount}</p>
          <button className="buytBTN" onClick={Maintanance}>Buy</button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
