"use client";
import React from "react";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Radio } from "@/components/Radio";
import { Checkbox } from "@/components/Checkbox";
import { Card } from "@/components/Card";
import { Toast } from "@/components/Toast";
import { initPomeloMotion } from "@/lib/motion";
import { useCurtainNav } from "../CurtainProvider";

const NAV_TARGETS = ["/", "/#cafe", "/#brunch", "/carta", "/#nosotros"];
const STEPS = ["Fecha & personas", "Tus datos", "Confirmación"];
const TIMES = ["9:00", "9:30", "10:00", "10:30", "11:00", "12:00", "12:30", "13:30"];

function Stepper({ step }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: "var(--space-6)", flexWrap: "wrap" }}>
      {STEPS.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, background: i <= step ? "var(--accent)" : "var(--surface-sunken)", color: i <= step ? "var(--text-on-accent)" : "var(--text-muted)" }}>{i + 1}</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: i === step ? 700 : 500, fontSize: "var(--text-sm)", color: i === step ? "var(--text-body)" : "var(--text-muted)" }}>{s}</span>
          {i < STEPS.length - 1 && <span style={{ width: 22, height: 1.5, background: "var(--border-default)" }} />}
        </div>
      ))}
    </div>
  );
}

function Aside(props) {
  return (
    <div className="aside" {...props}>
      <img src="/assets/reservar-terrace.jpg" alt="Terraza de Pomelo al atardecer, mesas con velas entre plantas" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", left: 20, right: 20, bottom: 20, background: "color-mix(in srgb,var(--espresso-950) 62%,transparent)", color: "var(--cream-50)", borderRadius: "var(--radius-lg)", padding: "var(--space-4) var(--space-5)", backdropFilter: "blur(4px)" }}>
        <div style={{ fontFamily: "var(--font-script-bold)", fontSize: 30, color: "var(--coral-200)", lineHeight: 0.9 }}>nos vemos ahí</div>
        <p style={{ margin: "6px 0 0", fontSize: "var(--text-sm)", opacity: 0.9 }}>
          Brunch cada día · 9:00 – 14:00 · Calle Mayor 5, Madrid
        </p>
      </div>
    </div>
  );
}

function Summary({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-default)", paddingBottom: 8 }}>
      <span style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{k}</span>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-sm)" }}>{v}</span>
    </div>
  );
}

export default function ReservarPage() {
  const navTo = useCurtainNav();
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ people: "2 personas", date: "", time: "11:00", zone: "interior", news: false, name: "", email: "", phone: "" });
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const [toast, setToast] = React.useState(false);

  React.useEffect(() => {
    document.title = "Reservar mesa — Pomelo";
    const cleanup = initPomeloMotion();
    return cleanup;
  }, [step]);

  return (
    <React.Fragment>
      <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <NavBar brand="Pomelo" items={["Inicio", "Café", "Brunch", "Carta", "Nosotros"]} activeIndex={-1}
          onNavigate={(i) => navTo(NAV_TARGETS[i])}
          cta={<Button size="sm" variant="secondary" onClick={() => navTo("/carta")}>Ver la carta</Button>} />
      </div>

      <div className="container" style={{ paddingTop: "var(--space-7)", paddingBottom: "var(--space-9)" }}>
        <div data-reveal style={{ textAlign: "center", marginBottom: "var(--space-7)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--text-accent)" }}>Reserva tu mesa</span>
          <h1 style={{ margin: "6px 0 0", fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: "clamp(2rem,4vw,3rem)" }}>
            Ven a hacer <span style={{ fontFamily: "var(--font-script-bold)", fontStyle: "normal", color: "var(--accent)", fontWeight: 400 }}>brunch</span> con nosotros
          </h1>
        </div>

        <div className="split" data-stagger>
          <Card data-reveal elevation="raised" padding="lg">
            <Stepper step={step} />

            {step === 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                  <Select label="Personas" value={data.people} onChange={(e) => set("people", e.target.value)}>
                    {["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6 personas", "+6 (grupo)"].map((o) => <option key={o}>{o}</option>)}
                  </Select>
                  <Input label="Fecha" type="date" value={data.date} onChange={(e) => set("date", e.target.value)} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-sm)", display: "block", marginBottom: 8 }}>Hora</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {TIMES.map((t) => (
                      <button key={t} onClick={() => set("time", t)}
                        style={{ cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-sm)", padding: "9px 16px", borderRadius: "var(--radius-pill)", border: `1.5px solid ${data.time === t ? "var(--accent)" : "var(--border-default)"}`, background: data.time === t ? "var(--accent)" : "transparent", color: data.time === t ? "var(--text-on-accent)" : "var(--text-body)" }}>{t}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-sm)", display: "block", marginBottom: 8 }}>Zona</label>
                  <div style={{ display: "flex", gap: "var(--space-5)" }}>
                    <Radio name="zone" label="Interior" checked={data.zone === "interior"} onChange={() => set("zone", "interior")} />
                    <Radio name="zone" label="Terraza" checked={data.zone === "terraza"} onChange={() => set("zone", "terraza")} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button onClick={() => setStep(1)}>Continuar</Button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                <Input label="Nombre y apellidos" placeholder="Tu nombre" value={data.name} onChange={(e) => set("name", e.target.value)} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
                  <Input label="Correo" type="email" placeholder="tu@correo.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
                  <Input label="Teléfono" type="tel" placeholder="+34 600 000 000" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
                <Input label="Peticiones especiales" placeholder="Alergias, trona, celebración…" />
                <Checkbox label="Quiero recibir novedades y menús de temporada" checked={data.news} onChange={(e) => set("news", e.target.checked)} />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "var(--space-2)" }}>
                  <Button variant="ghost" onClick={() => setStep(0)}>← Atrás</Button>
                  <Button onClick={() => setStep(2)}>Revisar</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "var(--space-5)" }}>
                  <Summary k="Personas" v={data.people} />
                  <Summary k="Fecha" v={data.date || "Por elegir"} />
                  <Summary k="Hora" v={data.time} />
                  <Summary k="Zona" v={data.zone === "terraza" ? "Terraza" : "Interior"} />
                  <Summary k="Nombre" v={data.name || "—"} />
                  <Summary k="Contacto" v={data.email || data.phone || "—"} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Button variant="ghost" onClick={() => setStep(1)}>← Atrás</Button>
                  <Button size="lg" onClick={() => setToast(true)}>Confirmar reserva</Button>
                </div>
                {toast && (
                  <div style={{ marginTop: "var(--space-5)", display: "flex", justifyContent: "center" }}>
                    <Toast tone="success" onClose={() => setToast(false)}>¡Reserva confirmada! Te esperamos.</Toast>
                  </div>
                )}
              </div>
            )}
          </Card>

          <Aside data-reveal />
        </div>
      </div>
    </React.Fragment>
  );
}
