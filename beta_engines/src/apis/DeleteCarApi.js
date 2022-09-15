const URI = "http://gangstaappbetaengines-env.eba-yzzcuhj6.us-east-1.elasticbeanstalk.com/api/cars/delete/{id}"

const DeleteCarApi = {


    addCars: (car) => {
        fetch(URI, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(car)
        })
            .then(response => {
                response.json()
            })
            .then(data => {
                alert("Car Removed from Shop: " + JSON.stringify(data))
            })
            .catch(error => console.error(error))
    }
}

export default DeleteCarApi;