import React from 'react';
import { useSelector } from 'react-redux';

const Card = () => {
  const selectData = (state) => state.product;
  const productsObject = useSelector(selectData);
  const prd = productsObject.CardProduct;
  console.log(prd);

  return (
    <div className="card-container" style={{ display: 'flex', overflowX: 'auto'}}>
      <div className="card-row" style={{ display: 'flex', flexWrap: 'nowrap', gap: '10px' }}>
        {prd.map((product) => (
          <div key={product.id} className='card' style={{ width:'190px' }}>
            <img
              className='product-img'
              src={product.src}
              alt={`Product: ${product.name}`}
            />
            <h2>{product.name}</h2>
            <p className='price'>{product.price}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
