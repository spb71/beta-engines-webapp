const URI = ""

const UserApi = {
    getUsers: (setUsers) => {
        fetch(URI)
            .then((result) => {
                return result.json(result)
            })
            .then( data => {
                setUsers( data )
            })
            .catch( (error) => {
                console.error(error)
            })
    },

    addUsers: (user) => {
        fetch( URI, {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( user )
        })
            .then( response => response.json())
            .then( data => {
                alert( "Successfuly Created Account: " + JSON.stringify( data ))
            })
            .catch(error => console.error( error ))
    }
}

export default UserApi;