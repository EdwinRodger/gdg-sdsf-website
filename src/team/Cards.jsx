import React from 'react'

const Cards = ({ session, teamData }) => {
    return (
        <div>
            <h1 className='text-center my-5'>{session}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 gap-5 justify-content-center">
                {teamData.map((member, index) => {
                    return (
                        <div className="card p-3" style={{ width: "18rem" }} key={index}>
                            <img src={member["image"]} className="card-img-top rounded-circle" style={{ objectFit: "cover", width: 256, height: 256 }} alt={member["name"]} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{member["name"]}</h5>
                                <p className="card-text">{member["role"]}</p>
                                <div className="d-flex justify-content-center gap-3">
                                    {member["github"] === "" ? null : <a href={member["github"]} className="text-body-secondary" target='_blank'><i className="bi bi-github fs-4"></i></a>}
                                    {member["linkedin"] === "" ? null : <a href={member["linkedin"]} className="text-body-secondary" target='_blank'><i className="bi bi-linkedin fs-4"></i></a>}
                                    {member["instagram"] === "" ? null : <a href={member["instagram"]} className="text-body-secondary" target='_blank'><i className="bi bi-instagram fs-4"></i></a>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards