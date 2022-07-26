const Card = (props)=>{
    return(
        <div className="card text-white bg-dark mb-3" style={{maxWidth:"18rem"}}>
        <div className="card-header">Card {props.id}</div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    )
}

export default Card;