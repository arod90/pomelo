"use client";
import React from "react";
import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { Card } from "@/components/Card";
import { initPomeloMotion } from "@/lib/motion";
import { useCurtainNav } from "./CurtainProvider";

const HERO_IMAGES = [
  "/assets/hero/pomelo-1.jpg",
  "/assets/hero/pomelo-2.jpg",
  "/assets/hero/pomelo-3.jpg",
  "/assets/hero/pomelo-4.jpg",
  "/assets/hero/pomelo-5.jpg",
];

function go(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
}

/* ---------- Hero: per-letter image-clipped POMELO ---------- */
function Hero({ onReserve, onSeeMenu }) {
  const letters = "POMELO".split("");
  return (
    <header id="inicio" style={{ position: "relative", zIndex: 2, minHeight: "calc(100svh - 72px)", display: "flex", flexDirection: "column", justifyContent: "center", paddingBlock: "var(--space-5)", overflowX: "hidden" }}>
      {/* Signature flourish: a single continuous line that twirls above/behind the
          POMELO title, then shoots down the right. Scoped to the hero with an
          aspect-preserving viewBox so the curves never distort. */}
      <svg className="hero-doodle" style={{ zIndex: 0 }} viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path pathLength="1" d="M -60 232 C 168 150 344 150 486 214 C 582 258 620 250 664 212 C 742 150 722 84 652 104 C 590 122 620 232 726 244 C 806 252 866 214 924 182 C 1086 104 1268 78 1424 152 C 1524 200 1522 366 1514 520 C 1506 662 1550 762 1516 886" />
      </svg>
      <div style={{ position: "relative", zIndex: 1, width: "100%", boxSizing: "border-box", paddingInline: "clamp(1rem, 3vw, 3.5rem)", overflow: "hidden" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap", lineHeight: 0.78 }}>
            {letters.map((ch, i) => (
              <span
                key={i}
                className="pomelo-letter"
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(3.75rem, 18.5vw, 19rem)",
                  letterSpacing: "-0.045em",
                  backgroundImage: `url("${HERO_IMAGES[i % HERO_IMAGES.length]}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>
        <h1 style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", margin: -1 }}>Pomelo</h1>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.05em", marginBottom: "var(--space-6)", paddingRight: "clamp(0.5rem, 3vw, 2.5rem)" }}>
            <span className="hero-script" style={{ display: "inline-block", whiteSpace: "nowrap", fontFamily: "var(--font-script-bold)", color: "var(--accent)", fontSize: "clamp(1.6rem,4vw,3.5rem)", lineHeight: 0.8, transform: "rotate(-4deg)", transformOrigin: "center center" }}>
              todo el día
            </span>
          </div>
          <div className="hero-grid">
            <h2 className="hero-fade" style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(1.9rem,3.4vw,3rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Brunch &amp; café de<br />especialidad en el<br />corazón de la ciudad
            </h2>
            <div className="hero-fade delay">
              <p style={{ margin: "0 0 var(--space-3)", color: "var(--text-muted)", fontSize: "var(--text-md)", maxWidth: "42ch" }}>
                Creemos que el café y la comida son la mejor excusa del día: para reunirse sin
                prisa, tomárselo con calma y sentirse como en casa desde el primer sorbo.
              </p>
              <p style={{ margin: "0 0 var(--space-5)", fontStyle: "italic", fontWeight: 700 }}>¡Bienvenido a Pomelo!</p>
              <div className="cta-row">
                <Button size="lg" onClick={onReserve}>Reservar</Button>
                <Button size="lg" variant="secondary" onClick={onSeeMenu}>Ver la carta</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Seasonal coral feature block ---------- */
function Seasonal() {
  return (
    <section className="container" style={{ marginBottom: "var(--section-gap)", position: "relative", zIndex: 1 }}>
      <Card elevation="accent" padding="none" data-reveal="scale" style={{ borderRadius: "var(--radius-xl)", padding: "clamp(2rem,5vw,4.5rem)" }}>
        <div data-reveal style={{ textAlign: "center", color: "var(--text-on-accent)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>
          Esta primavera en Pomelo
        </div>
        <div data-write style={{ textAlign: "center", fontFamily: "var(--font-script-bold)", color: "var(--cream-50)", fontSize: "clamp(2.6rem,7vw,6rem)", lineHeight: 0.95, margin: "var(--space-4) 0 var(--space-7)" }}>
          esto sabe a primavera
        </div>
        <div className="feat-cols" data-stagger>
          <FeatureCol data-reveal title="Brunch de temporada"
            body="Nuestro brunch abraza la primavera: burrata, albahaca y melocotón junto a una nueva focaccia y torrijas de brioche con crema de vainilla."
            cta="Ver el brunch" arrow="left" onClick={() => go("brunch")} />
          <div data-reveal className="feat-divider" style={{ background: "color-mix(in srgb, var(--cream-50) 40%, transparent)" }} />
          <FeatureCol data-reveal title="Café invitado del mes"
            body="Cada estación traemos un nuevo café de especialidad para tomar aquí o llevar a casa. Este mes, un tueste artesano con notas de cacao y naranja."
            cta="Ver el café" arrow="right" onClick={() => go("cafe")} />
        </div>
      </Card>
    </section>
  );
}
function FeatureCol({ title, body, cta, arrow, onClick, ...rest }) {
  return (
    <div {...rest}>
      <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", fontSize: "var(--text-lg)" }}>{title}</h3>
      <p style={{ margin: "0 0 var(--space-5)", lineHeight: 1.6, opacity: 0.95 }}>{body}</p>
      <button onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--cream-50)", fontFamily: "var(--font-display)", fontWeight: 700, fontStyle: "italic", fontSize: "var(--text-md)", display: "inline-flex", gap: 8 }}>
        {arrow === "left" && <span>←</span>}{cta}{arrow === "right" && <span>→</span>}
      </button>
    </div>
  );
}

/* ---------- Big-word section (Café / Brunch) with script overlay ---------- */
function BigWordSection({ id, word, script, italicLead, body, extraTitle, extraBody, flip }) {
  return (
    <section id={id} className="container" style={{ marginBottom: "var(--section-gap)", position: "relative", zIndex: 1 }}>
      <div style={{ position: "relative" }}>
        <div data-reveal aria-hidden style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(5rem,20vw,17rem)", lineHeight: 0.85, letterSpacing: "-0.03em", color: "var(--sand-300)", textTransform: "uppercase" }}>{word}</div>
        <span data-reveal style={{ position: "absolute", left: flip ? "auto" : "8%", right: flip ? "8%" : "auto", bottom: "-0.1em", fontFamily: "var(--font-script-bold)", color: "var(--accent)", fontSize: "clamp(2.5rem,9vw,7rem)", lineHeight: 0.8 }}>{script}</span>
      </div>
      <div className="two-col" style={{ marginTop: "var(--space-6)" }} data-stagger>
        <h3 data-reveal style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(1.5rem,2.6vw,2rem)", lineHeight: 1.1, maxWidth: "18ch" }}>{italicLead}</h3>
        <div data-reveal>
          <p style={{ margin: "0 0 var(--space-4)", color: "var(--text-muted)", lineHeight: 1.6 }}>{body}</p>
          <p style={{ margin: "0 0 4px", fontWeight: 700, fontStyle: "italic" }}>{extraTitle}</p>
          <p style={{ margin: 0, color: "var(--text-muted)", lineHeight: 1.6 }}>{extraBody}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- About / doodle scene ---------- */
function About() {
  return (
    <section id="nosotros" style={{ position: "relative", zIndex: 1, marginBottom: "var(--section-gap)" }}>
      <img src="/assets/storefront.svg" alt="" aria-hidden="true" style={{ position: "absolute", top: "-4%", left: 0, width: "100%", opacity: 0.5, pointerEvents: "none", zIndex: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "clamp(5rem, 26vw, 22rem)" }}>
        <div className="two-col" style={{ alignItems: "start" }} data-stagger>
          <div data-reveal style={{ position: "relative" }}>
            <span style={{ fontFamily: "var(--font-script-bold)", color: "var(--accent)", fontSize: "clamp(2.4rem,6vw,4rem)", lineHeight: 0.9 }}>un rincón cálido</span>
            <h3 style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "var(--text-xl)", maxWidth: "16ch" }}>
              Brunch cada día de 9:00 a 14:00, en pleno casco antiguo
            </h3>
          </div>
          <p data-reveal style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
            Siéntate, respira y quédate el rato que quieras: nosotros nos ocupamos del resto.
            En Pomelo el brunch es ese momento del día que no hay prisa por terminar. Eso sí,
            para que no te quedes sin sitio, mejor reserva mesa…
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
const hd = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-sm)", letterSpacing: "var(--tracking-wide)", margin: "0 0 var(--space-3)" };
const ft = { margin: "0 0 6px", color: "var(--text-muted)", lineHeight: 1.5 };
function Glyph({ d, fill }) { return <svg width="18" height="18" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="1.8"><path d={d} /></svg>; }

function Footer({ onReserve }) {
  return (
    <footer style={{ position: "relative" }}>
      <div className="container">
        <div aria-hidden style={{ fontFamily: "var(--font-script)", color: "var(--sand-300)", fontSize: "clamp(4rem,14vw,11rem)", lineHeight: 0.8, textAlign: "center", pointerEvents: "none" }}>nos vemos ahí</div>
        <hr style={{ border: "none", borderTop: "1.5px solid var(--accent)", margin: "0 0 var(--space-6)" }} />
        <div className="three-col" style={{ paddingBottom: "var(--space-7)" }} data-stagger>
          <div data-reveal>
            <h4 style={hd}>POMELO CIUDAD</h4>
            <p style={ft}>Calle Mayor 5<br />28013 Madrid</p>
            <p style={ft}><a href="tel:+34910000000">+34 91 000 00 00</a></p>
            <div style={{ display: "flex", gap: 10, marginTop: "var(--space-3)" }}>
              <IconButton label="Instagram" variant="solid"><Glyph d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.5 1.6 1s.8 1 1 1.6c.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3-.2.6-.5 1.1-1 1.6s-1 .8-1.6 1c-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.2-1.1-.5-1.6-1s-.8-1-1-1.6c-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3.2-.6.5-1.1 1-1.6s1-.8 1.6-1c.6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.3-3.1a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill /></IconButton>
              <IconButton label="Facebook" variant="solid"><Glyph d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h2.5l.5-3H14V9Z" fill /></IconButton>
            </div>
          </div>
          <div data-reveal>
            <h4 style={hd}>CAFÉ Y PASTELERÍA</h4>
            <p style={ft}>Lunes a viernes · 8:00 – 16:00</p>
            <p style={ft}>Sábado · 8:00 – 18:00</p>
            <p style={ft}>Domingo y festivos · 8:00 – 14:00</p>
          </div>
          <div data-reveal>
            <h4 style={hd}>BRUNCH</h4>
            <p style={ft}>Todo el día · 9:00 – 14:00</p>
            <div style={{ display: "flex", gap: 10, marginTop: "var(--space-4)" }}>
              <Button onClick={onReserve}>Reservar</Button>
              <Button variant="secondary">Gifting</Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "var(--espresso-950)", color: "var(--cream-100)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, padding: "var(--space-4) var(--container-pad)", fontSize: "var(--text-sm)" }}>
          <span>© Pomelo 2026 — Todos los derechos reservados</span>
          <span style={{ display: "flex", gap: "var(--space-5)" }}><a style={{ color: "var(--cream-100)" }} href="#">Trabaja con nosotros</a><a style={{ color: "var(--cream-100)" }} href="#">Contacto</a><a style={{ color: "var(--cream-100)" }} href="#">Legal</a></span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Responsive site header ---------- */
function SiteNav({ active, onNav, onReserve }) {
  const [open, setOpen] = React.useState(false);
  const items = [{ l: "Inicio" }, { l: "Café", s: "desde 8:00" }, { l: "Brunch", s: "9:00 – 14:00" }, { l: "Carta" }, { l: "Nosotros" }];
  const click = (i) => { setOpen(false); onNav(i); };
  const Item = ({ it, i }) => (
    <button className={"snav-item" + (active === i ? " active" : "")} onClick={() => click(i)}>
      <span>{it.l}</span>{it.s && <span className="snav-sub">{it.s}</span>}
    </button>
  );
  return (
    <div className="sticky-nav">
      <div className="snav">
        <button className="snav-brand" onClick={() => click(0)}>Pomelo</button>
        <div className="snav-right">
          <ul className="snav-links">
            {items.map((it, i) => <li key={it.l}><Item it={it} i={i} /></li>)}
          </ul>
          <Button size="sm" onClick={onReserve}>Reservar</Button>
          <button className="snav-burger" aria-label="Menú" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <React.Fragment><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></React.Fragment>
                    : <React.Fragment><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></React.Fragment>}
            </svg>
          </button>
        </div>
      </div>
      <div className={"snav-panel" + (open ? " open" : "")}>
        {items.map((it, i) => <Item key={it.l} it={it} i={i} />)}
      </div>
    </div>
  );
}

export default function Page() {
  const [nav, setNav] = React.useState(0);
  const navTo = useCurtainNav();
  const reserve = () => navTo("/reservar");
  const seeMenu = () => navTo("/carta");
  React.useEffect(() => {
    document.title = "Pomelo — Brunch & café de especialidad";
    const cleanup = initPomeloMotion();
    const id = (window.location.hash || "").replace("#", "");
    if (id) setTimeout(() => go(id), 260);
    return cleanup;
  }, []);
  const onNav = (i) => {
    setNav(i);
    const acts = [() => go("inicio"), () => go("cafe"), () => go("brunch"), () => seeMenu(), () => go("nosotros")];
    acts[i]();
  };
  return (
    <React.Fragment>
      <SiteNav active={nav} onNav={onNav} onReserve={reserve} />
      <Hero onReserve={reserve} onSeeMenu={seeMenu} />
        <Seasonal />
        <BigWordSection id="cafe" word="Café" script="todo el día"
          italicLead="Café de especialidad en un ambiente cálido y acogedor"
          body="Trabajamos distintos métodos de extracción para cada gusto: espresso intenso, capuchino cremoso, flat white sedoso, filtros de origen…"
          extraTitle="¿El café no es lo tuyo?"
          extraBody="Prueba nuestras bebidas blancas — chai, matcha — tés, zumos frescos y refrescos de la casa." />
        <BigWordSection id="brunch" word="Brunch" script="9 – 14h" flip
          italicLead="Recetas frescas de mercado, generosas y de temporada"
          body="En Pomelo el brunch son platos coloridos, generosos y con chispa, hechos cada mañana con producto local y de temporada."
          extraTitle="¡Cada estación, su brunch!"
          extraBody="Tres meses para descubrir nuevas recetas dulces y saladas, imaginadas por nuestra chef y su equipo." />
        <About />
      <Footer onReserve={reserve} />
    </React.Fragment>
  );
}
