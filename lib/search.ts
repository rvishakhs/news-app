import fetchnews from "./fetchnews";

const searching = async (searchkey: any) => {
    const searchresult  = await fetch(`http://api.mediastack.com/v1/sources?access_key=5cf66c46b8b41cbd199e0475d7075036&sources=${searchkey}`) 
    const res = await searchresult.json()

    console.log(res);
    
    return res
}

export default searching