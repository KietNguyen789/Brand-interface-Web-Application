import axios from "axios"

export const staSaleOff = async (brandId) => {
    try { const res = await axios({
        method:'get',
        url:`http://localhost:3000/monitor/discountStatus`,
        params:{
            brandId
        }
    })
    console.log(res.data);
    
    return res.data;
} catch(e){
    console.log(e);
    
}
}