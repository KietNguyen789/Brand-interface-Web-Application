import axios from 'axios';
import { MOCK_GAMES } from './mock/games';

export const getAllGames = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/gameManage/getAll`,
        });
        return res.data.data;
    } catch (err) {
        console.log(err);
        return MOCK_GAMES;
    }
};
