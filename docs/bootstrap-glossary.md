# Glossário de classes Bootstrap

Este glossário registra as classes Bootstrap usadas nas páginas ativas. Ele deve
ser atualizado conforme novas telas e componentes forem adicionados.

## Contexto atual

- **Versão:** Bootstrap 5.3.8, carregado pelo CDN em `index.html`.
- **Escopo:** a página `index.html` é a primeira página ativa documentada.
- **JavaScript:** a página ainda não carrega o JavaScript do Bootstrap nem código
  JavaScript próprio. Os controles existentes são de apresentação e HTML nativo.
- **Estilos próprios:** `css/styles.css` define tokens globais e ajustes do
  Bootstrap; `css/login.css` define o layout específico da home/login.

## Classes usadas em `index.html`

| Classe | Efeito |
|---|---|
| `container` | Centraliza o conteúdo e aplica larguras máximas responsivas por breakpoint. |
| `row` | Cria uma linha do Grid Bootstrap, baseada em Flexbox, para organizar colunas. |
| `justify-content-center` | Centraliza as colunas horizontalmente dentro da linha. |
| `col-12` | Ocupa todas as 12 colunas do Grid no menor breakpoint. |
| `col-sm-10` | A partir de `sm`, ocupa 10 das 12 colunas. |
| `col-md-8` | A partir de `md`, ocupa 8 das 12 colunas. |
| `col-lg-6` | A partir de `lg`, ocupa 6 das 12 colunas. |
| `col-xl-5` | A partir de `xl`, ocupa 5 das 12 colunas. |
| `mb-3` | Aplica margem inferior de espaçamento nível 3. |
| `mb-4` | Aplica margem inferior de espaçamento nível 4. |
| `mb-0` | Remove a margem inferior do elemento. |
| `form-label` | Aplica o espaçamento e a aparência padrão de rótulos de formulário. |
| `form-control` | Aplica largura, borda, preenchimento e estados de foco de um campo de formulário. |
| `form-control-lg` | Aumenta o tamanho do campo em relação ao controle padrão. |
| `btn` | Fornece a estrutura visual e os estados básicos de um botão. |
| `btn-primary` | Aplica a aparência de ação principal; as cores são ajustadas pelos tokens do projeto. |
| `btn-lg` | Aumenta o tamanho do botão. |
| `w-100` | Define a largura do elemento como 100% do elemento pai. |

## Classes usadas em `dashboard.html`

| Classe | Efeito |
|---|---|
| `d-flex` | Cria containers flexíveis para layout de barra superior, filtros e blocos de dados. |
| `align-items-center` | Alinha verticalmente itens de uma linha flexível. |
| `justify-content-between` | Distribui espaço entre itens de uma linha flexível. |
| `gap-*` | Aplica espaçamento horizontal e vertical entre elementos em um container flexível. |
| `btn` | Estrutura de botão reutilizada em ações secundárias e primárias. |
| `btn-primary` | Aplica a cor principal para a ação destacada do dashboard. |
| `btn-sm` | Reduz o tamanho do botão em áreas compactas, como o cronômetro ativo. |
| `pill` | Produz badges de status para indicadores de conexão e atividade. |
| `badge` | Bootstrap é usado em combinações com estilos próprios para microtextos de status. |
| `form-control` | Mantém entrada de busca com visual consistente ao bootstrap. |
| `nav` | Aplica a estrutura básica de navegação do sidebar. |
| `row` | Estrutura de grade usada em componentes mais amplos e em futuras extensões. |
| `col-*` | As colunas do grid continuam sendo a base para layouts responsivos e semântica do dashboard. |
| `container` | Mantém a proporção do conteúdo em telas maiores quando necessário. |
| `text-*` | Classes auxiliares para cor de texto e informação em títulos e descrições. |
| `fw-*` | Ajusta a densidade tipográfica em títulos, badges e textos de destaque. |

## Breakpoints usados no Grid

## Breakpoints usados no Grid

As classes de coluna acumulam seus efeitos a partir do breakpoint indicado:

| Prefixo | Breakpoint Bootstrap 5.3 |
|---|---:|
| sem prefixo | Todos os tamanhos, a partir de `xs` |
| `sm` | `576px` |
| `md` | `768px` |
| `lg` | `992px` |
| `xl` | `1200px` |

Por exemplo, `col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5` faz o cartão ocupar
a largura total no mobile e reduzir sua proporção em telas maiores.

## Classes usadas em `lead-manager.html`

| Classe | Efeito |
|---|---|
| `d-flex` | Organiza o layout da barra de busca, ações e blocos de conteúdo. |
| `align-items-center` | Centraliza verticalmente itens em linhas e grupos de controle. |
| `justify-content-between` | Distribui espaço entre a barra de busca e os elementos de ação. |
| `btn` | Base visual e funcionalidade de botões primários e secundários. |
| `btn-primary` | Destaca a ação principal de criação de um novo lead. |
| `btn-light` | Aplica botão neutro para ações de exportação e alternância de visualização. |
| `form-select` | Define o estilo dos campos de filtro e seleção por canal e etapa. |
| `table` | Estrutura a tabela de leads com linhas e cabeçalhos. |
| `thead`, `tbody`, `tr`, `th`, `td` | Definem as colunas e os dados da listagem. |
| `visually-hidden` | Mantém títulos de tabela acessíveis para leitores de tela sem exibir visualmente. |
| `input` | Mantém os campos de busca e filtro com aparência consistente. |
| `w-*`, `h-*` | Ainda não usados em larga escala; a página prioriza tamanhos por CSS próprio. |

## Convenções para as próximas páginas

- Registrar somente classes Bootstrap efetivamente usadas no HTML.
- Descrever o efeito no contexto da página, especialmente quando combinações
  de classes definem o layout.
- Separar classes Bootstrap de classes próprias, como `login-card`,
  `dashboard-sidebar__item` e `lead-manager-stat`; estas pertencem aos arquivos
  CSS do projeto.
- Registrar componentes JavaScript do Bootstrap quando forem adicionados e
  indicar o arquivo ou a página onde são usados.
