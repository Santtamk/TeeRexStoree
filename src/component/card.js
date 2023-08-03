import React from "react";
import './card.css'


 const Card = ({product, handleClick})  => {

   
    return(

            <div className="card rounded shadow-sm border-0" style={{width: '15rem'}}>
                <img className="img-thumbnail" src={product.imageURL} alt={product.name}/>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{product.name}</h5>
                        <h6 className="card-title">{product.currency} {product.price}</h6>
                    </div>
                    <button className="btn btn-dark" onClick={() => handleClick(product)}>Add to cart</button>
                </div>
            </div>
    )
}

export default Card;