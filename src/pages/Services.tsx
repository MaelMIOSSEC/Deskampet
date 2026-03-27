import { Cat, Dog, ChessKnight, Phone, House, Signature, Footprints, type LucideIcon } from "lucide-react";

interface PriceCardData {
  titre: string;
  prix: string;
  duree: string;
  description: string;
  couleurArrierePlan: string;
  couleurTexte: string;
  couleurDelimitation: string;
  Icone: LucideIcon;
}

const priceCards: PriceCardData[] = [
  {
    titre: "VISITE CHAT, \nCHIEN, NAC",
    prix: "10 - 15 €",
    duree: "30 minutes",
    description:
      "Distribution de l'eau et de l'alimentation, soins, nettoyage de la litière/habitat de l'animal, jeux, brossage...",
    couleurArrierePlan: "#ffcece",
    couleurTexte: "#150e38",
    couleurDelimitation: "black",
    Icone: Cat,
  },
  {
    titre: "PROMENADE INDIVIDUELLE",
    prix: "15 - 20 €",
    duree: "30 minutes - 1 heure",
    description:
      "Autour du domicile, à la campagne ou en forêt dans un endroit n'excédant pas plus de 10 minutes de trajet.",
    couleurArrierePlan: "#5fb9a9",
    couleurTexte: "white",
    couleurDelimitation: "white",
    Icone: Dog,
  },
  {
    titre: "VISITE POUR LES CHEVAUX",
    prix: "SUR DEVIS",
    duree: "Durée indéterminée",
    description:
      "Un ou plusieurs passages par jour, sortie au pré. Distribution de l'eau et de l'alimentation, pansage, soins, box.",
    couleurArrierePlan: "#ffffff",
    couleurTexte: "#150e38",
    couleurDelimitation: "black",
    Icone : ChessKnight,
  },
];

const StepCard = ({ number, title, text, Icone }: { number: string; title: string; text: string, Icone: LucideIcon; }) => (
  <div className="relative border p-6 rounded-4xl w-64 h-64 mt-10 bg-white shadow-lg">
    <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#5fb9a9] text-white font-bold">
      {number}
    </h2>
    <Icone size={30} className="block mx-auto mt-3" />
    {parseInt(number) < 4 && <hr className="absolute top-28 left-63.5 w-58" />}
    <div className="pt-4 text-center">
      <p><b>{title}</b></p>
      <p>{text}</p>
    </div>
  </div>
);

const PriceCard = () =>
  priceCards.map((priceCard, index) => (
    <div
      key={index}
      className="tarifs"
      style={{
        backgroundColor: priceCard.couleurArrierePlan,
        color: priceCard.couleurTexte,
      }}
      draggable="false"
    >
      <div className="flex justify-center mb-4">
        <priceCard.Icone size={48} />
      </div>
      <h5 className="whitespace-pre-line">{priceCard.titre}</h5>
      <h2>{priceCard.prix}</h2>
      <hr
        style={{
          width: 100,
          border: "solid 1px",
          color: priceCard.couleurDelimitation,
        }}
      />
      <h5>{priceCard.duree}</h5>
      <p>{priceCard.description}</p>
    </div>
  ));

export default function Services() {
  return (
    <div>
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
            COMMENT ÇA FONCTIONNE ?
          </h3>
          <hr style={{ width: 270, border: "solid 1px" }} />
          <br />
        </div>
        <div className="flex justify-around gap-4 pr-20 pl-20 pt-2 ">
          <StepCard number="1" title="Prise de contact" text="Échangez via téléphone ou réseaux sociaux." Icone={Phone} />
          <StepCard number="2" title="La pré-visite" text="Rencontre avec vous et votre animal. Gratuit et sans engagement." Icone={House} />
          <StepCard number="3" title="Signature du contrat" text="Formalisation des préstations, tarifs et disponibilités." Icone={Signature} />
          <StepCard number="4" title="Début des prestations" text="C'est parti ! Je m'occupe de vos compagnons selon le planning convenu ensemble." Icone={Footprints} />
        </div>
      </section>
    </div>
  );
}
