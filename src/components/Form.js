import React, { useState, createContext } from "react";
import { database } from "../firebase";

function Form({ item }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");
  var milliseconds = new Date().getTime();

  let onSubmitHandler = (e) => {
    e.preventDefault();
    let userInfo = database.ref("User");
    const user = {
      id: milliseconds,
      name,
      email,
      address,
    };
    userInfo.push(user);
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Address: </label>
          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
