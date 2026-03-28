import { Heart, PawPrint, Handshake, type LucideIcon } from "lucide-react";

interface ValueData {
  id: string;
  Icone: LucideIcon;
  label: string;
  title: string;
  quote: string;
  text: string;
  accent: string;
  bg: string;
  cardBg: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
  quoteColor: string;
  delay: string;
}

const values: ValueData[] = [
  {
    id: "bienveillance",
    Icone: Heart,
    label: "01",
    title: "Bienveillance",
    quote: "« Chaque animal est unique, chaque soin l'est aussi. »",
    text: "Chaque animal mérite d'être accueilli avec douceur, respect et considération. La bienveillance est au centre de mon approche, que ce soit lors d'une simple balade, d'une garde de quelques heures ou d'un accompagnement sur le long terme. Je prends le temps d'écouter, de rassurer et de créer un climat apaisant où chaque compagnon peut se sentir en sécurité et pleinement lui-même.",
    accent: "#e8746a",
    bg: "#fff5f5",
    cardBg: "#fff0ee",
    iconBg: "rgba(232,116,106,0.12)",
    iconColor: "#e8746a",
    textColor: "#150e38",
    quoteColor: "#b85a52",
    delay: "0ms",
  },
  {
    id: "passion",
    Icone: PawPrint,
    label: "02",
    title: "Passion",
    quote: "« Je mets tout mon cœur dans chaque mission. »",
    text: "Les animaux ne sont pas seulement un métier pour moi, ils sont une véritable source de joie et d'inspiration. Cette passion guide mes choix au quotidien et me pousse à m'investir pleinement dans chacune de mes missions. Que ce soit pour jouer, prendre soin ou simplement partager un moment de calme, je mets toute mon énergie et mon cœur à offrir aux animaux une expérience positive et enrichissante.",
    accent: "#fff",
    bg: "#5fb9a9",
    cardBg: "#52a99a",
    iconBg: "rgba(255,255,255,0.18)",
    iconColor: "#fff",
    textColor: "#fff",
    quoteColor: "rgba(255,255,255,0.75)",
    delay: "120ms",
  },
  {
    id: "confiance",
    Icone: Handshake,
    label: "03",
    title: "Confiance",
    quote: "« La transparence est la base d'une relation durable. »",
    text: "Laisser son compagnon entre les mains de quelqu'un d'autre demande une grande confiance. C'est pourquoi je privilégie toujours la transparence et la communication avec les propriétaires. Mon objectif est que vous puissiez partir l'esprit tranquille, en sachant que votre animal est respecté, aimé et accompagné avec toute l'attention qu'il mérite. La confiance mutuelle est la clé d'une relation durable et sereine.",
    accent: "#150e38",
    bg: "#f9f7ff",
    cardBg: "#f3f0fb",
    iconBg: "rgba(21,14,56,0.07)",
    iconColor: "#150e38",
    textColor: "#150e38",
    quoteColor: "#5f5a8a",
    delay: "240ms",
  },
];

export default function ValuesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .values-section {
          padding: 80px 24px 100px;
          background: #faf8f6;
          position: relative;
          overflow: hidden;
        }

        .values-section::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -120px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(95,185,169,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .values-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,206,206,0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .values-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .values-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5fb9a9;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .values-eyebrow::before,
        .values-eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #5fb9a9;
          opacity: 0.6;
        }

        .values-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 48px);
          font-weight: 600;
          color: #150e38;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .values-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #7a7a9a;
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
          }
        }

        .value-card {
          border-radius: 24px;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          cursor: default;
          animation: fadeSlideUp 0.6s ease both;
          position: relative;
          overflow: hidden;
        }

        .value-card::after {
          content: attr(data-label);
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 60px;
          font-weight: 600;
          opacity: 0.06;
          line-height: 1;
          color: inherit;
          pointer-events: none;
        }

        .value-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 50px rgba(21,14,56,0.12);
        }

        .value-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          flex-shrink: 0;
        }

        .value-icon-wrap i {
          font-size: 20px;
        }

        .value-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
          line-height: 1.1;
        }

        .value-divider {
          width: 28px;
          height: 2px;
          border-radius: 2px;
          margin-bottom: 16px;
          margin-top: 2px;
          opacity: 0.4;
        }

        .value-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
          margin-bottom: 20px;
          opacity: 0.88;
        }

        .value-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14.5px;
          font-style: italic;
          line-height: 1.5;
          padding: 12px 14px;
          border-radius: 10px;
          margin-top: auto;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="page-section" id="propos">
        <div className="titres">
          <h3
            className="section-heading text-uppercase"
            style={{ color: "#150e38" }}
          >
            CE QUI ME GUIDE
          </h3>
          <hr style={{ width: 270, border: "solid 1px" }} />
          <br />
        </div>

        <div className="values-grid">
          {values.map((v) => (
            <div
              key={v.id}
              className="value-card"
              data-label={v.label}
              style={{
                background: v.bg,
                color: v.textColor,
                animationDelay: v.delay,
              }}
            >
              <div className="value-icon-wrap" style={{ background: v.iconBg }}>
                <v.Icone style={{ color: v.iconColor }}  />
              </div>

              <h3 className="value-title" style={{ color: v.textColor }}>
                {v.title}
              </h3>

              <div
                className="value-divider"
                style={{ background: v.iconColor }}
              />

              <p className="value-text">{v.text}</p>

              <div
                className="value-quote"
                style={{
                  background: v.iconBg,
                  color: v.quoteColor,
                }}
              >
                {v.quote}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
