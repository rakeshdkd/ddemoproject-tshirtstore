import Input from "./components/Input";
import Header from "./components/header";
import CartProvider from "./components/CartProvider";
function App() {
  return (
    <CartProvider>
      <Header />
      <Input />
    </CartProvider>
  );
}

export default App;
