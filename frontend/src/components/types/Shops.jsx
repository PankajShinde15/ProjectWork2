import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { request } from '../../util/fetchAPI'
import classes from './plots.module.css'
import PropertyCard from '../propertyCard/PropertyCard'

const Listings = ()=>{

  const [listedProperties, setListedProperties] = useState([])
  

  useEffect(() => {
    const fetchListedProperties = async () => {
        try {
            const data = await request(`/property/find?type=shop`, 'GET')
            setListedProperties(data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchListedProperties()
})

return(

  <div>

    <div className={classes.properties}>
      {listedProperties?.length > 0 ? listedProperties?.map((property) => (
      <PropertyCard key={property._id} property={property}/>
      )) : <h2 className={classes.noListed}>You have no listed properties</h2>}
                            </div>

  </div>
)

}
export default Listings;