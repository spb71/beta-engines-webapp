const URI = "http://gangstaappbetaengines-env.eba-yzzcuhj6.us-east-1.elasticbeanstalk.com/api/account/create"

const AddUserApi = {
  

    addUsers: (user) => {
        fetch(URI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.parse(user)
        })
            .then(response => response.json())
            .then(data => {
                alert("User is Registered: " + JSON.parse(data))
            })
            .catch(error => console.error(error))
    }
}

export default AddUserApi;