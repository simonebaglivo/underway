import React from "react";

// Importing: Pages.
import Home from "../pages/Home";
import Service from "../pages/service/Service";

// Importing: Router.
import { Navigate } from "react-router-dom";

// Importing: Copy.
import { history2, underHistory } from "../copy";

// Importing: Icons.
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

export const roots = [
  { path: "/", element: <Home /> },
  { path: "/pool", element: <Service id="pool" /> },
  { path: "*", element: <Navigate to={"/"} replace /> },
  { path: "/hospital", element: <Service id="hospital" /> },
];

export const qualities = [
  { icon: faMicrochip, title: "passione" },
  { icon: faMicrochip, title: "esperienza" },
  { icon: faMicrochip, title: "innovazione" },
];

export const coverItems = [
  {
    id: "pool",
    title: "riprese subacquee",
  },
  {
    id: "hospital",
    title: "servizi tv ospedalieri",
  },
];

export const subItems = [
  {
    title: "Quante versioni ci sono?",
    content: (
      <>
        Esistono principalmente due versioni costruttive delle telecamere: una
        con cupola a menisco, in vetro ottico, lavorato a controllo numerico;
        l'altra con oblò, piano o emisferico, sempre in vetro ottico. Di seguito
        alcune tra le possibili implementazioni:
        <br />
        <br />
        <ul>
          <li>Da fondo vasca</li>
          <li>Da parete</li>
          <li>Verticale laterale</li>
          <li>Da galleggiante di corsia, Point of View</li>
          <li>
            Doppia: per ripresa speculare dei concorrenti vicini di corsia lungo
            tutta la vasca
          </li>
          <li>Da blocchi di partenza, Point of View</li>
          <li>
            Lift a periscopio per riprese in movimento durante il passaggio dei
            concorrenti, da superficie a immersione e viceversa.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Come sono realizzate?",
    content: `Sono delle custodie subacquee dal disegno proprietario realizzate in acciaio inox AISI316 o in alluminio anticorodal anodizzato, viteria in acciaio inox 316 o in titanio. Hanno un connettore multipolare metallico, robusto, con grado di protezione IP69K, a contatti bagnati, per rendere possibile il suo inserimento direttamente sott’acqua.`,
  },
  {
    title: "Come viene visualizzata l'immagine?",
    content:
      "Per compensare la mancanza di riferimenti visivi spaziali delle immagini subacquee è stato creato un menu a video OSD con un layout grafico indicante, istante per istante, la posizione angolare orizzontale dell’asse ottico della telecamera su un ipotetico piano cartesiano, tipo bussola virtuale. Questo valore può essere trasformato da relativo ad assoluto con un semplice settaggio dei parametri in tempo reale. Un segnale acustico/luminoso e in OSD video avvisa quando e se si è in presenza di perdite di pressione all’interno della telecamera che possono pregiudicarne la tenuta stagna.",
  },
  {
    title: "Quali funzioni meccaniche si possono controllare da remoto?",
    content:
      "È possibile variare la posizione angolare e la velocità di rotazione, sia orizzontale (PAN) che verticale (TILT). C’è una funzionalità per scegliere il filtro colore ed è inoltre possibile modificare i parametri di posizione progressiva dello zoom ottico, del fuoco e del diaframma.",
  },
  {
    title: "Quali funzioni elettroniche si possono controllare da remoto?",
    content:
      "Il bilanciamento del bianco può essere settato sia automaticamente (AWB) che manualmente (MWB) sui tre colori primari. È presente la compensazione del controluce, il controllo del guadagno e dei seguenti valori: luminanza, crominanza, pedestal, dettaglio, gamma.",
  },
];

export const binaryItems = [
  {
    title: "A quali tipi di vasche è adatta?",
    content:
      "La struttura è molto compatta e porta la telecamera ad una altezza di soli 70 mm dal fondo vasca, risultando quindi adatta anche per impianti con vasche di profondità limitata.",
  },
  {
    title: "Per cosa può essere utilizzato?",
    content: `Ideale non soltanto per le gare di nuoto, ma anche per pallanuoto e nuoto sincronizzato (nuoto artistico). Sono state infatti realizzate delle versioni particolari, di forma circolare e curvilinea, specificamente per queste ultime riprese.`,
  },
  {
    title: "Tempo di montaggio, peso e spazio",
    content:
      "Il tempo di montaggio per la versione di 50 metri è di 2 ore e il peso al metro lineare è di 4.3 Kg/m. Un complesso sistema di fine corsa programmabile imposta gli estremi entro i quali il carrello si può muovere e come si deve comportare durante le fasi di avvicinamento.",
  },
];

export const servicesDetails = [
  {
    copy: underHistory,

    image: <div className="services__circle mr-auto l-0">SCOPRI</div>,
  },
  {
    copy: history2,
    image: <div className="services__circle r-80">SCOPRI</div>,
  },
  {
    copy: underHistory,

    image: (
      <div className="services__circle mr-auto l-0">
        30<span>+</span>
      </div>
    ),
  },
  {
    copy: history2,
    image: <div className="services__circle r-80">SCOPRI</div>,
  },
];

export const menuItems = [
  { text: "", to: "/#home" },
  { text: "servizi", to: "" },
  { text: "chi siamo", to: "/#history" },
  { text: "contatti", to: "#contacts" },
];

export const tabletItems = [
  { text: "", to: "" },
  { text: "servizi tv ospedalieri", to: "/hospital" },
  { text: "riprese subacquee", to: "/hospital" },
  { text: "chi siamo", to: "/#history" },
  { text: "contatti", to: "#contacts" },
];

export interface accordionItemsInterface {
  title: string;
  content: JSX.Element | string;
}
