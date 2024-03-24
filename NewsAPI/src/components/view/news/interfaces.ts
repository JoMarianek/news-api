interface NewsApiResponse {
    status: string;
    totalResults: 41,
    articles: Article[];
}

interface Article {
    source: {
        id: string | null;
        name: string;
    }
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
}