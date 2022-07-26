import { useState } from "react";


const Insert = (props) => {
    // Basic Input
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitFormHandler=(event)=>{
        event.preventDefault();
        //Basic Validation
        if(title.trim()==="" || description.trim()===""){
            return;
        }
        const newValue = {
            id:0,
            title,
            description,
        }
        props.addData(newValue)
        
    }
  return (
    <form onSubmit={submitFormHandler}>
      <div className="row m-2 p-3 justify-content-center align-items-center border rounded">
        <div className="col-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="title"
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="floatingInput">Title</label>
          </div>
        </div>
        <div className="col-8">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Description"
              id="floatingTextarea"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="floatingTextarea">Description</label>
          </div>
        </div>

        <div className="col-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Insert;
