import BrownHairWoman from "../assets/profilPictures/brown-hair-woman-.webp";
import BrownHairMen from "../assets/profilPictures/brown-hair-men.webp";
import BlondHairMen from "../assets/profilPictures/blond-hair-men.webp";

import { Phone, House, Signature, Footprints } from "lucide-react";
import PriceCards from "../components/Services/PriceCards.tsx";
import StepCards from "@/components/Services/StepCards.tsx";
import Opinion from "@/components/Services/Opinion.tsx";

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
              <PriceCards />
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
          <StepCards
            number="1"
            title="Prise de contact"
            text="Échangez via téléphone ou réseaux sociaux."
            Icone={Phone}
          />
          <StepCards
            number="2"
            title="La pré-visite"
            text="Rencontre avec vous et votre animal. Gratuit et sans engagement."
            Icone={House}
          />
          <StepCards
            number="3"
            title="Signature du contrat"
            text="Formalisation des préstations, tarifs et disponibilités."
            Icone={Signature}
          />
          <StepCards
            number="4"
            title="Début des prestations"
            text="C'est parti ! Je m'occupe de vos compagnons selon le planning convenu ensemble."
            Icone={Footprints}
          />
        </div>
      </section>
      <section className="page-section">
        <div className="titres">
          <h3
            className="section-heading text-uppercase"
            style={{ color: "#150e38" }}
          >
            CE QUE DISENT LES FAMILLES
          </h3>
          <hr style={{ width: 270, border: "solid 1px" }} />
          <br />
        </div>
        <div className="flex justify-around gap-4 pr-20 pl-20 pt-2 ">
          <Opinion text="'Mon chat était parfaitement soigné, des photos à chaque visite — j'étais totalement rassurée !'" avatar={BrownHairWoman} name={"Marie L."} animal={"Milo 🐱"} />
          <Opinion text="'Très professionnelle, ponctuelle et à l'écoute. Je recommande vivement pour les promenades !'" avatar={BrownHairMen} name={"Thomas B."} animal={"Rex 🐶"} />
          <Opinion text="'Un grand merci pour les soins apportés à nos chevaux. Sérieux et bienveillant !'" avatar={BlondHairMen} name={"Marc M."} animal={"Luna 🐴"} />
        </div>
      </section>
    </div>
  );
}
