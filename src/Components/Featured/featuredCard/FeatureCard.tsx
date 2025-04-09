import './featurecard.css'


{/*Hozz létre egy típust ami alklmas a feature.json adatainak tárolására */}

export type Feature = {
  image: string,
  title: string,
  price: number
}

{/*Egészítsd ki a komponenst a megfelelő props-ok használatával */}

const FeatureCard = ({image, title, price}:Feature) => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src={image} alt="" className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title">{title}</h3>
            <span className="featured__price">${price}</span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard