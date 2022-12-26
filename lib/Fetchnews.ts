import {gql} from "graphql-request"
import sortfunction from "./Sortfunction";

const fetchnews = async (
    category?: categories | string,
    keywords?: string,
    isDynamic?: boolean,
) => {

    // Graphql query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $keywords: String!
        $categories: String!
        ){
        myQuery(
            access_key: $access_key
            keywords: $keywords
            categories: $categories
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `

    // Fetching data

    const res = await fetch("https://rimouski.stepzen.net/api/altered-penguin/__graphql", {
        method: "POST", 
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic? {revalidate : 0} : {revalidate : 20},
        headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body : JSON.stringify(
            {query : query,
                variables: {
                        access_key: process.env.MEDIASTACK_API_KEY,
                        categories: category,
                        keywords: keywords,        
                    }
            }
        )
    }
    )

    const newsresponse = await res.json();


    console.log(newsresponse)


    const data = sortfunction(newsresponse.data.myQuery)

    return data;

}
 export default fetchnews

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=5cf66c46b8b41cbd199e0475d7075036&countries=us,gb,au,ca&limit=100&offset=0&sort=published_desc"


