export function Method() {
  const steps = [
    { l: "C", t: "Compreender", d: "Entender como o sistema realmente te avalia." },
    { l: "P", t: "Posicionar", d: "Organizar seu CPF do jeito que o banco enxerga bem." },
    { l: "F", t: "Fortalecer", d: "Construir histórico de credibilidade no automático." },
  ];
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-neon">O método proprietário</span>
        <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
          Conheça o método <span className="text-gradient">CPF 360°</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">3 pilares simples que viram a chave do crédito a seu favor.</p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.l} className="relative bg-card-grad border border-border rounded-2xl p-8 hover:border-primary/40 transition">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-12 w-12 rounded-xl bg-cta grid place-items-center font-black text-2xl text-primary-foreground shadow-cta">
                {s.l}
              </div>
              <div className="mt-6">
                <div className="text-xs text-muted-foreground font-bold">PASSO 0{i + 1}</div>
                <h3 className="mt-1 font-black text-2xl text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
