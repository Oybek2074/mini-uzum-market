function Header({ cartCount, onClearCart }) {
  return (
    <header className="header">
      <h1 className="title">Mini Uzum Market</h1>

      <div className="header-actions">
        <p className="cart">Savat: {cartCount}</p>
        <button
          className="clear-cart-button"
          onClick={onClearCart}
          disabled={cartCount === 0}
        >
          Savatni tozalash
        </button>
      </div>
    </header>
  );
}

export default Header;