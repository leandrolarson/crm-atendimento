# CRM Atendimento

### **Autor:** Leandro Larson

Este projeto tem como objetivo implementar progressivamente uma aplicação web inspirada em sistemas de gestão de atendimento e vendas (ex: cadastro de leads, consulta de CEP, cronometragem de chamados, histórico de ações e controle de estágios comerciais), sendo o diferencial a mensuração exata do tempo de esforço da equipe por canal de comunicação vinculado ao valor financeiro das negociações.

O frontend da aplicação foi desenvolvido com HTML, CSS (Bootstrap e SCSS) e JavaScript (utilizando jQuery e Fetch API), e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Checklist da Atividade 06

- [x] Configurei minha identidade no Git
- [x] Clonei o repositório do meu projeto
- [x] Inicializei o NPM (package.json)
- [x] Criei o .gitignore ignorando node_modules e .env
- [x] Instalei jquery e uuid como dependências de produção
- [x] Instalei gh-pages como dependência de desenvolvimento
- [x] Fiz commit e push para a branch main

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [📄 Product Requirements Document (PRD)](./docs/prd.md) - Visão geral, atores e histórias de usuário.
- [🛠️ Especificação Técnica (Tech Spec)](./docs/architecture.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API (JSON Server).

## 🎨 Design
- [🎨 Design System e Protótipo - Stitch AI](https://stitch.withgoogle.com/projects/6519395341171122045) - Identidade visual e Telas Interativas da Aplicação.

## 💻 Tecnologias e Dependências

- **Framework CSS:** "Bootstrap 5.3 - A escolha do "Bootstrap 5.3" é perfeita por oferecer uma solução madura, estável e muito utilizada para desenvolvimento de aplicações responsivas. O sistema de Grid facilita a adaptação de layouts para os mais diferentes dispositivos, enquanto seus componentes e classes agilizam a implementação do design definido no Stitch. Além disso o Bootstrap já possui recursos JavaScript para componentes interativos, como Modais, Carrosséis e muitos outros, reduzindo a necessidade de desenvolvimento manual. O projeto também possui um ecossistema consolidado, documentação extensa, manutenção ativa e licença MIT, tornando-o uma escolha segura e adequada tanto para projetos comerciais quanto de código aberto.

- **API:** "ViaCEP" - A utilização da **ViaCEP** faz sentido no CRM porque permite automatizar o preenchimento dos dados de endereço a partir do CEP informado pelo cliente. Isso reduz a necessidade de digitação manual, diminui erros de cadastro e torna o preenchimento do formulário mais rápido e prático para o atendente. Além disso, sua integração por meio de uma requisição HTTP em formato JSON é simples e adequada à arquitetura do projeto.

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [ ] ID 01 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design tradicionais (Figma, Quant UX ou Sketch) ou IA (Stitch).
- [ ] ID 02 - Implementa layout responsivo com Framework CSS (Bootstrap, Materialize) usando Flexbox ou Grid do próprio framework.
- [ ] ID 03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] ID 04 - Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
- [ ] ID 05 - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de unidades fixas (px).
- [ ] ID 06 - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
- [ ] ID 07 - Utiliza Sass (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
- [ ] ID 08 - Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (função clamp() + unidades relativas).
- [ ] ID 09 - Aplica técnicas de responsividade de imagens usando CSS (object-fit, containers com unidades relativas).
- [ ] ID 10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture, ou parâmetros do Cloudinary).

#### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.

- [ ] ID 11 - Implementa validação HTML nativa (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
- [ ] ID 12 - Aplica expressões regulares (REGEX) para validações customizadas (e-mail, telefone, datas, etc.)
- [ ] ID 13 - Utiliza elementos de seleção em formulários (checkbox, radio, select) para coleta de dados.
- [ ] ID 14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage) para persistir dados localmente.

#### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.

- [ ] ID 15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [ ] ID 16 - Utiliza boas práticas de versionamento no Git/GitHub (branch main ou branches específicos, uso de .gitignore).
- [ ] ID 17 - Mantém um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [ ] ID 18 - Organiza arquivos do projeto de forma modular, seguindo padrão de exemplo fornecido.
- [ ] ID 19 - Configura linters e formatadores (ESLint, Prettier) para manter qualidade e padronização do código.

#### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.

- [ ] ID 20 - Utiliza jQuery para manipulação do DOM e interatividade (eventos, animações, manipulação de elementos)
- [ ] ID 21 - Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin).

#### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.

- [ ] ID 22 - Realiza requisições assíncronas para uma API fake (ex.: JSON Server) para persistir dados de um formulário.
- [ ] ID 23 - Realiza requisições assíncronas para uma API fake para exibir dados na página.
- [ ] ID 24 - Realiza requisições assíncronas para APIs públicas reais (OpenWeather, ViaCEP etc.), exibindo os dados e tratando erros.
