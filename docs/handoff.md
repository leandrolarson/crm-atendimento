# Handoff — CRM Atendimento

Este arquivo registra o contexto necessário para retomar o redesign em outra
sessão ou ambiente. Atualize-o ao concluir etapas importantes.

## Estado do trabalho

- **Branch:** `feat/pages-html-css-bootstrap`
- **Último commit confirmado:** `884cc50` — `feat: adiciona cadastro de lead`
- **Próxima entrega:** concluir o refinamento do fluxo CRM com foco em
  consistência visual, documentação e validação dos requisitos afetados.
- **Estado verificado em:** 2026-11-10.

## Objetivo e decisões

- Refazer as páginas geradas pelo Antigravity com foco em simplicidade e código
  limpo.
- Criar um site navegável e responsivo com HTML5, CSS3 e Bootstrap 5.3.
- Priorizar layout mobile-first, componentes do framework e Design System
  consistente.
- Não adicionar JavaScript de negócio às páginas sem confirmar que chegou o
  momento de implementar essa lógica.
- Usar CSS puro inicialmente; considerar Sass e outras técnicas quando
  atenderem um requisito de forma útil, sem forçá-las.
- Considerar os indicadores ID01–ID24 da atividade e documentar suas evidências
  sem marcar como concluído o que ainda não foi implementado.
- Consultar `references/antigravity/` apenas como inspiração visual; os arquivos
  lá não são as páginas ativas.
- Manter o fluxo de navegação entre telas como login → dashboard → lead-manager
  → new-lead, com a mesma hierarquia visual e responsividade.

## Implementado

- `index.html`: home/tela de login com campos tradicionais de e-mail e senha,
  validação HTML nativa e botão de entrada que direciona para o dashboard.
- `dashboard.html`: painel principal com sidebar reutilizável, header fixo,
  busca, cards de métricas, grupos de análise e blocos de atividade.
- `lead-manager.html`: listagem de leads com filtros, tabela, status em badges e
  ações de criação e exportação.
- `new-lead.html`: formulário de cadastro de lead com layout em duas colunas,
  campos organizados por seção e preview do cliente em painel lateral simplificado.
- `css/styles.css`: tokens de cor, tipografia, foco e ajustes globais do
  Bootstrap.
- `css/login.css`: cartão e layout mobile-first da página de login.
- `css/dashboard.css`: estilos do painel principal, cards de métricas e widgets.
- `css/lead-manager.css`: layout da grade, filtros e tabela de leads.
- `css/new-lead.css`: formulário, grupos de campos e painel de resumo visual.
- A imagem de fundo da home continua sendo servida pelo Cloudinary com `f_auto`,
  `q_auto`, `srcset` e `sizes`, sob overlay índigo `#4F46E5`.
- Os links de navegação do sidebar e das telas conectam o fluxo de páginas
  estático do CRM.
- As páginas não carregam JavaScript de negócio nem o bundle JavaScript do
  Bootstrap; o formulário continua sem autenticação funcional.
- A interface foi conferida em larguras mobile e desktop.

## Documentação de referência

- `README.md`: visão geral do projeto, tecnologias e checklist da atividade.
- `docs/prd.md`: visão de produto, atores e histórias de usuário.
- `docs/architecture.md`: modelo de dados e contratos de API planejados.
- `docs/bootstrap-glossary.md`: glossário das classes Bootstrap usadas.
- `docs/requirements-map.md`: status e evidências dos indicadores ID01–ID24.

Ao implementar novas páginas, atualizar `docs/bootstrap-glossary.md` com as
classes Bootstrap efetivamente usadas e `docs/requirements-map.md` com o status
e as evidências observadas.

## Como continuar

1. Abrir a branch `feat/pages-html-css-bootstrap` e conferir `git status`.
2. Ler este handoff, o PRD e a especificação técnica antes de definir novos
   fluxos.
3. Consultar o mapa de requisitos e o glossário Bootstrap.
4. Implementar a próxima página com o mesmo Design System e responsividade
   mobile-first.
5. Perguntar ao usuário quando uma decisão de produto ou fluxo não estiver
   definida; não inventar autenticação, navegação ou comportamento de backend.
6. Validar HTML, ativos, responsividade e requisitos afetados; atualizar a
   documentação e criar commits pequenos por entrega.
7. Quando a próxima etapa exigir nova página, registrar as classes Bootstrap
   usadas e atualizar o mapa de requisitos com evidências específicas da tela.

## Prompt para uma nova sessão

> Continue o redesign do CRM Atendimento a partir da branch
> `feat/pages-html-css-bootstrap`. Primeiro leia `docs/handoff.md`,
> `docs/prd.md`, `docs/architecture.md`, `docs/requirements-map.md` e
> `docs/bootstrap-glossary.md`. O fluxo atual inclui a home/login em
> `index.html`, o dashboard em `dashboard.html`, o lead-manager em
> `lead-manager.html` e o cadastro de lead em `new-lead.html`; todas as telas
> continuam sendo estáticas e sem lógica de negócio. Preserve o Design System
> em `css/styles.css`, use Bootstrap 5.3 com abordagem mobile-first e consulte
> `references/antigravity/` somente como inspiração. Atualize o glossário e o
> mapa de requisitos ao implementar novas páginas. Confirme decisões de produto
> ainda não especificadas antes de definir o comportamento.
