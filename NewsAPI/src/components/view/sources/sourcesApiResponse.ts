interface SourcesApiResponse {
    status: string;
    sources: Sources[];
}

interface Sources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export default SourcesApiResponse;