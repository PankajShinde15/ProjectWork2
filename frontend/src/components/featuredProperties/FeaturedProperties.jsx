import React from 'react'
import classes from './featuredProperties.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../util/fetchAPI'
import PropertyCard from '../propertyCard/PropertyCard'


const FeaturedProperties = ({ property }) => {
  const [allPlot, setPlot] = useState([])
  const [allFlat, setFlat] = useState([])
  const [allShop, setShop] = useState([])
  const [allHouse, setHouse] = useState([])


  useEffect(() => {
    const fetchAllProperties = async() => {
      const flatData = await request(`/property/find/featured/flat`, 'GET')
      setFlat(flatData)

      const plotData = await request(`/property/find/featured/plot`, 'GET')
      setPlot(plotData)

      const houseData = await request(`/property/find/featured/house`, 'GET')
      setHouse(houseData)

      const shopData = await request(`/property/find/featured/shop`, 'GET')
      setShop(shopData)
    }
    fetchAllProperties()
  }, [])



  return (
    <div className={classes.container}>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Flats properties for you</h2>
        </div>
        <div className={classes.properties}>
        {allFlat?.length > 0 ?
            <>
  
              <div className={classes.properties}>
                {allFlat.map((property) => (
                  <PropertyCard key={property._id} property={property}/>
                ))}
              </div>
            </> : <h2 className={classes.noProperty}>We have no properties with the specified options.</h2>}
        </div>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Houses properties for you</h2>
        </div>
        <div className={classes.properties}>
          {allHouse?.length > 0 ?
            <>
  
              <div className={classes.properties}>
                {allHouse.map((property) => (
                  <PropertyCard key={property._id} property={property}/>
                ))}
              </div>
            </> : <h2 className={classes.noProperty}>We have no properties with the specified options.</h2>}
        </div>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Plot properties for you</h2>
        </div>
        <div className={classes.properties}>
          {allPlot?.length > 0 ?
            <>
  
              <div className={classes.properties}>
                {allPlot.map((property) => (
                  <PropertyCard key={property._id} property={property}/>
                ))}
              </div>
            </> : <h2 className={classes.noProperty}>We have no properties with the specified options.</h2>}
        </div>
      </div>

      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h2>Featured Shops for you</h2>
        </div>
        <div className={classes.properties}>
          {allShop?.length > 0 ?
            <>
  
              <div className={classes.properties}>
                {allShop.map((property) => (
                  <PropertyCard key={property._id} property={property}/>
                ))}
              </div>
            </> : <h2 className={classes.noProperty}>We have no properties with the specified options.</h2>}
        </div>
      </div>

    </div>
  )
}

export default FeaturedProperties