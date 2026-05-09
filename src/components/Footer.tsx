export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="font-black text-foreground">Score<span className="text-neon">Alto</span></div>
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Este produto não garante resultados financeiros específicos — os depoimentos são experiências individuais. O conteúdo é informativo e educacional. Não somos parceiros oficiais do Serasa, SPC ou Boa Vista.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Guia Score Alto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
