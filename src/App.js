import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';

// Updated cakes array with price
const cakes = [
  { name: "MILKY NUT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEw36RdYrn6UVtH", price: "₹850" },
  { name: "MANGO CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpSXo57IWHhlLwt", price: "₹750" },
  { name: "CHOCOLATE DREAM CAKE (NORMAL)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8qRwzcUndhdcSU", price: "₹1000" },
  { name: "CUSTOMIZABLE BIRTHDAY CHOCOLATES", image: "https://rochiechocolates.com/cdn/shop/files/1_41fdea2b-e120-41de-8ee7-", price: "₹20" },
  { name: "RED BEE", image: "https://b.zmtcdn.com/data/dish_photos/1d3/46419bdc91ff49e50efe92111d6e", price: "₹900" },
  { name: "BLUEBERRY", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExM", price: "₹850" },
  { name: "ROSE MILK", image: "https://www.cakesquarechennaionline.com/wp-content/uploads/2024/11/Ros", price: "₹750" },
  { name: "MANGO TRUFFLE", image: "https://www.doorstepcake.com/wp-content/uploads/2022/03/mango-truffle-", price: "₹850" },
  { name: "KIFAYA", image: "https://hotovenbakers.in/cdn/shop/products/Kifaya-Cake-Thekkekara-s-Ho", price: "₹1100" },
  { name: "KIT KAT CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKGjxZNom_HBqHW", price: "₹1300" },
  { name: "CHOCO NUTELLA", image: "https://www.allrecipes.com/thmb/IBuQQsYa1Hv8mJZVjCRr0oAtWI0=/1500x0/fi", price: "₹1200" },
  { name: "RAINBOW CAKE", image: "https://www.hanielas.com/wp-content/uploads/2011/07/chocolate-rainbow-", price: "₹1000" },
  { name: "KUNAFA PISTACHIO CHOCOLATE", image: "https://i0.wp.com/cookwithnoorain.com/wp-content/uploads/2024/06/IMG_3", price: "₹1400" },
  { name: "WHITE CHOCOLATE BLONDIE", image: "https://sugarspunrun.com/wp-content/uploads/2022/09/White-chocolate-Br", price: "₹900" },
  { name: "GIFT HAMPERS FOR MEN (CUSTOMIZABLE)", image: "https://www.thewalletstore.in/cdn/shop/files/2-_2.jpg?v=1736933197&wid", price: "₹999" },
  { name: "GIFT HAMPER FOR WOMEN", image: "https://i.etsystatic.com/40887255/r/il/713caf/4752983204/il_fullxfull", price: "₹1000" },
  { name: "RED VELVET", image: "https://pyramideats.com/cdn/shop/files/EgglessRedVelvetCake1_1080x.web", price: "₹750" },
  { name: "CHOCOLATE TRESLECHES", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAcMMDt43UbMy6n", price: "₹900" },
  { name: "MANGO CHOCOLATE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWor7W_N9dHHTP7d", price: "₹900" },
  { name: "CHOCO VELVET", image: "https://flouringkitchen.com/wp-content/uploads/2022/12/BW1A9054-2.jpg", price: "₹900" }
];


// Home component
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  // Filter cakes based on search input
  const filteredCakes = cakes.filter(cake =>
    cake.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#ffe6f0',
      minHeight: '100vh',
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#d63384', fontSize: '2.5rem', marginBottom: '20px' }}>🍰 My Cake Gallery</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search cakes..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginBottom: '30px',
          fontSize: '16px'
        }}
      />

      {/* Cake Gallery */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {filteredCakes.length > 0 ? filteredCakes.map((cake, index) => (
          <div key={index} onClick={() => navigate(`/order/${encodeURIComponent(cake.name)}`)} style={{
            backgroundColor: '#fff0f5',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '220px',
            padding: '15px',
            transition: 'transform 0.3s',
            cursor: 'pointer'
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <img src={cake.image} alt={cake.name} style={{
              width: '100%',
              borderRadius: '10px',
              marginBottom: '10px'
            }} />
            <h3 style={{ color: '#c2185b' }}>{cake.name}</h3>
            <p style={{ fontSize: '16px', color: '#333' }}>{cake.price}</p> {/* Display price */}
          </div>
        )) : <p style={{ fontSize: '18px', color: '#777' }}>No cakes found.</p>}
      </div>
    </div>
  );
};

// OrderPage component
const OrderPage = () => {
  const { cakeName } = useParams();
  const decodedName = decodeURIComponent(cakeName);
  const cake = cakes.find(cake => cake.name === decodedName);  // Find the selected cake
  const whatsappNumber = "+919876543210"; // Change this to your number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi, I want to order the ${decodedName}`;

  return (
    <div style={{
      backgroundColor: '#fff0f5',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h2 style={{ color: '#d63384' }}>You selected: {decodedName}</h2>
      <p style={{ margin: '10px 0', fontSize: '18px' }}>Price: {cake.price}</p> {/* Display price */}
      <p style={{ margin: '10px 0', fontSize: '18px' }}>To order, contact us on WhatsApp:</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        Message us on WhatsApp
      </a>
    </div>
  );
};

// Main App component with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:cakeName" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
