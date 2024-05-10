import axios from 'axios';

const LiverpoolService = {
    postLiverpoolTest: async (folio) => {
        try {
            const response = await axios.post(`http://localhost:3010/api/liverpool/${folio}`);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
};

export default LiverpoolService;

