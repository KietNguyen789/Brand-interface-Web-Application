import axios from 'axios';
//import * as httpRequest from '~/utils/httpRequest';

export const signupbrand = async (username, password,brand_name,email,phone,industry,address,lat,long ) => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
        const res_brand = await axios({
            method: 'post',
            url: `http://localhost:3000/brand-manage/brand-register`,
            headers:  'Content-Type: application/json',
            data: {
                brand_name,
                industry,
                address,
                gps_coordinate:{
                    lat,long
                }

            }  
        });
      //  sessionStorage.setItem('brand_id', res_brand.data._id)
        console.log({
            username,
            password,
            "name": brand_name,
            email,
           "role":'brand',
           phone,
           "brandID":res_brand.data._id
        }  );
        const body = {
            data:{
                username,
                password,
                "name": brand_name,
                email,
               "role":'brand',
               phone,
               "brandID":res_brand.data._id
            }
        }
        const crypted= false;
        const res_auth = await axios.post(
            
             `http://localhost:3000/auth/register/brand?crypted=${crypted}`,
          
           
         body);
        // res.data.data
        console.log(res_auth);
        return res_auth;
    } catch (err) {
        console.log(err);
    }
};
