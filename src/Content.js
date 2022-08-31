import React, { useState, useEffect } from 'react';
import './Content.css';

const Content = () => {
    const [apiData, setApiData] = useState([]);

    const getData = () => {
        fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
            .then(results => results.json())
            .then(data => {
                setApiData(data.content);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    console.log("🚀 ~ file: Content.js ~ line 18 ~ Content ~ apiData", apiData)

    return (
        <div className='cont'>
            {
                apiData.map((currEle) => {
                    return (
                        <div className="card my-3 mx-4" style={{ width: '18rem' }} key={currEle.postId}>
                            <img src={currEle.coverImageUrl} style={{ maxHeight: '250px', maxWidth: '500px' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{currEle.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content