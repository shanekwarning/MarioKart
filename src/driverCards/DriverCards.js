import React from "react";

const DriverCards = ({ driverData }) => {
    console.log(driverData)
    let drivers;

    drivers = driverData ? driverData.map(driver => {
        return (< div >
            <p>{driver.name}</p>
        </div >)
    }) : ''

    return (
        < div >
            {drivers}
        </div >
    )

}

export default DriverCards