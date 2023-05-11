import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaBed, FaSquareFull } from 'react-icons/fa'
import { request } from '../../util/fetchAPI'
import person from '../../assets/person.jpg'
import classes from './listings.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Listings = ()=>{

  const [listedProperties, setListedProperties] = useState([])
  const { user, token } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchListedProperties = async () => {
        try {
            const options = {
                Authorization: `Bearer ${token}`
            }
            const data = await request(`/property/find/my-properties`, 'GET', options)
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
      {listedProperties?.length > 0 ? listedProperties?.map((listedProperty) => (
      <div key={listedProperty._id} className={classes.property}>
        <Link to={`/propertyDetail/${listedProperty._id}`} className={classes.imgContainer}>
            <img src={`http://localhost:5000/images/${listedProperty?.img}`} alt="" />
        </Link>
      <div className={classes.details}>
        <div className={classes.priceAndOwner}>
                                                <span className={classes.price}>$ {listedProperty.price}</span>
                                                <img src={user?.profileImg ? `http://localhost:5000/images/${user?.profileImg}` : person} className={classes.owner} alt="profileImg" />
                                            </div>
                                            <div className={classes.moreDetails}>
                                                <span>{listedProperty?.beds} <FaBed className={classes.icon} /></span>
                                                <span>{listedProperty?.sqmeters} sq. meters<FaSquareFull className={classes.icon} /></span>
                                            </div>
                                            <div className={classes.desc}>
                                                {listedProperty?.decs}
                                            </div>
                                        </div>
                                    </div>
                                )) : <h2 className={classes.noListed}>You have no listed properties</h2>}
                            </div>

  </div>
)

}
export default Listings;