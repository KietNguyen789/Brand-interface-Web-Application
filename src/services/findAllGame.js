import * as httpRequest from '~/utils/httpRequest';
import axios from 'axios';
export const getAllGames = async () => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
         const res = await axios({
            method: 'get',
            url: `http://localhost:3000/gameManage/getAll`,   
          });
        // res.data.data
        const data = res.data.data;
        console.log('game list :',data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
