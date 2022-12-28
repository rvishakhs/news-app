export default  function sortfunction(news : NewsResponse) {

    const sortwithimage =  news.data.filter(item => item.image !== null);
    const sortwithoutimage =  news.data.filter(item => item.image === null)

    const newsResponse =  [...sortwithimage,...sortwithoutimage]
    
    
    return newsResponse

} 