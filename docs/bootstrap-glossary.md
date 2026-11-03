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

## Convenções para as próximas páginas

- Registrar somente classes Bootstrap efetivamente usadas no HTML.
- Descrever o efeito no contexto da página, especialmente quando combinações
  de classes definem o layout.
- Separar classes Bootstrap de classes próprias, como `login-card` e
  `login-page__content`; estas últimas pertencem aos arquivos CSS do projeto.
- Registrar componentes JavaScript do Bootstrap quando forem adicionados e
  indicar o arquivo ou a página onde são usados.
