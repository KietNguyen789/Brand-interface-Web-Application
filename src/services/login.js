import axios from 'axios';

export const checklogin = async (username, password) => {
    try {
        console.log(username, typeof username, password, typeof password);

        // Wrap the credentials inside a 'data' field as shown in the working example
        const body = {
            data: {
                username: username,
                password: password
            }
        };

        const response = await axios.post('http://localhost:3000/auth/loginBrand', body, {
            withCredentials: true, // Ensure you need this
        });

        const authToken = response.headers['authorization'];
        const authority = JSON.parse(response.headers['authority']);
    
        //console.log('Authorization Token:', authToken);
        //console.log('Authority:', authority);
       const bid = response.data;
        console.log(bid);
        // Return both token and user information
        sessionStorage.setItem('brand_id', bid)
        return {
          authToken,
          authority,
          brand_id: bid
        };
    } catch (error) {
        console.log("autho error: ", error);
        throw error;
    }
};
