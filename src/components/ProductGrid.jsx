import ProductCard from "./ProductCard";

function ProductGrid({ products, getProductQuantity, onIncrease, onDecrease }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={getProductQuantity(product.id)}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
}

export default ProductGrid;