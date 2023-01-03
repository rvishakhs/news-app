import fetchnews from "./fetchnews";

const searching = async (searchkey: string) => {
    // const data = await JSON.stringify(searchkey)
    const searchresult  = await fetch(`http://api.mediastack.com/v1/news?access_key=5cf66c46b8b41cbd199e0475d7075036&sources=${searchkey}`) 
    const res = await searchresult.json()

    console.log(res);
    
    return res
}

export default searching