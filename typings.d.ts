type categories = 
| "General"
| "Business"
| "Entertainment"
| "Health"
| "Science"
| "Sports"
| "Technology" 

type Article = {
    map(arg0: (article: any) => JSX.Element): React.ReactNode;
    author: string | null;
    category: string;
    country:string;
    description: string;
    image: string | string[] | undefined
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
    // pagination : Pagination;
    data : Article[]
} 