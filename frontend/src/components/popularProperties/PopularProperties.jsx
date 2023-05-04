import React from 'react'
import { Link } from 'react-router-dom'
import classes from './popularProperties.module.css'
import img1 from '../../assets/realestatebeach.jpg'
import img2 from '../../assets/realestatemountain.jpg'
import img3 from '../../assets/realestatecountryside.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'

const PopularProperties = () => {
  const [Plot, setPlotProperties] = useState(0)
  const [House, setHouseProperties] = useState(0)
  const [Flat, setFlatProperties] = useState(0)
  const [Shop, setShopProperties] = useState(0)

  useEffect(() => {
    const fetchPropertiesNumber = async() => {
      try {
         const data = await request('/property/find/types', 'GET')

         setPlotProperties(data.plot)
         setHouseProperties(data.house)
         setFlatProperties(data.flat)
         setShopProperties(data.shop)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesNumber()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Different types of properties</h5>
          <h2>Best type of properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=plot&location=0&priceRange=1`} className={classes.property}  >
            <img src={img1} alt="plot images"/>
            <div className={classes.quantity}>{Plot} properties</div>
            <h5>Plots</h5>
          </Link>
          <Link to={`/properties?type=house&location=1&priceRange=1`} className={classes.property}>
            <img src={img2} alt="house images"/>
            <div className={classes.quantity}>{House} properties</div>
            <h5>Houses</h5>
          </Link>
          <Link to={`/properties?type=flat&location=2&priceRange=1`} className={classes.property}>
            <img src={img3} alt="flat images"/>
            <div className={classes.quantity}>{Flat} properties</div>
            <h5>Flats</h5>
          </Link>
          <Link to={`/properties?type=shop&location=3&priceRange=1`} className={classes.property}>
            <img src={img3} alt="shop images"/>
            <div className={classes.quantity}>{Shop} properties</div>
            <h5>Shops</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularProperties