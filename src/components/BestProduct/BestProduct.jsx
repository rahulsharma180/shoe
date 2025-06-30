import React from 'react'
import './BestProduct.css';
import ProductItem from '../ProductItem/ProductItem';
function BestProduct() {
  return (
    <div className='bestproduct'>
        <div className="best">
        <div className="right">   <ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19998832/2022/9/16/e2085dc0-e624-4644-b574-0e9cac3b0c351663338634736RoadsterMensRedFauxLeatherCasualLaceUpSneakers1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 6999'}
              rating={'5'}
            /></div>
        <div className="left"> 
           <ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19974108/2022/9/16/3c53a739-70fe-4efd-b5f1-721179b9a9371663274343146RoadsterMensWhiteFauxLeatherFormalLaceUpSneakers1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 7999'}
              rating={'4'}
            /><ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/JULY/29/6xDjrKNT_1c000df180b841b690cd7ac98984e554.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 9999'}
              rating={'5'}
            />
            <ProductItem
              url={
                'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19998832/2022/9/16/e2085dc0-e624-4644-b574-0e9cac3b0c351663338634736RoadsterMensRedFauxLeatherCasualLaceUpSneakers1.jpg'
              }
              name={'White Sneaker'}
              price={'₹ 6999'}
              rating={'4'}
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
            
            <ProductItem
              url={
                'https://assets.myntassets.com/h_580,q_90,w_500/v1/assets/images/29859283/2024/5/31/82f9513f-cd1e-484a-84c9-4b9041ce49fe1717131785185ASIANMenColourblockedSneakers1.jpg '
              }
              name={'White Sneaker'}
              price={'₹ 7999'}
              rating={'5'}
            />
            
            </div>
        </div>


    </div>
  )
}

export default BestProduct
