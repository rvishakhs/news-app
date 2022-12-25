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
        ) {
        MyQuery(
            accesskey: $access_key
            category: $category
            contries: "gb, us, ca, au"
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
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body : JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                category: category,
                keywords: keywords,
            },
        })
    }
    );

    console.log("Data from", category, keywords)

        const newsResponse = await res.json();


    const data = Sortfunction(newsResponse.data.MyQuery)

    return data;





    // const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&sources=cnn,bbc&contries=us,gb,ca,au,nz&sources=business,technology,science&limit=100&offset=0&sort=published_desc`)
    // const data = await res.json()

    // return data
}

export default Fetchnews




// http://api.mediastack.com/v1/news?access_key=cf1e847539cf4fd3f9d5fbd7da7ce1c0&sources=cnn,bbc&contries=us,gb,ca,au,nz&sources=business,technology,science&limit=100&offset=0&sort=published_desc