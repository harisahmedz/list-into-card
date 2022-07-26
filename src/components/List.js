const List = (props) => {
  return (
    <>
      <div className="card m-2">
        <div className="card-header">
            <div className="row">
                <div className="col-1 border-end border-secondary border-1">No.</div>
                <div className="col-2 border-end border-secondary border-1">Title</div>
                <div className="col-9">Description</div>
              </div>
        </div>
        <ul className="list-group list-group-flush">
          {props.data.map((listItem) => (
            <li className="list-group-item" key={listItem.id}>
              <div className="row">
                <div className="col-1 border-end border-secondary border-1">{`${listItem.id}`}</div>
                <div className="col-2 border-end border-secondary border-1">{`${listItem.title}`}</div>
                <div className="col-9">{`${listItem.description}`}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
