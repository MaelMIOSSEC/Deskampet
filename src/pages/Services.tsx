const priceCards = [
  {
    titre: "VISITE CHAT, CHIEN, NAC",
    prix: "10 - 15 €",
    duree: "30 minutes",
    description: "Distribution de l'eau et de l'alimentation, soins, nettoyage de la litière/habitat de l'animal, jeux, brossage...",
    couleurArrierePlan: "#ffcece",
    couleurTexte: "#150e38",
    couleurDelimitation: "black"
  },
  {
    titre: "PROMENADE INDIVIDUELLE",
    prix: "15 - 20 €",
    duree: "30 minutes - 1 heure",
    description: "Autour du domicile, à la campagne ou en forêt dans un endroit n'excédant pas plus de 10 minutes de trajet.",
    couleurArrierePlan: "#5fb9a9",
    couleurTexte: "white",
    couleurDelimitation: "white"
  },
  {
    titre: "VISITE POUR LES CHEVAUX",
    prix: "SUR DEVIS",
    duree: "Durée indéterminée",
    description: "Un ou plusieurs passages par jour, sortie au pré. Distribution de l'eau et de l'alimentation, pansage, soins, box.",
    couleurArrierePlan: "#ffffff",
    couleurTexte: "#150e38",
    couleurDelimitation: "black"
  }
];

const StepCard = ({ number, text }: { number: string; text: string }) => (
  <div className="relative border p-6 rounded-4xl w-64 h-64 mt-10 bg-white shadow-lg">
    <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#150e38] font-bold">
      {number}
    </h2>
    {parseInt(number) < 4 && <hr className="absolute top-28 left-63.5 w-58" />}
    <div className="pt-8 text-center">
      <p>{text}</p>
    </div>
  </div>
);

const PriceCard = () => (
  (priceCards.map((priceCard) => (
    <div
    className="tarifs"
    style={{ backgroundColor: priceCard.couleurArrierePlan, color: priceCard.couleurTexte }}
    draggable="false"
  >
    <h5>
      {priceCard.titre}
    </h5>
    <h2>{priceCard.prix}</h2>
    <hr style={{ width: 100, border: "solid 1px", color: priceCard.couleurDelimitation }} />
    <h5>{priceCard.duree}</h5>
    <p>
      {priceCard.description}
    </p>
  </div>
  )))
);

export default function Services() {
  return (
    <div>
      {/* Services*/}
      <section
        className="page-section"
        style={{ padding: "200px 0 0 0" }}
        id="services"
      >
        <div className="container">
          <div className="text-center">
            <div className="titres">
              <h3
                className="section-heading text-uppercase"
                style={{ color: "#150e38" }}
              >
                PRESTATIONS ET TARIFS
              </h3>
              <hr style={{ width: 270, border: "solid 1px" }} />
              <br />
            </div>
          </div>
          <div className="test">
            <div className="service-img">
              <PriceCard />
            </div>
          </div>
        </div>
      </section>
      <section className="page-section">
        <div className="titres">
          <h3
            className="section-heading text-uppercase"
            style={{ color: "#150e38" }}
          >
            COMMENT EST CE QUE JE FONCTIONNE ?
          </h3>
          <hr style={{ width: 270, border: "solid 1px" }} />
          <br />
        </div>
        <div className="flex justify-around gap-4 pr-20 pl-20 pt-2 ">
          <StepCard number="1" text="Prise de contact" />
          <StepCard number="2" text="La pré-visite" />
          <StepCard number="3" text="Signature du contrat" />
          <StepCard number="4" text="Début des prestations" />
        </div>
      </section>
    </div>
  );
}

