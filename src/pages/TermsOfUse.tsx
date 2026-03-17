import LegalPageLayout from "@/components/LegalPageLayout";

const TermsOfUse = () => {
  return (
    <LegalPageLayout>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Termos de Uso</h1>
      <p className="text-muted-foreground text-sm mb-8">Última atualização: 17 de março de 2026</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-foreground/80 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar este site, você concorda integralmente com os presentes Termos de Uso. Caso não concorde com qualquer disposição aqui contida, solicitamos que não utilize nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Descrição dos Serviços</h2>
          <p>
            Este site é operado por Dr. Paulo Robson e tem como objetivo conectar profissionais a parceiros estratégicos e oportunidades de negócios qualificados em suas respectivas regiões, por meio da plataforma Prátice Hub.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Cadastro e Informações do Usuário</h2>
          <p>
            Ao preencher o formulário de cadastro, você declara que as informações fornecidas são verdadeiras, completas e atualizadas. Você é responsável por manter a confidencialidade de seus dados de acesso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Uso Adequado</h2>
          <p>O usuário compromete-se a:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Utilizar os serviços de forma lícita e ética;</li>
            <li>Não utilizar informações obtidas para fins ilícitos;</li>
            <li>Não tentar acessar áreas restritas do sistema;</li>
            <li>Não reproduzir, copiar ou distribuir conteúdo sem autorização prévia.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site, incluindo textos, imagens, logotipos, design e código-fonte, é de propriedade exclusiva de Dr. Paulo Robson e/ou seus licenciadores, protegido pelas leis brasileiras de propriedade intelectual.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitação de Responsabilidade</h2>
          <p>
            Dr. Paulo Robson não se responsabiliza por eventuais danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso dos serviços oferecidos neste site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, sendo a versão atualizada publicada nesta página. O uso continuado do site após alterações constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Legislação Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer litígio será submetido ao foro da comarca do domicílio do responsável pelo site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail disponibilizado em nossos canais oficiais.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfUse;
