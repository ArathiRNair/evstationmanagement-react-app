import axios from 'axios'
import { useState } from 'react'
import NavigationBar from './NavigationBar'


const AddVehicle= () => {
    const [input, changeInput] = useState(
         {
        bookingid:"",
        ownername:"",
        email:"",
        phone:"",
        vehicleregno:"",
        vehiclebrand:"",
        vehiclemodel:"",
        batterycapacity:"",
        connectortype:"",
        chargingdate:"",
        timeslot:"",
        estimatedunits:"",
        chargingbayno:""
    }

    )

const inpuHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:3000/add-veh",input).then(
        (response)=>{
            alert("Volunteer added successfully")
        }
    ).catch(
        (error)=>{
            console.error("Error adding Volunteer",error)
            alert("failed to add Volunteer")
        }
    )
    
}


    return (
        <div>
<NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Booking ID</label>
                                <input 
                                name="bookingid"
                                value={input.bookingid}
                                onChange={inpuHandler}
                                type="text" className="form-control"
                                 />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Owner Name</label>
                                <input 
                                name="ownername"
                                value={input.ownernamename}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input 
                                name="email"
                                value={input.email}
                               onChange={inpuHandler}
                                
                                type="email" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input
                                name="phone"
                                value={input.phone}
                                onChange={inpuHandler}
                                
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">veh Reg NO</label>
                                <input 
                                name="vehicleregno"
                                value={input.vehicleregno}
                               onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vehicle Brand</label>
                                <input 
                                name="vehiclebrand"
                                value={input.vehiclebrand}
                                onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Vehicle Model</label>
                                <input 
                                name="vehiclemodel"
                                value={input.vehiclemodel}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                               <label htmlFor="" className="form-label">Battery Capacity</label>
                                <input 
                                name="batterycapacity"
                                value={input.batterycapacity}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Connector Type</label>
                                <input 
                                name="connectortype"
                                value={input.connectortype}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Charging date</label>
                                <input
                                name="chargingdate"
                                value={input.chargingdate}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Time Slot</label>
                                <input
                                name="timeslot"
                                value={input.timeslot}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">estimated Units</label>
                                <input
                                name="estimatedunits"
                                value={input.estimatedunits}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Charging Bayno</label>
                                <input
                                name="chargingbayno"
                                value={input.chargingbayno}
                                onChange={inpuHandler}
                                type="number" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVehicle