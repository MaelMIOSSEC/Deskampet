import { useState } from "react";
import {
  PawPrint,
  House,
  Timer,
  BadgeEuro,
  FileText,
  CalendarDays,
  MapPinHouse,
  Camera,
  LockKeyhole,
  Key,
  type LucideIcon,
} from "lucide-react";

interface QuestionData {
  id: string;
  question: string;
  reponse: string;
  Icone: LucideIcon;
}

const questions: QuestionData[] = [
  {
    id: "Services",
    question: "Quels types d'animaux prenez-vous en charge ?",
    reponse:
      "Je m'occupe des chiens, chats, NAC (lapins, rongeurs, oiseaux, reptiles…) et des chevaux. Si vous avez un doute sur votre animal, n'hésitez pas à me contacter — j'étudierai votre situation avec plaisir.",
    Icone: PawPrint,
  },
  {
    id: "Services",
    question: "Les visites se font-elles toujours à domicile ?",
    reponse:
      "Oui, toutes mes interventions ont lieu chez vous. Cela permet à votre animal de rester dans son environnement familier, ce qui réduit le stress et favorise son bien-être pendant votre absence.",
    Icone: House,
  },
  {
    id: "Services",
    question: "Combien de temps dure une visite ?",
    reponse:
      "Les visites pour chats et NAC durent environ 30 minutes. Les promenades pour chiens vont de 30 minutes à 1 heure. Pour les chevaux, la durée varie selon les soins à effectuer et est définie ensemble lors de la pré-visite.",
    Icone: Timer,
  },
  {
    id: "Tarifs",
    question: "La pré-visite est-elle payante ?",
    reponse:
      "Non, la pré-visite est totalement gratuite et sans engagement. C'est un moment essentiel pour faire connaissance avec vous et votre animal, et s'assurer que nous sommes bien en accord avant de démarrer.",
    Icone: FileText,
  },
  {
    id: "Tarifs",
    question: "Comment se passe le paiement ?",
    reponse:
      "Le paiement s'effectue à la fin de chaque prestation, ou mensuellement pour les missions régulières. J'accepte les espèces, les virements bancaires et les chèques emploi-service universel (CESU).",
    Icone: BadgeEuro,
  },
  {
    id: "Tarifs",
    question: "Y a-t-il une majoration pour les week-ends et jours fériés ?",
    reponse:
      "Les tarifs restent identiques en semaine, week-end et jours fériés. Les tarifs affichés sur ma page prestations sont ceux que vous paierez, sans aucune mauvaise surprise.",
    Icone: CalendarDays,
  },
  {
    id: "Pratique",
    question: "Quelle est votre zone d'intervention ?",
    reponse:
      "J'interviens à Landerneau et dans un rayon de 10 km environ (La Roche-Maurice, Pencran, Le Folgoët…). Pour une localisation plus éloignée, contactez-moi : selon les disponibilités, des déplacements supplémentaires peuvent être envisagés.",
    Icone: MapPinHouse,
  },
  {
    id: "Pratique",
    question: "Comment gérez-vous les clés ou l'accès à mon domicile ?",
    reponse:
      "Lors de la pré-visite, nous convenons ensemble du mode d'accès (clés, boîte à clés, digicode…). Un exemplaire de clé peut m'être confié sous ma responsabilité, et toute remise est mentionnée dans le contrat de prestation.",
    Icone: Key,
  },
  {
    id: "Confiance",
    question: "Êtes-vous assurée en cas d'accident ?",
    reponse:
      "Oui, je dispose d'une assurance Responsabilité Civile Professionnelle. En cas d'incident, vous êtes couverts. Je peux vous communiquer les détails de ma couverture sur simple demande.",
    Icone: LockKeyhole,
  },
  {
    id: "Confiance",
    question: "Aurai-je des nouvelles de mon animal pendant mon absence ?",
    reponse:
      "Bien sûr ! Après chaque visite, je vous envoie un compte-rendu accompagné de photos ou d'une courte vidéo. Partir l'esprit tranquille, c'est aussi ça mon rôle.",
    Icone: Camera,
  },
];

const QuestionsSection = () => {
  const [displayQuestions, setDisplayQuestions] = useState(questions);

  function filterQuestion(buttonId: string) {
    if (buttonId === "Tous") {
      setDisplayQuestions(questions);
    } else {
      const filtered = questions.filter((q) => q.id === buttonId);
      setDisplayQuestions(filtered);
    }
  }

  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {["Tous", "Services", "Tarifs", "Animaux", "Pratique", "Confiance"].map(
          (category) => (
            <button
              key={category}
              onClick={() => filterQuestion(category)}
              className="btn btn-outline-secondary btn-sm px-4 mx-1 w-29"
            >
              {category}
            </button>
          ),
        )}
      </div>

      <p className="mt-4 text-center text-gray-600">
        {displayQuestions.length} questions affichées
      </p>

      <div className="mt-10 space-y-4">
        {displayQuestions.map((question, index) => (
          <details key={index} className="border-2 rounded-3xl">
            <summary
              className="p-4 font-medium text-lg text-gray-900 cursor-pointer hover:text-[#5fb9a9] items-center"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {question.question}
              <div className="p-2.5 rounded-[10px] bg-white shadow-[2px_1px_6px_gray]">
                <question.Icone />
              </div>
            </summary>
            <div className="p-4 bg-gray-100 italic">{question.reponse}</div>
          </details>
        ))}
      </div>
    </>
  );
};

export default QuestionsSection;
