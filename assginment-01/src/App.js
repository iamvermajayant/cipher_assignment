import "./App.css";
import Product from "./Components/Product";

const productItem = [
  {
    productTitle: "Iphone",
    productImage: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX522_.jpg",
    price: "1.2Lakh",
  },
  {
    productTitle: "laptop",
    productImage: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX522_.jpg",
    price: "1.2Lakh",
  },
  {
    productTitle: "samsung ",
    productImage: "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX522_.jpg",
    price: "1.2Lakh",
  },
];

function App() {
  return (
    <div className="App">
      <Product productItem = {productItem}/>
    </div>
  );
}

export default App;
