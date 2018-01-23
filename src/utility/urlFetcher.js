class urlFetcher { 
    getUrl(type) {
        var baseLoginUrl = 'https://hidden-eyrie-85515.herokuapp.com/';
        var baseDataUrl = 'http swapi.co/api/'
        switch(type) {
            case 'authenticate': 
                return baseLoginUrl + 'api/authenticate';
            case 'register':
                return baseLoginUrl + 'signup';
            case 'search':
                return baseDataUrl + 'planets';
            default:
                return baseDataUrl;
        }
    }
}

export default new urlFetcher();