
// import CarApi from '../apis/CarApi';

import React, { useState } from 'react';
import AddCarApi from '../apis/AddCarApi';



const Sell = props => {

    const [vin, setVin] = useState('0')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [year, setYear] = useState('0')
    const [color, setColor] = useState('')
    const [mileage, setMileage] = useState('0')
    const [price, setPrice] = useState('0')

    const handleRegister = (event) => {
        const car = {
            "vin": vin,
            "make": make,
            "model": model,
            "vehicle_type": type,
            "vehicle_year": year,
            "color": color,
            "mileage": mileage,
            "price": price,
        }

        AddCarApi.addCars(car)

        setVin(0)
        setMake('')
        setModel('')
        setType('')
        setYear(0)
        setColor('')
        setMileage(0)
        setPrice(0)
        event.preventDefault();


    }



    return (
        <div style={{ border: "1px white solid", padding: "15px", margin: "15px" }}>



            <form onSubmit={handleRegister}>
                <h3>Sell Your Car</h3>
                <div className="mb-3">
                    <label>Vehicle Identification Number: </label>
                    <input type="text" className="form-control" placeholder="Enter VIN" onChange={(event) => { setVin(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Make: </label>
                    <input type="text" className="form-control" placeholder="Enter Car Make" onChange={(event) => { setMake(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Model: </label>


                    <input type="text" className="form-control" placeholder="Last Car Model" onChange={(event) => { setModel(event.target.value) }} />

                </div>

                <div className="mb-3">
                    <label>Vehicle Type: </label>
                    <input type="text" className="form-control" placeholder="Enter Car Type" onChange={(event) => { setType(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Vehicle Year: </label>
                    <input type="text" className="form-control" placeholder="Enter Car Year" onChange={(event) => { setYear(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Color: </label>
                    <input type="text" className="form-control" placeholder="Enter Car Color" onChange={(event) => { setColor(event.target.value) }} />
                </div>

                <div className="mb-3">
                    <label>Mileage: </label>


                    <input type="text" className="form-control" placeholder="Last Car Mileage" onChange={(event) => { setMileage(event.target.value) }} />

                </div>
                <div className="mb-3">
                    <label>Price: </label>
                    <input type="text" className="form-control" placeholder="Selling Price" onChange={(event) => { setPrice(event.target.value) }} />
                </div>
                <div className="d-grid">


                    <button type="submit" className="btn btn-success">

                        Register Vehicle
                    </button>
                </div>








            </form>
        </div>


    );
};



export default Sell;
