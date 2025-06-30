import React from 'react';
import './FeatureProduct.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
function FeatureProduct() {
  return (
    <>
      <div className="featureProduct">
        <div className="productTitle">
          <div className="sneakerTitle">SNEAKER</div>
          <div className="featureTitle">
            <h3>featured</h3>
            <p>Products</p>
          </div>
        </div>

        <div className="prodSec">
          <div className="prod">
            <ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19974108/2022/9/16/3c53a739-70fe-4efd-b5f1-721179b9a9371663274343146RoadsterMensWhiteFauxLeatherFormalLaceUpSneakers1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 7999'}
              rating={'4'}
            />
            <ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19998832/2022/9/16/e2085dc0-e624-4644-b574-0e9cac3b0c351663338634736RoadsterMensRedFauxLeatherCasualLaceUpSneakers1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 6999'}
              rating={'5'}
            />
            <ProductItem
              url={
                'https://assets.ajio.com/medias/sys_master/root/20241014/7Rv0/670ce8a3260f9c41e875bc92/-473Wx593H-467216065-white-MODEL.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 8999'}
              rating={'4'}
            />
            <ProductItem
              url={
                'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19320964/2022/7/30/5061e18a-e7c3-49e4-86af-985e2bb62a1e1659190916490SportsShoes1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 5999'}
              rating={'2'}
            />
          </div>
        </div>

        <div className="productTitle">
          <div className="sneakerTitle">Product</div>
          <div className="featureTitle">
            <h3>best seller</h3>
            <p>Products</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;
