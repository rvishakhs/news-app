export default  function sortfunction(news : NewsResponse) {

    const sortwithimage =  news.data.filter(item => item.image !== null);
    const sortwithoutimage =  news.data.filter(item => item.image === null)

    const newsResponse = {
        pagination: news.pagination,
        data: [...sortwithimage,...sortwithoutimage]
    }
    
    return newsResponse

} 