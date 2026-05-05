function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
      <div className="product-card-body">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">{product.rating.toFixed(1)}</span>
        </div>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">Rs.{product.price.toFixed(2)}</span>
          <button className="product-button" type="button" onClick={() => onAdd(product.name)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
