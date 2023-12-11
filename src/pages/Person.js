import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Person() {
  const { id } = useParams();

  // USING ENDPOINT...

  // const [person, setPerson] = useState({});

  // useEffect(() => {
  //   const getPerson = async () => {
  //     const response = await fetch(`https://swapi.dev/api/people/${id}`);
  //     const responseJson = await response.json();

  //     setPerson(responseJson);
  //   };

  //   getPerson();
  // }, [id]);



  //  when there's no endpoint, make use of this method below:
  const person = items.find(item => item.id === parseInt(id)) || {};


  return (
    <div className="container">
      <h3 className="display-3">Person</h3>
      <p className="lead">Details of a Star wars person</p>
      <hr />
      {/*data from endpoint */}
      {/* <h4>{person.name}</h4>
      <p>Height: {person.height}</p>
      <p>Hair color: {person.hair_color}</p> */}

{/* data from data.js */}
      <h4>{person.slashPrice}</h4>
      <p>Height: {person.productName}</p>
      <p>Hair color: {person.price}</p>
    </div>
  );
}
