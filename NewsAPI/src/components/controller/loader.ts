import { ApiEndPoint } from './apiEndpoint';

class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<Type>(
        { endpoint, options = {} }: { endpoint: ApiEndPoint; options?: Options },
        callback: (data: Type) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: ApiEndPoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<Type>(method: string, endpoint: ApiEndPoint, callback: (data: Type) => void, options: Options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: Type) => callback(data))
            .catch((err) => console.error(err));
    }
}

type Options = {
    [keys: string]: string;
};

export default Loader;
export type { Options };
