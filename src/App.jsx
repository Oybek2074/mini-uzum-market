import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import ProductGrid from "./components/ProductGrid";
import Toast from "./components/Toast";
import fallbackProducts from "./data/fallbackProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [notice, setNotice] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("API javobi muvaffaqiyatsiz");
        }

        const data = await res.json();
        setProducts(data);
        setNotice("");
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
        setProducts(fallbackProducts);
        setNotice(
          "Fake Store API vaqtincha ishlamayapti. Hozircha test mahsulotlari ko‘rsatildi."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!toastMessage) return;

    const timeout = setTimeout(() => {
      setToastMessage("");
    }, 2200);

    return () => clearTimeout(timeout);
  }, [toastMessage]);

  const handleIncreaseQuantity = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    setToastMessage("Mahsulot savatga qo‘shildi");
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    setToastMessage("Savat tozalandi");
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((cartItem) => cartItem.id === productId);
    return item ? item.quantity : 0;
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = useMemo(() => {
    return ["Barchasi", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const categoryLabels = {
    "men's clothing": "Erkaklar kiyimi",
    "women's clothing": "Ayollar kiyimi",
    jewelery: "Zargarlik buyumlari",
    electronics: "Elektronika",
    Barchasi: "Barchasi",
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Barchasi" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header cartCount={cartCount} onClearCart={handleClearCart} />

      <main className="main">
        <Controls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          categoryLabels={categoryLabels}
        />

        {notice && <p className="notice-text">{notice}</p>}

        {!loading && (
          <p className="status-text">
            Topilgan mahsulotlar: {filteredProducts.length}
          </p>
        )}

        {loading ? (
          <p className="status-text">Yuklanmoqda...</p>
        ) : filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            getProductQuantity={getProductQuantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        ) : (
          <p className="status-text">Hech qanday mahsulot topilmadi</p>
        )}
      </main>

      <Toast message={toastMessage} />
    </div>
  );
}

export default App;