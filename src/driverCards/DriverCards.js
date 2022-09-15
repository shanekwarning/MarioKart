import React from "react";
import './DriverCards.css'

const DriverCards = ({ driverData }) => {
    console.log(driverData)
    let drivers;

    drivers = driverData ? driverData.map(driver => {
        return (< div className="drivers">
            <p>{driver.name}</p>
        </div >)
    }) : ''

    return (
        < div className="driver-box" >
            {drivers}
        </div >
    )

}

export default DriverCards