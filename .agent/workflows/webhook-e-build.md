---
description: Configurar webhook do Make no formulário e gerar o build de produção
---

## Como solicitar

Use o seguinte formato ao pedir para o assistente:

> /webhook-e-build  
> URL do webhook: https://hook.us2.make.com/XXXXXXX  
> Arquivo do formulário: src/pages/NomeDoFormulario.tsx (ou deixar em branco para usar Index.tsx)

---

## Passos que o assistente irá executar

1. Abrir o arquivo do formulário informado e identificar:
   - A função `handleSubmit` (ou equivalente)
   - Todos os campos coletados (`contactData`, `profileData`, etc.)

2. Substituir a função `handleSubmit` por uma versão `async` que:
   - Monta um `payload` JSON com todos os campos, usando nomes claros em português (ex: `nome_completo`, `servicos_prestados`)
   - Inclui os metadados: `origem` (nome do formulário) e `data_envio` (timestamp ISO)
   - Faz um `fetch` POST para a URL do webhook informada com `Content-Type: application/json`
   - Captura erros sem bloquear o fluxo do usuário

3. Rodar o build de produção:
// turbo
   ```
   npm run build
   ```

4. Confirmar o sucesso do build e entregar o payload de exemplo para a equipe do Make.
