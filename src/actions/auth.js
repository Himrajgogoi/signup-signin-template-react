

/// configuring the token header
export const tokenConfig = ()=>{
    const token = localStorage.getItem('token');

    //Header
    const config = {
        headers:{
            'Content-Type': "application/json"
        }
    }

    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
}



/// for multipart data
export const tokenConfig_multipart = ()=>{
    const token = localStorage.getItem('token');

    //Header
    const config = {
        headers:{
            'Content-Type': "multipart/form-data;boundary='------'"
        }
    }

    if(token){
        config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
}




