
const Validation = (value) => {
    let error = {}
    if (!value.name) {
        error.name = "name is empty"
    }
    if (!value.email) {
        error.email = "email is empty";
    }else {if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.email)) 
            
                console.log("jhyug")
            error.email = "invalid email"
            
}
    
    if (!value.password) {
    error.password = "password is empty"
    }
    return error;

}
export default Validation;
