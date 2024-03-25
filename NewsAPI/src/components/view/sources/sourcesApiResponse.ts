interface SourcesApiResponse {
    status: string;
    sources: Source[];
}

interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export default SourcesApiResponse;
export {Source}