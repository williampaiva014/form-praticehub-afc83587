import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "lgpd_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto glass-card !p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1 text-sm text-foreground/80 leading-relaxed">
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, conforme a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. Ao
                continuar navegando, você concorda com nossa{" "}
                <Link
                  to="/politica-de-privacidade"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Política de Privacidade
                </Link>{" "}
                e{" "}
                <Link
                  to="/termos-de-uso"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Termos de Uso
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button variant="ghost" size="sm" onClick={decline} className="text-muted-foreground">
                Recusar
              </Button>
              <Button size="sm" onClick={accept} className="btn-gold border-none hover:brightness-110">
                Aceitar cookies
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
