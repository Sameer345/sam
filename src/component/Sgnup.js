import services from '../service/serviceapi';
const apiService = {
    sendData : async function(body){
        let res = await services.post('http://localhost:5000/api/users/create','','',body);
        return Promise.resolve(res);
    },
    logData : async function(body){
        let log = await services.post('http://localhost:5000/api/users/login','','',body);
        return Promise.resolve(log);
    }  
}
export default apiService;