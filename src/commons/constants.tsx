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

export const hospitalItems = [
  {
    title: "Qual è il suo scopo?",
    content: (
      <>
        L'obiettivo principale è fornire servizi aggiuntivi ai pazienti
        ricoverati all'interno di Strutture Ospedaliere. Ma il monitor può anche
        essere utilizzato per visualizzare e pubblicizzare i servizi interni
        offerti dall'ospedale. <br /> <br />
        Sui monitor dei pazienti possono essere visualizzati messaggi
        informativi di vario genere, come ad esempio:
        <br /> <br />
        <ul>
          <li>Orari e servizi per il pubblico</li>
          <li>Menu dei pasti previsti giornalmente o settimanalmente</li>
          <li>Orari delle funzioni religiose</li>
          <li>Comunicazioni personali per il singolo paziente</li>
          <li>Informazioni e messaggi pubblicitari</li>
          <li>Servizi e informazioni di pubblica utilità</li>
        </ul>
      </>
    ),
  },
  {
    title: "Di quali servizi dispone?",
    content: (
      <>
        Tramite un menu interattivo a video su ciascun monitor paziente, risulta
        possibile la scelta dei seguenti servizi:
        <br />
        <br />
        <ul>
          <li>TV Digitale Terrestre nelle Bande S, VHF ​e UHF del DVB-T2</li>
          <li>TV Satellitare, sia in chiaro che a pagamento ​​</li>
          <li>Servizi Telefonici</li>
          <li>Servizi Internet</li>
          <li>
            Videogiochi contenuti gratuitamente all’interno dell’archivio
            centrale (in alternativa il paziente può usufruire di una porta
            dedicata per collegare una sua consolle)
          </li>
          <li>
            Video On Demand da un archivio interno proprietario appositamente
            predisposto
          </li>
          <li>
            Videoconferenze e videochiamate con i propri famigliari a casa o
            dall’atrio dell’ospedale{" "}
          </li>
        </ul>
        <br />
        ​Per la distribuzione e l’invio del segnale televisivo a ciascun
        paziente viene utilizzato l’impianto strutturato di trasmissione dati
        interno, nella maggioranza dei casi preesistente. Questa soluzione offre
        il vantaggio di poter rendere operativo l’impianto anche in edifici non
        appositamente attrezzati e successivamente alla loro realizzazione.
      </>
    ),
  },
  {
    title: "Quali sono i requisiti necessari per l'utilizzo di questo sistema?",
    content: (
      <>
        L’unica condizione posta è la presenza di un cablaggio strutturato Cat.
        5e per la distribuzione dei servizi informatici all’interno
        dell’edificio. Viene richiesto un minimo di 100 MHz di banda.
      </>
    ),
  },
  {
    title: "Come avviene la visione dei programmi?",
    content: (
      <>
        Ci sono due modalità principali:
        <br />
        <br />
        1. Su un monitor di grande formato ancorato alla parete antistante il
        letto del paziente;
        <br />
        2. Su un monitor di medio formato montato su un braccio meccanico
        estensibile a 5 gradi di libertà ancorato alla parete della testata del
        letto che, grazie ai suoi snodi, consente il posizionamento dello
        schermo proprio davanti al paziente sdraiato alla distanza desiderata.
      </>
    ),
  },
  {
    title: "Come avviene il pagamento dei servizi?",
    content: (
      <>
        L'addebito può avvenire sia localmente - con lettori di badge prepagati
        e un'indicazione a video del credito residuo - che in modo
        centralizzato. Con i lettori di badge il sistema emette uno scontrino al
        momento dell’acquisto attestante il servizio acquistato; con la versione
        centralizzata si può ottenere anche la stampa dettagliata dei servizi di
        cui si è usufruito.
      </>
    ),
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

export const multiItems = [
  {
    title: "Posso vedere anche dei programmi pre-registrati?",
    content: (
      <>
        Sì, sul monitor sono presenti programmi televisivi e filmati in “Video
        on Demand”, di generi diversi, contenuti in un archivio centrale ed
        accessibile digitando sul monitor (nella versione Touch Screen) o sul
        telecomando il codice del programma desiderato. Viene fornito ai degenti
        un elenco con i codici dei programmi contenuti in un archivio che viene
        costantemente aggiornato.​​
      </>
    ),
  },
  {
    title: "Come vengono gestite le chiamate?",
    content: (
      <>
        È possibile sia effettuare che ricevere chiamate in selezione passante
        direttamente tramite lo schermo del monitor utilizzando l’apposito menu
        a video oppure utilizzando l’apparecchio telefonico collocato di fianco
        al monitor stesso. Il sistema prevede un avviso acustico e luminoso in
        presenza di una telefonata in arrivo. Dopo le ore 20.00 la segnalazione
        è solamente luminosa. <br /> <br />
        Nel caso di utilizzo del monitor come postazione telefonica di base,
        l’ascolto e la conversazione avvengono direttamente tramite il
        particolare telecomando in dotazione. Per garantire la necessaria
        riservatezza della conversazione, è anche possibile usufruire di cuffie
        dotate di microfono.
      </>
    ),
  },
  {
    title: "Come funzionano le videochiamate?",
    content: (
      <>
        Sul monitor si trova integrata una telecamera plurifunzione che può
        essere utilizzata per effettuare collegamenti in videoconferenza con i
        colleghi d’ufficio o videochiamate con i propri famigliari, da casa o
        dagli appositi totem multimediali predisposti all’interno dell’ospedale.
        <br /> <br />
        ​Questa soluzione consente una notevole riduzione del flusso di
        visitatori all’interno della struttura ospitante e dei singoli reparti,
        con gli indubbi vantaggi logistici ed organizzativi per le
        Amministrazioni Ospedaliere. Contemporaneamente vengono abbattuti i
        costi di soggiorno che i famigliari devono sostenere trattandosi spesso
        di pazienti provenienti da altre regioni.
      </>
    ),
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
