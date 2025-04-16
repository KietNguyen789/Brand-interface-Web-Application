import axios from 'axios';

const httpRequest = axios.create({
    // noi chuoi cho nay
    // có thể dung process.env để kiểm tra đang ở env nào: local, test, uta, production
    baseURL: process.env.REACT_APP_BASE_URL,
    //baseURL: process.env.REACT_APP_GAME_MANAGE,
});
// ham nay tra ve promise
// ham nay chay tu tren xuong duoi, code dong bo
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};
export default httpRequest;

// Local / Development
// Test / Staging
// UAT: chạy dữ liệu giống vói production, thay vi dữ liệu test đẩy lên production
// Production
