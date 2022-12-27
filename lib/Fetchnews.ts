import {gql} from "graphql-request"
import sortfunction from "./sortfunction";
import React, {useState, useEffect} from 'react'

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
            countries: "gb"
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

    const newsResponse = await res.json();

    const data = await sortfunction(newsResponse.data.myQuery)


    return data
}


 export default fetchnews



