import React, { useState } from "react";

import "../styles/Form.scss";
import SentPopup from "./SentPopup";

function Form() {
  const [gender, setGender] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sentPopup, setSentPopup] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSentPopup(true);
    setGender(false);
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="formContainer">
        <h4 className="formContainer__header">
          Wypełnij formularz swoimi danymi.
        </h4>

        <div className="formContainer__radios">
          <input
            type="radio"
            value="Pan"
            name="gender"
            required
            checked={gender === "Pan" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="Pan" className="formContainer__radio">
            Pan
          </label>

          <input
            type="radio"
            value="Pani"
            name="gender"
            required
            checked={gender === "Pani" ? true : false}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="Pani" className="formContainer__radio">
            Pani
          </label>
        </div>

        <input
          type="text"
          placeholder="Imię*"
          className="formContainer__input"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Nazwisko*"
          className="formContainer__input"
          required
          value={surname}
          onChange={(e) => {
            setSurname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="E-mail*"
          className="formContainer__input"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
        />
        <input
          type="tel"
          placeholder="Numer telefonu* (123456789)"
          className="formContainer__input"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
        />

        <button type="submit" className="formContainer__submit">
          Wyślij
        </button>
      </form>
      {sentPopup && (
        <SentPopup sentPopup={sentPopup} setSentPopup={setSentPopup} />
      )}
    </>
  );
}

export default Form;
