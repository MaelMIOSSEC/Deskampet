import { useState } from "react";

import MapModal from "../components/Home/MapModal.tsx";
import { HomeCarousel } from "../components/Home/HomeCarousel.tsx";

import LucieProfilePicture from "../assets/presentation-lucie-chien-champ.jpeg";

import { Phone, AtSign } from "lucide-react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="masthead mt-12.5" id="header">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 zone my-5">
            <p className="p-masthead text-[#150e38]">
              Deskampet est une entreprise professionnelle de services
              animaliers qui intervient sur la région de Landerneau et ses
              alentours. Elle vous propose des services de visites à votre
              domicile pour vos chats, chiens, NAC et chevaux. Mais aussi un
              service de promenades canines.
              <br />
              Deskampet vous promet des soins professionnels et bienveillants.
              Votre animal mérite le meilleur, même en votre absence.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src={LucieProfilePicture}
              width="100%"
              alt="Image illustrating Lucie squatting and a dog. They are both in a garden."
            />
          </div>
        </div>
      </header>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <div className="titres">
              <h3 className="section-heading text-uppercase">À PROPOS</h3>
              <hr className="w-67.5" />
              <br />
            </div>
          </div>
          <div className="row align-items-center text-[#150e38] text-center">
            <div className="col-lg-12">
              <p>
                Vous vous demandez certainement qui se cache derrière ce sourire
                ? Moi, c’est Lucie. Si vous êtes habitant de{" "}
                <strong>Landerneau</strong>, nous nous sommes certainement déjà
                croisés. Et oui, originaire de la Cité de la Lune depuis 31 ans,
                j’ai décidé de lancer mon entreprise de{" "}
                <strong>services animaliers</strong> en Avril 2024.
              </p>
              <p>
                Grande passionnée des animaux depuis toujours, j’ai comme de
                nombreux enfants été dans un premier temps l’heureuse
                propriétaire de poissons rouges et d’un cochon d’Inde. À
                l’époque, je rêvais de devenir vétérinaire. C’est à l’âge de 15
                ans que j’ai tenu mon premier grand rôle : être propriétaire et
                responsable de Doska notre cocker.
              </p>
              <p>
                Passionnée par les langues, mon parcours scolaire m’a finalement
                dirigé vers une Licence Littéraire en espagnol. Après avoir
                travaillé quelques années dans le commerce landernéen, je décide
                de <strong>repartir à zéro</strong>. La passion des animaux est
                intacte, je découvre (enfin!) l’équitation et j’apprends la
                <strong> patience</strong>. D’un autre côté, Doska vieillit et
                je prends particulièrement à cœur d’effectuer ses différents
                soins.
              </p>
              <p>
                Me revoilà donc plus motivée que jamais sur les bancs de l’école
                à <strong>29 ans</strong> pour réaliser mon rêve d’enfant :
                devenir <strong>Auxiliaire Vétérinaire</strong>. C’est au cours
                de cette formation que j’ai obtenu l’
                <strong>
                  <a href="https://www.acaced.fr/acaced/" target="_blank">
                    <u>ACACED</u>
                  </a>{" "}
                  (Attestation de Connaissances pour les Animaux d’Espèces
                  Domestiques)
                </strong>
                , formation
                <strong> obligatoire et indispensable</strong> pour pouvoir
                exercer auprès de vos animaux.
              </p>
              <p>
                Aujourd’hui, je combine les deux casquettes en tant qu’
                <strong>auxiliaire vétérinaire</strong> en remplacement et{" "}
                <strong>fondatrice de Deskampet</strong>. Vous l’avez bien
                compris,
                <strong>
                  {" "}
                  prendre soin des autres c’est dans mon ADN depuis toujours
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div id="clients" className="mb-12.5">
        <div className="text-center">
          <div className="titres">
            <h3 className="section-heading text-uppercase">
              Suivez Deskampet sur Instagram
            </h3>
            <hr className="w-67.5" />
            <br />
          </div>
        </div>
        <div className="homepage-wrapper">
          <HomeCarousel />
        </div>
      </div>
      <div className="row contact" id="contact">
        <div className="text-center col-lg-6 flex align-center justify-center">
          <div className="zone">
            <h4 className="section-heading text-uppercase max-w-75">
              Zone couverte
            </h4>
            <hr className="w-52.5 text-[#150e38]" />
            <p className="max-w-100">
              Landerneau et dans un secteur de 15 km à la ronde.
            </p>
            <button
              className="btn btn-outline-primary btn-sm"
              data-bs-toggle="modal"
              onClick={() => setShowModal(true)}
            >
              Voir la carte
            </button>
            <h4 className="section-heading text-uppercase mt-4">
              CONTACTEZ-MOI
            </h4>
            <hr className="w-52.5 text-[#150e38]" />
            <div className="col-lg-4 my-3 my-lg-0 flex flex-lg-row justify-content-around max-w-100 pb-2.5">
              <Phone size={20} />
              <AtSign size={20} />
            </div>
            <h4>06 03 01 37 00</h4>
            <h4>deskampet@gmail.com</h4>
          </div>
        </div>
        <div className="text-center col-lg-6 flex align-center justify-center">
          <div className="zone">
            <h4 className="section-heading text-uppercase max-w-100">
              Agréments / Certifications
            </h4>
            <hr className="w-52.5 text-[#150e38]" />
            <ul className="list-unstyled">
              <li>
                <strong>✅ ACACED :</strong> Attestation de Connaissances pour
                les Animaux d’Espèces Domestiques
              </li>
              <li>
                <strong>✅ Auxiliaire Vétérinaire :</strong> Formation et
                expérience validée
              </li>
            </ul>
            <p className="text-muted">
              Des services professionnels garantis pour le bien-être de vos
              animaux.
            </p>
          </div>
        </div>
      </div>
      <MapModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}
