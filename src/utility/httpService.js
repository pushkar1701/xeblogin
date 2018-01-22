import react from 'react';

class httpService {

    get() {
        config.type = 'GET';
        return this.request(config);
    }

}