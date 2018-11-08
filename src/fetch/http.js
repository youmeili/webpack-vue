import axios from "axios";

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.data;
        // if (response.data.code == 1000) {
        //     return response.data.data;
        // }
        // const error = new Error(response.msg);
        // error.response = response;
        // throw error;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default {
    get(url, params){
        url = '/api' + url;
        return new Promise((resolve, reject) => {
            axios.get(url, params).then(res => {
                // console.log(res, 'res');
                resolve(checkStatus(res));
            }).catch(err => {
                reject(err);
            })

        })
    },
    post(url, params){
        url = '/api' + url;
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(checkStatus(res));
            }).catch(err => {
                reject(err);
            })

        })
    },
}