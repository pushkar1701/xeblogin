import axios from 'axios';

export const baseConfig = {
    protocol: 'http',
    headers: {
      'Content-Type': 'application/json',
    },
};

class httpService {

    get(config) {
        config.method = 'GET';
        return this.request(config);
    }

    post(config) {
        config.method = 'POST';
        return this.request(config);
    }

    request(config) {
        config = { ...baseConfig, ...config };
        return axios(config);
    }

}

export default new httpService();