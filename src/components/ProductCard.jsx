export function ProductCard() {
  return (
    <div className="ps-productCard">
      <div className="ps-productCard-img-container">
        <img
          src="src/assets/macbookPro.png"
          alt="Imagen del producto"
          className="ps-productCard-img"
        />
      </div>
      <div className="ps-productCard-details">
        
        <h3 className="ps-productCard-price">
           $1500</h3>
        <header className="ps-productCard-description">
          Macbook pro 16 inches
        </header>

      </div>

      <div className="ps-productCard-actions">
        <div className="ps-productCard-productRate"> 5 stars </div>
        <button className="ps-productCard-buyButton"> Buy Item </button>
      </div>
    </div>
  );
}
