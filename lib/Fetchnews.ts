const Fetchnews = async () => {
    const res = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&sources=cnn,bbc`)
    const data = await res.json()

    return data
}

export default Fetchnews