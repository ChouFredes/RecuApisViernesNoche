import React from "react";
import "./css/ProductPresentation.css"

export function ProductPresentation({product}) {
    return(
        <div className="ps-productPresentation">
            <img className="ps-productPresentation-img" src={product.image} alt={product.name} />
            <aside className="ps-productPresentation-info">
                <h1 className="ps-productPresentation-title"> {product.name} </h1>
                <h2 className="ps-productPresentation-description"> {product.description} </h2>
                <button> Agregar al carrito </button>
            </aside>



        </div>
    )
}