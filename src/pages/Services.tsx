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
              <div
                className="tarifs"
                style={{ backgroundColor: "#ffcece", color: "#150e38" }}
                draggable="false"
              >
                <h5>VISITE CHAT, CHIEN, NAC</h5>
                <h3>10 - 15 €</h3>
                <hr style={{ width: 100, border: "solid 1px" }} />
                <h5>30 minutes</h5>
                <p>
                  Distribution de l'eau et de l'alimentation, soins, nettoyage
                  de la litière/habitat de l'animal, jeux, brossage...
                </p>
              </div>
              <div className="service-img">
                <div
                  className="tarifs"
                  style={{ backgroundColor: "#5fb9a9", color: "white" }}
                  draggable="false"
                >
                  <h5 className="titre">PROMENADE INDIVIDUELLE</h5>
                  <h3>15 - 20 €</h3>
                  <hr
                    style={{
                      width: 100,
                      border: "solid 1px",
                      color: "white",
                    }}
                  />
                  <h5>30 minutes - 1 heure</h5>
                  <p>
                    Autour du domicile, à la campagne ou en forêt dans un
                    endroit n'excédant pas plus de 10 minutes de trajet.
                  </p>
                </div>
              </div>
              <div className="service-img">
                <div
                  className="tarifs"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#150e38",
                  }}
                  draggable="false"
                >
                  <h5>VISITE POUR LES CHEVAUX</h5>
                  <h3>SUR DEVIS</h3>
                  <hr style={{ width: 100, border: "solid 1px" }} />
                  <h5>Durée indéterminée</h5>
                  <p>
                    Un ou plusieurs passages par jour, sortie au pré.
                    Distribution de l'eau et de l'alimentation, pansage, soins,
                    box.
                  </p>
                </div>
              </div>
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
