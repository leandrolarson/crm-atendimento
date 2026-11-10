# Mapa dos requisitos por ID

Este documento acompanha a implementação dos indicadores de desempenho
registrados no checklist do projeto. O status considera **somente o que está
implementado nas páginas ativas**; as telas arquivadas em
`references/antigravity/` servem como referência visual e não contam como
funcionalidades da nova interface.

## Status inicial

| Status | Significado |
|---|---|
| **Atendido** | Há evidência atual suficiente para o requisito descrito. |
| **Parcial** | Há implementação inicial, mas falta ampliar ou concluir o escopo. |
| **Pendente** | Ainda não há implementação ativa para o requisito. |
| **N/A por enquanto** | O requisito depende de uma etapa ou funcionalidade ainda fora do escopo atual. |

## RA1 — Frameworks CSS e interfaces responsivas

| ID | Status | Evidência atual / próximo passo |
|---|---|---|
| 01 | Parcial | O README referencia um protótipo Stitch e há telas Antigravity arquivadas. A home/login foi validada em larguras mobile e desktop, a dashboard foi estruturada em layout responsivo, o lead-manager foi criado e a página de cadastro de lead foi implementada com organização visual simplificada e consistente. Ainda falta registrar protótipos adaptáveis para as próximas páginas. |
| 02 | Atendido na home/login, dashboard, lead-manager e new-lead | `index.html` usa o Grid responsivo do Bootstrap 5.3: `container`, `row`, `col-12`, `col-sm-10`, `col-md-8`, `col-lg-6` e `col-xl-5`. A página `dashboard.html`, `lead-manager.html` e `new-lead.html` ampliam a aplicação do Grid e da estrutura flexível do Bootstrap. |
| 03 | Atendido na home/login, dashboard, lead-manager e new-lead | `css/login.css` usa CSS Grid em `.login-page` e media query mobile-first. O dashboard, lead-manager e new-lead usam CSS Grid e layouts flexíveis com ajustes em `@media` para mobile e desktop. |
| 04 | Parcial | As páginas usam componentes CSS do Bootstrap, como `form-control`, `form-select`, `btn btn-primary`, `btn btn-light`, `table` e campos de entrada. Não há componente JavaScript do Bootstrap nessa etapa; agregar apenas quando houver interação real de interface. |
| 05 | Atendido na home/login, dashboard, lead-manager e new-lead | O layout usa unidades relativas como `rem`, `%`, `vw` e `svh`, além de `clamp()` para espaçamentos e tipografia fluidos. As páginas também aplicam espaçamento proporcional e responsividade em blocos de formulário, métricas e listas. |
| 06 | Parcial | `css/styles.css` define tokens para cores, tipografia, bordas e foco; a paleta é aplicada na home/login, dashboard, lead-manager e new-lead. Revisar a consistência visual à medida que as outras páginas forem criadas. |
| 07 | Pendente | Os estilos atuais são CSS puro. Ainda não há SCSS, variáveis Sass, mixins ou funções. |
| 08 | Atendido na home/login | A tipografia usa `clamp()` e a folha específica segue uma abordagem mobile-first com media query. |
| 09 | Atendido na home/login | A imagem de fundo é um elemento `<img>` fluido, dimensionado em `css/login.css` com `width`, `height` e `object-fit: cover`. |
| 10 | Atendido na home/login | A imagem usa transformações do Cloudinary (`f_auto`, `q_auto` e larguras variadas), além de `srcset` e `sizes` para seleção adaptativa. |

## RA2 — Formulários e validações no cliente

| ID | Status | Evidência atual / próximo passo |
|---|---|---|
| 11 | Atendido na home/login | O formulário usa `type="email"` e `required` nos campos de e-mail e senha, permitindo a validação nativa do navegador. O envio ainda não está integrado a um serviço. |
| 12 | Pendente | Não há validação customizada por expressão regular; manter validações adicionais fora do escopo enquanto não forem necessárias. |
| 13 | N/A por enquanto | A tela atual não coleta dados por `select`, `checkbox` ou `radio`. Avaliar nas páginas que precisarem desses controles. |
| 14 | Pendente | A nova home/login não lê nem grava dados em `localStorage` ou `sessionStorage`. |

## RA3 — Ferramentas e organização do desenvolvimento

| ID | Status | Evidência atual / próximo passo |
|---|---|---|
| 15 | Atendido | O projeto possui `package.json` e `package-lock.json`, com dependências gerenciadas pelo NPM. O script `test` ainda é apenas um placeholder. |
| 16 | Atendido | O repositório utiliza uma branch específica para as páginas, possui `.gitignore` para `node_modules` e `.env`, e mantém o histórico no Git. |
| 17 | Parcial | O README contém o checklist da atividade; atualizar seus itens conforme as evidências forem implementadas e revisadas. |
| 18 | Parcial | A estrutura separa documentos e estilos (`docs/`, `css/`) e mantém o código gerado como referência em `references/antigravity/`. A organização das páginas seguintes ainda será definida durante a implementação. |
| 19 | Pendente | Ainda não há configuração de linter ou formatador para HTML/CSS/JavaScript. |

## RA4 — Bibliotecas e componentes JavaScript

| ID | Status | Evidência atual / próximo passo |
|---|---|---|
| 20 | N/A por enquanto | A home/login foi deliberadamente criada sem JavaScript de negócio; jQuery não é usado nessa página. |
| 21 | N/A por enquanto | Ainda não há máscara ou plugin jQuery em uso. |

## RA5 — APIs e dados assíncronos

| ID | Status | Evidência atual / próximo passo |
|---|---|---|
| 22 | Pendente | A home/login ainda não envia dados a uma API fake. |
| 23 | Pendente | A nova interface ainda não consome dados de uma API fake para exibição. |
| 24 | N/A por enquanto | A integração ViaCEP pertence ao futuro formulário de cadastro/endereço; não faz parte da home/login. |

## Observações sobre a home/login

- O formulário é estrutural e tem validação HTML nativa, mas não autentica nem
  envia credenciais a um backend.
- O botão “Entrar” não representa uma autenticação funcional.
- “Cadastre-se” aponta para `cadastro.html`, uma página planejada que ainda não
  foi criada.
- Esta página não carrega JavaScript próprio nem o bundle JavaScript do
  Bootstrap.

Atualizar os status e acrescentar evidências conforme novas páginas e
funcionalidades forem implementadas.
