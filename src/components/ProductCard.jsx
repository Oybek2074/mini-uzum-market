function ProductCard({ product, quantity, onIncrease, onDecrease }) {
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={product.image}
        alt={product.title}
      />

      <h3 className="product-title">{product.title}</h3>

      <p className="product-price">{product.price} $</p>

      {quantity === 0 ? (
        <button className="add-button" onClick={() => onIncrease(product)}>
          Savatga qo‘shish
        </button>
      ) : (
        <div className="quantity-controls">
          <button
            className="qty-button"
            onClick={() => onDecrease(product.id)}
          >
            -
          </button>

          <span className="qty-value">{quantity}</span>

          <button
            className="qty-button"
            onClick={() => onIncrease(product)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;