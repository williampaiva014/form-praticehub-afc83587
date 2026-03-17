import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Política de Privacidade</h1>
      <p className="text-muted-foreground text-sm mb-8">Última atualização: 17 de março de 2026</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Introdução</h2>
          <p>
            Esta Política de Privacidade descreve como Dr. Paulo Robson coleta, utiliza, armazena e protege os dados pessoais dos usuários deste site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Dados Coletados</h2>
          <p>Coletamos os seguintes dados pessoais fornecidos voluntariamente pelo usuário:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>Número de WhatsApp;</li>
            <li>Perfil do Instagram;</li>
            <li>Estado e cidade;</li>
            <li>Informações sobre serviços prestados, público-alvo e objetivos profissionais.</li>
          </ul>
          <p className="mt-3">Também coletamos automaticamente:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Cookies e dados de navegação;</li>
            <li>Endereço IP e informações do dispositivo;</li>
            <li>Dados de uso e interação com o site.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidade do Tratamento</h2>
          <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Identificar parceiros e oportunidades de negócios na região do usuário;</li>
            <li>Enviar comunicações relevantes sobre a rede Prátice Hub;</li>
            <li>Melhorar a experiência de navegação e nossos serviços;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Base Legal</h2>
          <p>
            O tratamento dos dados pessoais é realizado com base no consentimento do titular (Art. 7º, I da LGPD) e no legítimo interesse do controlador (Art. 7º, IX da LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Compartilhamento de Dados</h2>
          <p>
            Seus dados pessoais não serão vendidos ou compartilhados com terceiros para fins comerciais sem o seu consentimento. Podemos compartilhar dados com:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Parceiros estratégicos da rede, mediante consentimento;</li>
            <li>Prestadores de serviços de tecnologia que auxiliam na operação do site;</li>
            <li>Autoridades competentes, quando exigido por lei.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar a experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através do banner de consentimento exibido ao acessar o site.
          </p>
          <p className="mt-2">Tipos de cookies utilizados:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site;</li>
            <li><strong>Cookies analíticos:</strong> utilizados para entender como os visitantes interagem com o site;</li>
            <li><strong>Cookies de marketing:</strong> utilizados para exibir conteúdo relevante ao perfil do usuário.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Direitos do Titular</h2>
          <p>Em conformidade com a LGPD, você tem direito a:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Confirmar a existência de tratamento de dados;</li>
            <li>Acessar seus dados pessoais;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Solicitar a eliminação dos dados tratados com base no consentimento.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Segurança dos Dados</h2>
          <p>
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, destruição, perda, alteração ou qualquer forma de tratamento inadequado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Retenção de Dados</h2>
          <p>
            Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Após esse período, os dados serão anonimizados ou eliminados de forma segura.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Encarregado de Dados (DPO)</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados através dos canais oficiais disponibilizados no site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Alterações nesta Política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente. Alterações significativas serão comunicadas de forma destacada em nosso site.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
