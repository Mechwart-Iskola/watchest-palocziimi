
import { useEffect, useState } from 'react'
import './featured.css'

import FeatureCard, { Feature } from './featuredCard/FeatureCard'

{/* Fetcheld be az adatokat a featured jsonból és jelenítsd meg a featured_container elemből*/}

{/* Állítsd be a featured.css-ben, hogy az órák 992px szélesség alatt egymás alá kerüljenek afölött pedig egymás mellé */}


const Featured = () => {

  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    fetch("featured.json")
    .then(res => res.json())
    .then(res => setFeatures(res))
  }, [])
  

  return (
    <section className="featured" id="featured">
    <h2 className="feature__title">Featured</h2>
    <div className="featured__container">
            {/* feauterd watches */}
            {features.map(f => <FeatureCard key={f.image} {...f} />)}
    </div>
</section>
  )
}

export default Featured