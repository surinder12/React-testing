import React from "react"

const Card = (props) => {


    return (

        <>
            

                    <div className=" col-sm-12 col-md-4" >
                        <div className="card">
                            <img className="card-img-top" src={props.imgsrc} />
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text ">{props.sname}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>




              
        </>

    )

}


export default Card;