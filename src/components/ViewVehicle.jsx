import axios from 'axios'

import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewVehicle= () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:3000/view-veh").then(

            (response) => {

                changeData(response.data)

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect (
        () => {
            fetchData()
        },[]
    )


return (
    <div>
      <NavigationBar/>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Booking ID</th>
                    <th scope="col">Owner Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">veh Reg NO</th>
                    <th scope="col">Vehicle Brand</th>
                    <th scope="col">Vehicle Model</th>
                    <th scope="col">Battery Capacity</th>
                    <th scope="col">Connector Type</th>
                    <th scope="col">Charging date</th>
                    <th scope="col">Time Slot</th>
                    <th scope="col">estimated Units</th>
                    <th scope="col">Charging Bayno</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (value, index )=> {
                        return (
                            <tr>
                                
                                <td>{value.bookingid}</td>
                                <td>{value.ownername}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.vehicleregno}</td>
                                <td>{value.vehiclebrand}</td>
                                <td>{value.vehiclemodel}</td>
                                <td>{value.batterycapacity}</td>
                                <td>{value.connectortype}</td>
                                <td>{value.chargingdate}</td>
                                <td>{value.timeslot}</td>
                                <td>{value.estimatedunits}</td>
                                <td>{value.chargingbayno}</td>

                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
    </div>
)
}



export default ViewVehicle
