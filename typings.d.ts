type categories = 
| "General"
| "Business"
| "Entertainment"
| "Health"
| "Science"
| "Sports"
| "Technology" 

type Article = {
    author: string | null;
    category: string;
    country:string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string
}

type Pagination = {
    count: Int;
    limimt: Int;
    offset: Int;
    total: Int;
}

type NewsResponse = {
    filter(): unknown;
    pagination : Pagination;
    data : Article[]
} 