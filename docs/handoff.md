# Handoff — CRM Atendimento

Este arquivo registra o contexto necessário para retomar o redesign em outra
sessão ou ambiente. Atualize-o ao concluir etapas importantes.

## Estado do trabalho

- **Branch:** `feat/pages-html-css-bootstrap`
- **Último commit confirmado:** `4dd687f` — `feat: adiciona página inicial de login`
- **Próxima entrega:** criar as próximas páginas mantendo a identidade visual e
  atualizar o glossário Bootstrap e o mapa de requisitos.
- **Estado verificado em:** 2026-11-03.

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

## Implementado

- `index.html`: home/tela de login com campos tradicionais de e-mail e senha,
  validação HTML nativa e chamada “Ainda não é cadastrado? Cadastre-se”.
- `css/styles.css`: tokens de cor, tipografia, foco e ajustes globais do
  Bootstrap.
- `css/login.css`: cartão e layout mobile-first da página de login.
- A imagem de fundo é servida pelo Cloudinary com `f_auto`, `q_auto`, `srcset` e
  `sizes`, sob overlay índigo `#4F46E5`.
- O link de cadastro aponta para `cadastro.html`, que ainda não existe.
- A página não carrega JavaScript próprio nem o bundle JavaScript do Bootstrap.
  O formulário ainda não autentica nem envia dados.
- A página foi conferida em larguras mobile e desktop.

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

## Prompt para uma nova sessão

> Continue o redesign do CRM Atendimento a partir da branch
> `feat/pages-html-css-bootstrap`. Primeiro leia `docs/handoff.md`,
> `docs/prd.md`, `docs/architecture.md`, `docs/requirements-map.md` e
> `docs/bootstrap-glossary.md`. A home/login em `index.html` está concluída como
> layout, mas ainda não possui autenticação nem lógica JavaScript. Preserve o
> Design System em `css/styles.css`, use Bootstrap 5.3 com abordagem
> mobile-first e consulte `references/antigravity/` somente como inspiração.
> Atualize o glossário e o mapa de requisitos ao implementar novas páginas.
> Confirme decisões de produto ainda não especificadas antes de definir o
> comportamento.
