"use client";
import React from "react";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { Tabs } from "@/components/Tabs";
import { Tag } from "@/components/Tag";
import { MenuRow } from "@/components/MenuRow";
import { Badge } from "@/components/Badge";
import { MENU, TABS } from "@/lib/menu-data";
import { initPomeloMotion } from "@/lib/motion";
import { useCurtainNav } from "../CurtainProvider";

// Maps the shared NavBar indices to routes (Inicio / Café / Brunch / Carta / Nosotros).
const NAV_TARGETS = ["/", "/#cafe", "/#brunch", "/carta", "/#nosotros"];

function CitrusDecor() {
  return (
    <React.Fragment>
      <span className="cdot" style={{ width: 130, height: 130, background: "var(--coral-300)", top: -46, right: "16%", opacity: 0.5 }} />
      <span className="cdot" style={{ width: 70, height: 70, background: "var(--blue-300)", bottom: 30, left: "6%", opacity: 0.55 }} />
      <span className="cdot" style={{ width: 40, height: 40, background: "var(--leaf-400)", top: 40, right: "8%", opacity: 0.6 }} />
    </React.Fragment>
  );
}

function Masthead() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--surface-sunken)", borderBottom: "1.5px solid var(--sand-300)" }}>
      <CitrusDecor />
      <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "var(--space-8)", alignItems: "center", padding: "var(--space-8) var(--container-pad)" }}>
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>
            Producto local · de temporada
          </span>
          <h1 style={{ margin: "var(--space-3) 0 0", fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(3.5rem,9vw,7rem)", lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--espresso-900)" }}>
            La Carta
          </h1>
          <div style={{ fontFamily: "var(--font-script-bold)", color: "var(--accent)", fontSize: "clamp(2.2rem,5.5vw,4rem)", lineHeight: 0.85, marginTop: "-0.05em", marginLeft: "0.15em", transform: "rotate(-4deg)", transformOrigin: "left center" }}>
            hecho con cariño
          </div>
          <p style={{ margin: "var(--space-6) 0 var(--space-5)", maxWidth: "46ch", color: "var(--text-muted)", fontSize: "var(--text-md)", lineHeight: 1.65 }}>
            Cocinamos cada mañana con producto de mercado y café de especialidad. Recetas
            de temporada, generosas y con chispa, pensadas para compartir sin prisa.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Badge tone="espresso">Brunch · 9:00 – 14:00</Badge>
            <Badge tone="coral">Café · desde 8:00</Badge>
          </div>
          <div style={{ display: "flex", gap: "var(--space-5)", flexWrap: "wrap", marginTop: "var(--space-4)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--leaf-400)" }} />Opciones veganas</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--blue-400)" }} />De temporada</span>
          </div>
        </div>
        <div style={{ borderRadius: "var(--radius-xl)", aspectRatio: "3/4", minHeight: 260, backgroundImage: "url('/assets/menu/french-toast-w.jpg')", backgroundSize: "cover", backgroundPosition: "center", boxShadow: "var(--shadow-md)" }} />
      </div>
    </section>
  );
}

function FeaturedDish({ dish, tint, index }) {
  const dark = tint === "var(--espresso-900)";
  const fg = "var(--cream-50)";
  const flip = index % 2 === 1;
  const badgeBg = dark ? "var(--accent)" : "var(--cream-50)";
  const badgeFg = dark ? "var(--cream-50)" : "var(--coral-600)";
  return (
    <div data-reveal="scale" style={{ display: "grid", gridTemplateColumns: flip ? "1fr 1.15fr" : "1.15fr 1fr", gap: 0, background: tint, color: fg, borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", marginBottom: "var(--space-7)" }}>
      <div style={{ order: flip ? 2 : 1, minHeight: 320, backgroundImage: `url('${dish.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ order: flip ? 1 : 2, padding: "clamp(1.6rem,3vw,2.8rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span style={{ alignSelf: "flex-start", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", background: badgeBg, color: badgeFg, padding: "5px 12px", borderRadius: "var(--radius-pill)", marginBottom: "var(--space-4)" }}>
          ★ {dish.badge}
        </span>
        <h3 style={{ margin: "0 0 var(--space-3)", fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(1.6rem,3vw,2.3rem)", lineHeight: 1.05 }}>
          {dish.name}
        </h3>
        <p style={{ margin: "0 0 var(--space-5)", lineHeight: 1.65, opacity: 0.95, maxWidth: "46ch" }}>{dish.description}</p>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, borderTop: `1.5px solid color-mix(in srgb, ${fg} 30%, transparent)`, paddingTop: "var(--space-4)" }}>
          <span style={{ fontStyle: "italic", opacity: 0.85, fontSize: "var(--text-sm)" }}>{dish.note}</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "var(--text-2xl)", whiteSpace: "nowrap" }}>{dish.price}</span>
        </div>
      </div>
    </div>
  );
}

function Section({ grp, accent }) {
  return (
    <section data-reveal style={{ marginBottom: "var(--space-7)" }}>
      <h2 style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "var(--text-xl)", margin: "0 0 var(--space-4)", color: "var(--espresso-900)" }}>
        {grp.g}
        <span style={{ flex: 1, height: 1.5, background: "var(--sand-300)" }} />
        <span style={{ fontFamily: "var(--font-script)", fontStyle: "normal", fontWeight: 400, fontSize: "var(--text-lg)", color: accent }}>{grp.items.length} platos</span>
      </h2>
      <div className="menu-grid">
        {grp.items.map((it) => <MenuRow key={it.name} {...it} />)}
      </div>
    </section>
  );
}

export default function CartaPage() {
  const navTo = useCurtainNav();
  const [tab, setTab] = React.useState(0);
  const [veg, setVeg] = React.useState(false);
  const key = TABS[tab];
  const data = MENU[key];
  const accent = "var(--accent)";
  const filt = (its) => (veg ? its.filter((i) => (i.tags || []).some((t) => /veg/i.test(t))) : its);

  React.useEffect(() => {
    document.title = "La Carta — Pomelo";
    const cleanup = initPomeloMotion();
    return cleanup;
  }, [tab, veg]);

  const onNavigate = (i) => {
    if (i === 3) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    navTo(NAV_TARGETS[i]);
  };

  return (
    <div className="menu-page">
      <div style={{ borderBottom: "1px solid var(--border-subtle)", position: "sticky", top: 0, background: "color-mix(in srgb,var(--surface-page) 90%,transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 40 }}>
        <NavBar brand="Pomelo" items={["Inicio", "Café", "Brunch", "Carta", "Nosotros"]} activeIndex={3}
          onNavigate={onNavigate}
          cta={<Button size="sm" onClick={() => navTo("/reservar")}>Reservar</Button>} />
      </div>

      <Masthead />

      <div style={{ position: "sticky", top: 66, zIndex: 30, background: "color-mix(in srgb,var(--surface-page) 92%,transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", paddingBlock: "var(--space-4)" }}>
          <Tabs tabs={TABS} value={tab} onChange={setTab} style={{ borderBottom: "none" }} />
          <Tag selected={veg} onClick={() => setVeg((v) => !v)}>Solo vegetariano / vegano</Tag>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "var(--space-7)", paddingBottom: "var(--space-9)" }}>
        <FeaturedDish dish={data.hero} tint={data.tint} index={tab} />
        {data.sections.map((grp) => {
          const items = filt(grp.items);
          if (!items.length) return null;
          return <Section key={grp.g} grp={{ ...grp, items }} accent={accent} />;
        })}

        <div data-reveal="scale" style={{ textAlign: "center", marginTop: "var(--space-8)", padding: "var(--space-7)", background: "var(--surface-sunken)", borderRadius: "var(--radius-xl)", position: "relative", overflow: "hidden" }}>
          <span className="cdot" style={{ width: 90, height: 90, background: "var(--coral-300)", top: -30, left: "12%", opacity: 0.5 }} />
          <span className="cdot" style={{ width: 54, height: 54, background: "var(--blue-300)", bottom: -12, right: "14%", opacity: 0.6 }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontFamily: "var(--font-script-bold)", color: "var(--accent)", fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 0.9 }}>nos vemos ahí</div>
            <p style={{ margin: "var(--space-3) auto var(--space-5)", maxWidth: "52ch", color: "var(--text-muted)" }}>
              Los precios incluyen IVA. Adaptamos muchos platos a alergias e intolerancias —
              pregúntanos. <Badge tone="leaf" solid>Vegano</Badge> y <Badge tone="leaf">Vegetariano</Badge> señalados en cada plato.
            </p>
            <Button size="lg" onClick={() => navTo("/reservar")}>Reservar mesa</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
