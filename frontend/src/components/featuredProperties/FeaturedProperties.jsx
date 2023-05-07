import React from 'react'
import { Link } from 'react-router-dom'
import classes from './featuredProperties.module.css'
import img1 from '../../assets/plot_img.jpg'
import img3 from '../../assets/flats_img.jpg'
import img4 from '../../assets/shop.jpg'
import img2 from '../../assets/realestatecountryside.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'


const FeaturedProperties = () => {
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
          <h2>Featured Plot properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=plot&location=0&priceRange=1`} className={classes.property}  >
            <img src={img1} alt="plot images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=plot&location=1&priceRange=1`} className={classes.property}>
            <img src={img1} alt="house images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=plot&location=2&priceRange=1`} className={classes.property}>
            <img src={img1} alt="flat images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=plot&location=3&priceRange=1`} className={classes.property}>
            <img src={img1} alt="shop images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
        </div>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Flat properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=flat&location=0&priceRange=1`} className={classes.property}  >
            <img src={img3} alt="flat images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=flat&location=1&priceRange=1`} className={classes.property}>
            <img src={img3} alt="flat images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=flat&location=2&priceRange=1`} className={classes.property}>
            <img src={img3} alt="flat images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=flat&location=3&priceRange=1`} className={classes.property}>
            <img src={img3} alt="flat images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
        </div>
      </div>
      
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured House properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=house&location=0&priceRange=1`} className={classes.property}  >
            <img src={img2} alt="house images"/>
            <div className={classes.quantity}></div>
            {/* <h5>Plots</h5> */}
          </Link>
          <Link to={`/properties?type=house&location=1&priceRange=1`} className={classes.property}>
            <img src={img2} alt="house images"/>
            <div className={classes.quantity}></div>
            {/* <h5>Houses</h5> */}
          </Link>
          <Link to={`/properties?type=house&location=2&priceRange=1`} className={classes.property}>
            <img src={img2} alt="house images"/>
            <div className={classes.quantity}></div>
            {/* <h5>Flats</h5> */}
          </Link>
          <Link to={`/properties?type=house&location=3&priceRange=1`} className={classes.property}>
            <img src={img2} alt="house images"/>
            <div className={classes.quantity}></div>
            {/* <h5>Shops</h5> */}
          </Link>
        </div>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Shop properties for you</h2>
        </div>
        <div className={classes.properties}>
          <Link to={`/properties?type=shop&location=0&priceRange=1`} className={classes.property}  >
            <img src={img4} alt="shop images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=shop&location=1&priceRange=1`} className={classes.property}>
            <img src={img4} alt="shop images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=shop&location=2&priceRange=1`} className={classes.property}>
            <img src={img4} alt="shop images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
          <Link to={`/properties?type=shop&location=3&priceRange=1`} className={classes.property}>
            <img src={img4} alt="shop images"/>
            <div className={classes.quantity}></div>
            {/* <h5></h5> */}
          </Link>
        </div>
      </div>

    </div>
  )
}

export default FeaturedProperties