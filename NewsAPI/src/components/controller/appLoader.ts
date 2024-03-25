import Loader from './loader';

class AppLoader extends Loader {
    
    constructor() {
        let url = process.env.API_URL;
        let apiKey =  process.env.API_KEY;
        if(url && apiKey) {
            super(url, {
                apiKey: apiKey,
            });
        } else {
            console.error("URL not set")
        }
       
    }
}

export default AppLoader;
