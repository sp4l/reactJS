import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticlesFootball } from '../store/articles/actions'
import { selectArticlesError, selectArticlesFootball, selectArticlesLoading } from '../store/selectors'

export const NewsFootball = () => {
    // const [articles, setArticles] = useState([])
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const loading = useSelector(selectArticlesLoading)
    const error = useSelector(selectArticlesError)
    const articles = useSelector(selectArticlesFootball)

    const requesArticles = useCallback(() => {
        dispatch(getArticlesFootball())
    }, [])

    // const requesArticles = useCallback(async () => {
    //     setLoading(true)

    //     try {
    //         const response = await fetch(API_URL)
    //         if (!response.ok) {
    //             throw new Error("Request failed: ", response.status)
    //         }
    //         const result = await response.json()

    //         setArticles(result)
    //     } catch (err) {
    //         setError(true)
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [])
    
    // const requesArticles = useCallback(() => {
    //     setLoading(true)
    //     fetch(API_URL)
    //         .then((response) => {
    //             console.log(response)

    //             if(!response.ok) {
    //                 throw new Error("Request failed: ", response.status)
    //             }
    //             return response.json()
    //         })
    //     .then((result) => setArticles(result))
    //     .catch(() => {
    //         setError(true)
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    // }, [])

    useEffect(() => {
        requesArticles()
    }, []);

    if (loading) {
        return <h3>LOADING...</h3>
    }

    if (error) {
        return (
            <>
                <h3>Request error</h3>
                <button onClick={requesArticles}>TRY AGAIN</button>
            </>
        )
    }

    if (!articles.length) {
        return <h3>No articles</h3>
    }
    
    return (
        <ul>
            {articles.map((a) => (
                <React.Fragment key={a.id}>
                    <li>{a.title}</li>
                    <span>{a.publishedAt}</span>
                </React.Fragment>
            ))}
        </ul>
    )
}