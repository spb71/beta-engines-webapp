import React, { useEffect, useState } from 'react';
import CarApi from '../apis/CarApi';


const ViewCars = props => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        CarApi.getCars(setCars)
    }, [])
<<<<<<< Updated upstream
    return (
        <div>

            <h2 className='display-4'>Available Cars for Sale</h2>

            <table className='table' style={{ color: "white", width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Year</th>
                        <th>Color</th>
                        <th>Mileage</th>
                        <th>Price</th>
                    </tr>

                </thead>

                <tbody>
                    {
                        cars.map(c =>
                            <tr>
                                <td>{c.make}</td>
                                <td>{c.model}</td>
                                <td>{c.vehicle_type}</td>
                                <td>{c.vehicle_year}</td>
                                <td>{c.color}</td>
                                <td>{c.mileage}</td>
                                <td>{c.price}</td>
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
=======
return (
    <div>

        <h2 className='display-4'>Available Cars for Sale</h2>

        <table className='table' style={{ color: "white", width: "70%", margin: "auto" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Vehicle Type</th>
                    <th>Vehicle Year</th>
                    <th>Color</th>
                    <th>Mileage</th>
                    <th>Price</th>
                </tr>

            </thead>

            <tbody>
                {
                    cars.map((c, i) =>
                        <tr>
                            <td key={i}>{c.car_id}</td>
                            <td>{c.make}</td>
                            <td>{c.model}</td>
                            <td>{c.vehicle_type}</td>
                            <td>{c.vehicle_year}</td>
                            <td>{c.color}</td>
                            <td>{c.mileage}</td>
                            <td>{c.price}</td>
                        </tr>)
                }
            </tbody>

        </table>

    </div>
>>>>>>> Stashed changes
    );

};      

            



export default ViewCars;