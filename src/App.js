import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';





// Updated cakes array with price
const cakes = [
  { name: "MILKY NUT", image: "https://takethecake.in/wp-content/uploads/2024/02/milky-nut-cake-customized-cakes-in-coimbatore-4.jpg", price: "₹850" },
  { name: "MANGO CAKE", image: "https://imgcdn.floweraura.com/naked-mango-magic-cake-9743660ca-BB.jpg", price: "₹750" },
  { name: "CHOCOLATE DREAM CAKE (NORMAL)", image: "https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9244-scaled.jpg", price: "₹1000" },
  { name: "CUSTOMIZABLE BIRTHDAY CHOCOLATES", image: "https://rochiechocolates.com/cdn/shop/files/3_3f676cb7-6101-47eb-a960-31abc68aafaf.png?v=1718719875&width=1445", price: "₹20" },
  { name: "RED BEE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxzSVICsFFtMqXWSMzREOjTbt2ghShmJJgkD7ITSW-t83mYr5B149Xhk7&s=10", price: "₹900" },
  { name: "BLUEBERRY", image: "https://www.piesandtacos.com/wp-content/uploads/2024/06/Blueberry-Cake-7-scaled.jpg", price: "₹850" },
  { name: "ROSE MILK", image: "https://cdn.dotpe.in/longtail/item_thumbnails/8501755/pp1zswNt-800-800.webp", price: "₹750" },
  { name: "MANGO TRUFFLE", image: "https://shrikripa.in/wp-content/uploads/2018/06/DSC_0618_main-1024x884.jpg", price: "₹850" },
  { name: "KIFAYA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GPTfvGJCaCUEAFONu8EZi-npalI6k7Ua_Q&s", price: "₹1100" },
  { name: "KIT KAT CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyk2-q9DJAFcnHUCAwZeniHU1k64FdIsFyg&s", price: "₹1300" },
  { name: "CHOCO NUTELLA", image: "https://richanddelish.com/wp-content/uploads/2024/01/nutella-cake-2.jpg", price: "₹1200" },
  { name: "RAINBOW CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtbAqVOUY0sPjyUkpnHECrBExDAc35Ao70Q&s", price: "₹1000" },
  { name: "KUNAFA PISTACHIO CHOCOLATE CAKE", image: "https://neethmedappa.com/wp-content/uploads/2024/08/Kunafa-Cake-scaled.jpg", price: "₹1400" },
  { name: "WHITE CHOCOLATE BLONDIE", image: "https://sugarspunrun.com/wp-content/uploads/2022/09/White-chocolate-Brownies-1-of-1.jpg", price: "₹900" },
  { name: "GIFT HAMPERS FOR MEN (CUSTOMIZABLE)", image: "https://www.thewalletstore.in/cdn/shop/files/2-_2.jpg?v=1736933197&wid", price: "₹999" },
  { name: "GIFT HAMPER FOR WOMEN", image: "https://betweenboxes.in/cdn/shop/products/IMG_20210824_154555__01_a0432e3a-842e-4490-8060-33beacd8f95c.jpg?v=1680260525&width=1500", price: "₹1000" },
  { name: "RED VELVET", image: "https://bakewithshivesh.com/wp-content/uploads/2024/08/IMG_2502.jpeg", price: "₹750" },
  { name: "CHOCOLATE TRESLECHES", image: "https://www.hersheyfoodservice.com/content/dam/hershey-foodservice/images/recipes/upscaled/Image-of-HERSHEYS-Syrup-Milk-Chocolate-Tres-Leches-Cake.jpg", price: "₹900" },
  { name: "MANGO CHOCOLATE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oNWFHs-YKAPBRZbippX8j7sO5_dy6iLb_Q&s", price: "₹900" },
  { name: "CHOCO VELVET", image: "https://flouringkitchen.com/wp-content/uploads/2022/12/BW1A9054-2.jpg", price: "₹900" },
  { name: "WHITE FOREST", image: "https://preppykitchen.com/wp-content/uploads/2024/02/White-Cake-Feature.jpg", price: "₹600" },
{ name: "BLACK FOREST", image: "https://www.shysha.in/wp-content/uploads/2022/01/Black-Forest-Circle.jpg", price: "₹600" },
{ name: "MILKY VELVET", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6VesVRZoL-plR5NXK8IURwSwPt8r8BX_UwxxRl1M_0RFAbTlabDvTmFPtDt_0h9Ga0o&usqp=CAU", price: "₹900" },
{ name: "BUTTERSCOTCH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVqPRJH0OVCod4h3mNOwp7Gblrnbf8_BH7A&s", price: "₹850" },
{ name: "CARAMEL", image: "https://cookswithsoul.com/wp-content/uploads/2024/03/caramel-cake-recipe-10-scaled.jpg", price: "₹850" },
{ name: "PISTACHIO", image: "https://www.themediterraneandish.com/wp-content/uploads/2024/11/Pistachio-Cake-Lead-6-Edited.jpg", price: "₹850" },
{ name: "CHOCO NUT", image: "https://selfiefamily.com/wp-content/uploads/2021/04/Choco-Nuts-Cake.jpg", price: "₹850" },
{ name: "NUTTY BUBBLE", image: "https://5.imimg.com/data5/MI/LO/RN/GLADMIN-40438996/nutty-bubble-cream-cake-1-kg.jpg", price: "₹900" },
{ name: "HONEY ALMOND", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay870BTdZETc22SNlE3XSqvx_eAy2gbZ7hg&s", price: "₹900" },
{ name: "VANCHO", image: "https://thefridaycake.com/wp-content/uploads/2024/06/Vancho.jpg", price: "₹900" },
{ name: "NEAPOLITAN", image: "https://www.sweetestmenu.com/wp-content/uploads/2019/05/neapolitancake15a.jpg", price: "₹900" },
{ name: "CHOCO BERRY", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhkxTOAw0YfF_fKnhefvZkrdkD6ePoLRMpg&s", price: "₹850" },
{ name: "RED BERRY", image: "https://thecakegirls.com/wp-content/uploads/2024/12/Red-Berry-Chocolate-Mousse-Cake.jpg", price: "₹850" },
{ name: "PINEAPPLE", image: "https://ocakes.in/storage/app/public/images/item/item-642f49b635093.jpg", price: "₹750" },
{ name: "STRAWBERRY", image: "https://www.piesandtacos.com/wp-content/uploads/2024/05/Strawberry-Cake-6-scaled.jpg", price: "₹750" },
{ name: "MANGO", image: "https://thebakeshopindia.com/cdn/shop/files/48.jpg?v=1685278628", price: "₹750" },
{ name: "ORANGE", image: "https://www.ourhappymess.com/wp-content/uploads/2024/12/Orange-Layer-Cake-square-featured.jpg", price: "₹750" },
{ name: "CHOCOLATE TRUFFLE", image: "https://magicbakers.in/wp-content/uploads/2024/03/ChocolateTruffleCake.jpg", price: "₹850" },
{ name: "ORANGE TRUFFLE", image: "https://www.gretchensveganbakery.com/wp-content/uploads/2018/11/orange-tart-feature-resized-1.jpg", price: "₹850" },
{ name: "WHITE TRUFFLE", image: "https://5.imimg.com/data5/ECOM/Default/2022/5/SU/UE/ZH/82142791/buttor-skoch-20-09tn7qn25.jpg", price: "₹850" },
{ name: "SPANISH DELIGHT", image: "https://theoven.in/wp-content/uploads/2023/02/spanish-delight-.png", price: "₹850" },
{ name: "KUNAFA PISTACHIO CHOCOLATE", image: "https://prd-upmarket.s3.ap-south-1.amazonaws.com/AA0013/raw/ar1x1/1kgikpstyled.jpg", price: "₹1400" },
{ name: "KULFI CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9HjvHG1YCpchbtPEF4QtWxiIi1jin8jIlQ&s", price: "₹900" },
{ name: "TENDER COCONUT", image: "https://i0.wp.com/thefreshlymade.com/wp-content/uploads/2021/03/TFMGN399S.jpg?fit=1100%2C1100&ssl=1", price: "₹1100" },
{ name: "CHOCO DELIGHT", image: "https://www.flaberry.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fflaberry%2Fmedia%2Fcatalog%2Fproduct%2Fc%2Fh%2Fchocolate_cake_12.jpg&w=1080&q=75", price: "₹850" },
{ name: "OREO CAKE", image: "https://recipesbyclare.com/cdn-cgi/image/fit=cover,width=1280,height=1280,format=auto/assets/images/1737386415385-6nwyowp1.webp", price: "₹900" },
{ name: "CHOCOLATE TRES LECHES", image: "https://www.hersheyfoodservice.com/content/dam/hershey-foodservice/images/recipes/upscaled/Image-of-HERSHEYS-Syrup-Milk-Chocolate-Tres-Leches-Cake.jpg", price: "₹900" },
{ name: "PISTACHIO TRES LECHES", image: "https://addictedtodates.com/wp-content/uploads/2024/11/vegan-pistachio-tres-leches.jpg", price: "₹900" },
{ name: "ROSE MILK TRES LECHES", image: "https://healthy.moonbakes.co.in/wp-content/uploads/2023/04/Vegan-Rosemilk-Tres-leche.jpg", price: "₹900" },
{ name: "MOCHA", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mocha-Cake_EXPS_FT22_33916_ST_08_12_1.jpg", price: "₹850" },
{ name: "DALGONA COFFEE", image: "https://thehappyfoodie.co.uk/wp-content/uploads/2022/08/Nadiya-Hussain-Coffee-Cake-with-Dalgona-Coffee-Cream-Everyday-Baking-BBC-2-777x1024.jpg", price: "₹900" },
{ name: "IRISH COFFEE", image: "https://www.allrecipes.com/thmb/i1pTL2AkJLprcsROXUKTmYsWGpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7809239-ae9195aaa94d4a95bbbe824334f72210.jpg", price: "₹900" },
{ name: "CASSATA CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75LxO_Fed2CTg3zQL_Fnud7dpPm7e4veJdfxRQz0ZalgSRL0mcPHeNt4adYgul-eUdeU&usqp=CAU", price: "₹1400" },
{ name: "FERRERO ROCHER", image: "https://thescranline.com/wp-content/uploads/2022/12/FERRERO-ROCHER-CAKE-S-01.jpg", price: "₹1200" },
{ name: "LOTUS BISCOFF", image: "https://www.rainbownourishments.com/wp-content/uploads/2024/05/vegan-biscoff-cake-1.jpg", price: "₹1400" },
{ name: "CHOCO CARAMEL", image: "https://daniscookings.com/wp-content/uploads/2024/01/Chocolate-Caramel-Cake-19.jpg", price: "₹900" },
{ name: "CHOCO ORANGE", image: "https://stylesweet.com/wp-content/uploads/2023/09/ChocolateOrangeCake_featured.jpg", price: "₹900" },
{ name: "DULCE DE LECHE CAKE", image: "https://tastesbetterfromscratch.com/wp-content/uploads/2024/05/Dulce-de-Leche-Cake24-1.jpg", price: "₹900" },
{ name: "CUSTARD CAKE", image: "https://kitchenconfidante.com/wp-content/uploads/2012/02/Custard-Cake-Kitchen-Confidante-21.jpg", price: "900" },
{ name: "FRESH FRUIT CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCM2xQEKiu1qCO9B5puGsncaEVsS00ZsQPhA&s", price: "₹1000" },
{ name: "DREAM CAKE CHOCOLATE (NORMAL)", image: "https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9244-scaled.jpg", price: "1000" },
{ name: "DREAM CAKE CHOCOLATE (PREMIUM)", image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-indulgent-choco-dream-cake-285071-m.jpg", price: "1300" },
{ name: "TENDER COCONUT DREAM CAKE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7o9yAOURAXFKdTJOPJwiDz5zjseJ8Z-5jqQ&s", price: "₹1200" },
{ name: "PLUM CAKE", image: "https://assetdo1.urbandart.com/1561639741347.png", price: "₹400" },
{ name: "CLASSIC BROWNIE", image: "https://amandacooksandstyles.com/wp-content/uploads/2021/05/20210517_125712-500x500.jpg", price: "₹800" },
{ name: "TRIPLE CHOCOLATE BROWNIE", image: "https://img.thecdn.in/330116/WhatsAppImage2024-11-28at72859PM-1732933522039.jpeg?format=webp", price: "₹1000" },
{ name: "KINDER BLONDIE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_BeGfXgnjTymEOeWnHl1_1O8DbyzQs09_Q&s", price: "₹1100" },
{ name: "RED VELVET CHEESE BROWNIE", image: "https://www.justataste.com/wp-content/uploads/2013/02/best-red-velvet-cheesecake-brownies-2022.jpg", price: "₹1000" },
{ name: "PISTACHIO KUNAFA BROWNIE", image: "https://i0.wp.com/strawberryinthedesert.com/wp-content/uploads/2024/08/Pistachio-Kunafa-Brownie.jpg?resize=750%2C938&ssl=1", price: "₹1400" },
{ name: "CHOCO PISTACHIO TUB", image: "https://sugarwhipped.com.au/wp-content/uploads/2025/03/IMG_1035-scaled.jpeg", price: "₹1400" },
{ name: "WEDDING CAKES", image: "https://www.chokola.in/pub/media/catalog/product/cache/8913e99aadde0a1b971244e9cae421cf/w/h/white_rose_flower_cake.jpg", price: "depends" }
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
      <h1 style={{ color: '#d63384', fontSize: '2.5rem', marginBottom: '20px' }}>🍰 DESSERT DUST</h1>

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
  const whatsappNumber = "+919747529344";
  const message = `Hello! I'd like to place an order for ${decodedName}

  Number of cakes:  
  Cake weight in kg :  
  Custom Message on Cake:  
  Delivery Date & Time:
  Delivery Address: 
  Contact Number: 

  ⚠️PERFORM HALF PAYMENT IN ADVANCE TO CONFIRM THE ORDER

  THANKYOU!!`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace(/\D/g, '')}&text=${encodedMessage}`;


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
