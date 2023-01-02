import fetchnews from "./fetchnews";

const searching = async (searchkey: string) => {
    // const data = await JSON.stringify(searchkey)
    const searchresult : Article[] = await fetchnews("",searchkey,true);  
    
    return searchresult
}

export default searching