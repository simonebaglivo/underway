import React from "react";

// Importing: Styles.
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <p>CONTATTAMI</p>
        <div className="footer__contacts">
          <label htmlFor="nome"> Nome: </label>
          <input type="text" name="nome" id="nome" />
          <label htmlFor="email"> Email: </label>
          <input type="email" name="email" id="email" />
          <label htmlFor="messaggio"> Messaggio: </label>
          <textarea rows={4} cols={50} name="messaggio" id="messaggio" />
          <button>Invia</button>
        </div>
        <hr />
        <p>Rea BO - BABA - DADA EDE - PARTITA IVA: 0202480328423</p>
      </footer>
    </>
  );
}
