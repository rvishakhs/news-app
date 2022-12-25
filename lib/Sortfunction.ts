export default function Sortfunction(news : NewsResponse) {

    const sortwithimage = news.data.filter((item) => item.image !== null);
    const sortwithoutimage = news.data.filter((item) => item.image === null)

    const newsResponse = {
        pagination: news.pagination,
        data: [...sortwithimage, ...sortwithoutimage]
    }
    
    return newsResponse

}