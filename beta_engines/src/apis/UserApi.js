const URI = "http://gangstaappbetaengines-env.eba-yzzcuhj6.us-east-1.elasticbeanstalk.com/api/account"

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
    }

}

export default UserApi;