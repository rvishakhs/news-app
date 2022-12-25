import {gql} from "graphql-request"
import Sortfunction from "./Sortfunction";

const Fetchnews = async (
    category?: categories | string,
    keywords?: string,
    isDynamic?: boolean,
) => {

    // Graphql query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $keywords: String
        $category: String!
        ){
        myQuery(
            access_key: $access_key
            category: $category
            contries: "gb"
            sort: "published_desc"
            keywords: $keywords    
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
            {query, 
                variables: {
                        access_key: process.env.MEDIASTACK_API_KEY,
                        category: category,
                        keywords: keywords,        
                    }
            }
        )
    }
    )

    const newsresponse = await res.json();

    console.log(newsresponse)


    // const data = Sortfunction(newsresponse)

    return newsresponse;

}
 export default Fetchnews



// http://api.mediastack.com/v1/news?access_key=cf1e847539cf4fd3f9d5fbd7da7ce1c0&sources=cnn,bbc&contries=us,gb,ca,au,nz&sources=business,technology,science&limit=100&offset=0&sort=published_desc