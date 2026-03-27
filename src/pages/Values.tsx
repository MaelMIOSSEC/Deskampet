import CockerSpaniel from "../assets/valeurs-chien-cocker-jardin.webp";
import Hors from "../assets/valeurs-lucie-cheval-ecurie.webp";
import Dog from "../assets/valeurs-lucie-chien-seance-photo.webp";

export default function Values() {
  return (
    <div>
      <section className="page-section" id="propos">
        <div className="values-center">
          {/* Mon histoire */}
          <div className="values-info">
            <img
              src={Hors}
              width="250px"
              height="250px"
              style={{ borderRadius: 25 }}
            />
            <div className="values-text" style={{ paddingLeft: 45 }}>
              <h3 className="section-heading text-uppercase">Mon histoire</h3>
              <p>
                Depuis mon plus jeune âge, les animaux occupent une place
                centrale dans ma vie. J’ai toujours eu cette tendance à me
                tourner naturellement vers eux, à leur accorder mon attention et
                à chercher leur regard avant même de saluer les humains qui les
                accompagnent. Pour moi, chaque rencontre avec un chien, un chat
                ou tout autre compagnon à quatre pattes est une véritable
                rencontre d’âme, empreinte d’émotion et d’authenticité. C’est
                cette relation singulière qui m’a donné envie de créer
                Deskampet, un espace où la confiance et la bienveillance guident
                chacune de mes actions.
              </p>
            </div>
          </div>
          {/* Qui suis-je ? */}
          <div className="values-info" style={{ padding: "60px 0 60px 0" }}>
            <div className="values-text" style={{ paddingRight: 45 }}>
              <h3 className="section-heading text-uppercase">Qui suis-je ?</h3>
              <p>
                Je m’appelle Lucie, et avant d’être PetSitter, je suis avant
                tout une grande passionnée du monde animal. Au fil des années,
                j’ai acquis une expérience précieuse auprès de nombreux
                compagnons, qu’ils soient jeunes, âgés, joueurs, timides ou
                nécessitant une attention particulière. Mon approche repose sur
                la douceur, le respect des besoins propres à chaque animal et
                l’écoute attentive des attentes de leurs propriétaires. Mon
                objectif est simple : que chaque animal que l’on me confie se
                sente en sécurité, apaisé et aimé, comme s’il était encore
                auprès de sa propre famille.
              </p>
            </div>
            <img
              src={Dog}
              width="250px"
              height="250px"
              style={{ borderRadius: 25 }}
            />
          </div>
          {/* Qui est Doska ? */}
          <div className="values-info">
            <img
              src={CockerSpaniel}
              width="250px"
              height="250px"
              style={{ borderRadius: 25 }}
            />
            <div className="values-text" style={{ paddingLeft: 45 }}>
              <h3 className="section-heading text-uppercase">
                Qui est Doska ?
              </h3>
              <p>
                Doska, c’est bien plus qu’un simple cocker pour moi. Elle a
                partagé ma vie pendant plus de quinze ans et m’a appris à quel
                point les animaux peuvent transformer notre quotidien par leur
                fidélité, leur tendresse et leur énergie. Prendre soin d’elle,
                l’accompagner tout au long de sa vie et jusqu’à ses derniers
                instants a été une expérience profondément marquante. C’est
                grâce à elle que j’ai compris la valeur du dévouement, de la
                patience et de l’amour inconditionnel. Aujourd’hui encore, son
                souvenir m’accompagne dans chaque service que je propose, car
                Deskampet, c’est aussi un hommage à ce lien unique que nous
                avons partagé.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="propos">
        <div className="titres" style={{ paddingTop: 0 }}>
          <h3 className="section-heading text-uppercase">Mes valeurs</h3>
          <hr style={{ width: 270, border: "solid 1px" }} />
          <br />
        </div>
        <div className="values">
          {/* Bienveillance */}
          <div
            className="value"
            style={{ backgroundColor: "#ffcece", color: "#150e38" }}
          >
            <i className="fa-solid fa-heart fa-2x" />
            <h4>Bienveillance</h4>
            <p>
              Chaque animal mérite d’être accueilli avec douceur, respect et
              considération. La bienveillance est au centre de mon approche, que
              ce soit lors d’une simple balade, d’une garde de quelques heures
              ou d’un accompagnement sur le long terme. Je prends le temps
              d’écouter, de rassurer et de créer un climat apaisant où chaque
              compagnon peut se sentir en sécurité et pleinement lui-même.
            </p>
          </div>
          {/* Passion */}
          <div
            className="value"
            style={{ backgroundColor: "#5fb9a9", color: "white" }}
          >
            <i className="fa-solid fa-paw fa-2x" />
            <h4>Passion</h4>
            <p>
              Les animaux ne sont pas seulement un métier pour moi, ils sont une
              véritable source de joie et d’inspiration. Cette passion guide mes
              choix au quotidien et me pousse à m’investir pleinement dans
              chacune de mes missions. Que ce soit pour jouer, prendre soin ou
              simplement partager un moment de calme, je mets toute mon énergie
              et mon cœur à offrir aux animaux une expérience positive et
              enrichissante.
            </p>
          </div>
          {/* Confiance */}
          <div
            className="value"
            style={{
              backgroundColor: "#fff9f9",
              color: "#150e38",
              border: "1px solid",
            }}
          >
            <i className="fa-solid fa-handshake fa-2x" />
            <h4>Confiance</h4>
            <p>
              Laisser son compagnon entre les mains de quelqu’un d’autre demande
              une grande confiance. C’est pourquoi je privilégie toujours la
              transparence et la communication avec les propriétaires. Mon
              objectif est que vous puissiez partir l’esprit tranquille, en
              sachant que votre animal est respecté, aimé et accompagné avec
              toute l’attention qu’il mérite. La confiance mutuelle est la clé
              d’une relation durable et sereine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
