import React from 'react'

type Props = {
    news: Article
}

export default function Article({news}: Props) {
  return (
    <article>
        {news.image && (
            <img 
                src={news.image}
                alt={news.title}
                className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
        )}
        <h2>{news.title}</h2>
    </article>
  )
}