import React, { useEffect, useState } from 'react'

function FinanceNews() {
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://finnhub.io/api/v1/news?category=general&token=cv7r0mpr01qpecih6h5gcv7r0mpr01qpecih6h60` //api key
                )
                const data = await response.json()
                setNews(data.slice(0,5)); // limit to 5 news headlines 
            } catch (error) {
                console.error('Error fetching news:', error)
            }
        }
        fetchNews()
    }, [])

    return (
        <div className='finance-news'>
            <h3>Latest Finance News</h3>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target='_blank' rel='noopener noreferrer'>
                            {article.headline}
                        </a>
                        <p>{article.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FinanceNews