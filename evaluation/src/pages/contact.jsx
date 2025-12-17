import { useState } from "react";
import MailInput from './mailInput';
import Items from './items';
import { SquareArrowLeft } from 'lucide-react';
import{ Link } from 'react-router-dom';


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitMessage, setSubmitMessage] = useState("");

  function envoieMessage(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      setSubmitMessage("Merci de remplir tous les champs.");
      return;
    }
    setSubmitMessage("Merci pour votre message !");
  }

  return (
    <div>
      <h1>Contact</h1>
      <Link to={`/items`}><SquareArrowLeft />Revenir a la page des films</Link>

      <form onSubmit={envoieMessage}>
        <div>
          <label>
            Nom :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <MailInput value={email} onValidEmailChange={setEmail} />

        <div>
          <label>
            Message :
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Envoyer</button>
      </form>

      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}

export default Contact;
