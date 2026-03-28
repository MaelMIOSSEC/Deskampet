import { Cat, Dog, ChessKnight, type LucideIcon } from "lucide-react";

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
    Icone: ChessKnight,
  },
];

const PriceCards = () =>
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
      <h5 className="whitespace-pre-line text-center">{priceCard.titre}</h5>
      <h2 className="text-center">{priceCard.prix}</h2>
      <hr
        className="my-4"
        style={{
          width: 100,
          border: "solid 1px",
          color: priceCard.couleurDelimitation,
        }}
      />
      <h5 className="text-center">{priceCard.duree}</h5>
      <p className="text-center mt-2">{priceCard.description}</p>
    </div>
  ));

export default PriceCards;
