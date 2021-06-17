import React from 'react'

const Comment = ({ com }) => {
    return (
        <div className="row justify-content-md-center my-5">
            <div className="card" style={{ width: "50rem" }}>
                <div className="card-body">
                    <div className="card-title">{com.name}</div>
                    <p className="card-text">{com.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
