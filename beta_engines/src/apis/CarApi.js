// const URI = "http://localhost:8080/api/cars"
const URI = "jdbc:mysql://database-3.czouzu240ute.us-east-1.rds.amazonaws.com/capstone_db"

const CarApi = {
    getCars: (setCars) => {
        fetch(URI)
            .then((result) => {
                return result.json(result)
            })
            .then( data => {
                setCars( data )
            })
            .catch( (error) => {
                console.error(error)
            })
    },

    addCars: (car) => {
        fetch( URI, {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( car )
        })
            .then( response => response.json())
            .then( data => {
                alert( "Car Registered to Sell: " + JSON.stringify( data ))
            })
            .catch(error => console.error( error ))
    }
}

export default CarApi;