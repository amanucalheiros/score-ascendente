import { Link } from "@tanstack/react-router";
import { Mail, Lock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 pt-14 pb-24 sm:pb-10 px-4">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-black text-foreground text-lg">Score<span className="text-neon">Alto</span></div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Guia digital de recuperação e crescimento de score, criado por especialistas em educação financeira.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-neon" /> SSL 256-bit</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-neon" /> Compra segura</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Empresa</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><span className="text-foreground font-semibold">Razão social:</span> Score Alto Educação Financeira LTDA</li>
            <li><span className="text-foreground font-semibold">CNPJ:</span> 00.000.000/0001-00</li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-neon" />
              <a href="mailto:suporte@guiascorealto.com.br" className="hover:text-neon transition">suporte@guiascorealto.com.br</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/termos" className="hover:text-neon transition">Termos de Uso</Link></li>
            <li><Link to="/privacidade" className="hover:text-neon transition">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border text-center space-y-3">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Este produto não garante resultados financeiros específicos — os depoimentos são experiências individuais. O conteúdo é informativo e educacional. Não somos parceiros oficiais do Serasa, SPC ou Boa Vista.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Guia Score Alto. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
