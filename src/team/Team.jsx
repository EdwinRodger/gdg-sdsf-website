import React from 'react'
import teamData from './team.json'

const Team = () => {
    const team24to25 = teamData["Team 2024-25"]
    const team23to24 = teamData["Team 2023-24"]
    const team22to23 = teamData["Team 2022-23"]
    return (
        <>
            <div className='container my-5'>
                <h1 className='text-center my-5'>Team 2024-25</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 gap-5 justify-content-center">
                    {team24to25.map((member, index) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <img src={member["image"]} className="card-img-top rounded-circle" alt={member["name"]} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{member["name"]}</h5>
                                    <p className="card-text">{member["role"]}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        {member["github"] === "" ? null : <a href={member["github"]} className="text-body-secondary"><i class="bi bi-github fs-4"></i></a>}
                                        {member["linkedin"] === "" ? null : <a href={member["linkedin"]} className="text-body-secondary"><i class="bi bi-linkedin fs-4"></i></a>}
                                        {member["instagram"] === "" ? null : <a href={member["instagram"]} className="text-body-secondary"><i class="bi bi-instagram fs-4"></i></a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-center my-5'>Team 2023-24</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 gap-5 justify-content-center">
                    {team23to24.map((member, index) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <img src={member["image"]} className="card-img-top rounded-circle" alt={member["name"]} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{member["name"]}</h5>
                                    <p className="card-text">{member["role"]}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        {member["github"] === "" ? null : <a href={member["github"]} className="text-body-secondary"><i class="bi bi-github fs-4"></i></a>}
                                        {member["linkedin"] === "" ? null : <a href={member["linkedin"]} className="text-body-secondary"><i class="bi bi-linkedin fs-4"></i></a>}
                                        {member["instagram"] === "" ? null : <a href={member["instagram"]} className="text-body-secondary"><i class="bi bi-instagram fs-4"></i></a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-center my-5'>Team 2022-23</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 gap-5 justify-content-center">
                    {team22to23.map((member, index) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <img src={member["image"]} className="card-img-top rounded-circle" alt={member["name"]} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{member["name"]}</h5>
                                    <p className="card-text">{member["role"]}</p>
                                    <div className="d-flex justify-content-center gap-3">
                                        {member["github"] === "" ? null : <a href={member["github"]} className="text-body-secondary"><i class="bi bi-github fs-4"></i></a>}
                                        {member["linkedin"] === "" ? null : <a href={member["linkedin"]} className="text-body-secondary"><i class="bi bi-linkedin fs-4"></i></a>}
                                        {member["instagram"] === "" ? null : <a href={member["instagram"]} className="text-body-secondary"><i class="bi bi-instagram fs-4"></i></a>}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Team