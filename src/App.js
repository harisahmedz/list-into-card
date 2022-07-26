import { useState } from "react";
import Card from "./components/card";
import Insert from "./components/Insert";
import List from "./components/List";

const initialData = [
  {
    id: "1",
    title: "Dark card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "2",
    title: "Dark card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "3",
    title: "Dark card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "4",
    title: "Dark card title",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];
function App() {
  const [showCard, setShowCard] = useState(false);
  const [insert, setInsert] = useState(false);
  const [data, setData] = useState(initialData);
  const AddDataHandler = (newData)=>{
      newData.id = String( +(data.slice(-1)[0].id) +1); //last id of Array and Increasing one
      setData([...data, newData])
      setInsert(false);
  }
  return (
    <>
    <div className="container-lg mt-5">
      <button type="button" onClick={()=>(setShowCard(!showCard))} className="btn btn-warning mx-1">{showCard ? "Covert Into List" : "Convert Into Card"}</button>
      {
        insert ? <Insert addData={AddDataHandler}/> :
        <button type="button" className="btn btn-primary mx-1" onClick={()=>(setInsert(true))}>Insert</button>
      }

      {
        showCard ?
        <div className="row justify-content-center mt-2">
        {data.map((cardItem) => (
          <div className="col-3" key={cardItem.id}>
            <Card
              id={cardItem.id}
              title={cardItem.title}
              description={cardItem.description}
              key={cardItem.id}
            />
          </div>
        ))}
      </div> :
      <List data={data} />

      }
      

      </div>
    </>
  );
}

export default App;
