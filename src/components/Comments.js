import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const Comments = ({ match }) => {
    const [comments, setComments] = useState([])

    // const fetchComments = () => {
    //     axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
    //         .then(res => setComments(res.data)).catch(err => console.log(err))
    // }
    // const fetchComments = async () => {
    //     try {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
    //         setComments(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`)
            const res = await response.json()
            setComments(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [match])


    return (
        <div>
            {comments.map((com, key) => <Comment com={com} key={key} />)}
        </div>
    )
}

export default Comments
