import './ProductItem.css';

function ProductItem({url, name , price ,rating }) {
     const totalStars = 5;
  return (
    <div>
       <div className="prodItem">
              <img
                src={url}  alt=""
              />
              <h4>{name}</h4>
               
        <span>
          {Array.from({ length: totalStars }, (_, i) => (
            <span
              key={i}
              className={`fa fa-star ${i < rating ? 'checked' : ''}`}
            ></span>
          ))}
        </span>
              {/* <span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </span> */}
              <span>{price}</span>
            </div>
    </div>
  )
}

export default ProductItem
