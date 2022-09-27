import React from 'react'

function Card(props) {
    return (
            <div className='cards'>
                <div className="card">
                    <div className="imgg">
                        <img src={props.imgg} alt="" />
                    </div>
                    <p className='caption'>{props.caption}</p>
                    <h2>{props.show}</h2>
                    <p>{props.about}</p>
                    <a href={props.link}><button className='btn'>Watch Now</button></a>
                </div>
            </div>
    )
}

export default Card;