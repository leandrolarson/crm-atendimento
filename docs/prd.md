# 📄 Product Requirements Document (PRD) - CRM Atendimento

## 1. Visão Geral e Objetivo

**Autor:** [Seu Nome Completo]

**Projeto:** CRM de Atendimento & Vendas (`crm-atendimento`)

O **CRM Atendimento** é uma aplicação web voltada para centralizar a captação de leads multicanais (WhatsApp, Instagram, E-mail, Telefone), metrificar o tempo de atendimento dedicado por cada colaborador e acompanhar a evolução comercial do cliente no funil de vendas (Orçamento, Pedido, Venda e Contrato).

**Problema que resolve:** Empresas que realizam pré-venda e atendimento via redes sociais enfrentam falta de rastreabilidade do tempo investido em cada cliente, ausência de métricas sobre o esforço de equipe por canal de comunicação e dificuldade em vincular o tempo de atendimento aos valores financeiros convertidos em vendas.

---

## 2. Atores do Sistema

* **Captador de Lead:** Profissional da linha de frente encarregado do primeiro contato do cliente via redes sociais ou telefone. Responsável por registrar o chamado e atribuir o responsável inicial.
* **Atendente Comercial:** Colaborador que assume o chamado no sistema, inicia e encerra interações cronometradas, registra notas de atendimento e avança a negociação pelas etapas comerciais.
* **Gestor Comercial:** Usuário responsável por visualizar o painel geral de métricas, acompanhar relatórios de tempo acumulado e valores negociados por atendente e gerenciar/excluir chamados do sistema.

---

## 3. Histórias de Usuário e Escopo

### 👤 Épico 1: Sessão e Captura de Leads

* **US01 - Identificação do Atendente (Sessão Local):** Como **Atendente Comercial**, quero selecionar meu perfil no sistema para que os atendimentos iniciados e os registros de tempo fiquem vinculados ao meu nome.
* *Critérios de Aceitação:* O perfil selecionado deve ser persistido no `localStorage`; a interface deve indicar visualmente o atendente logado na barra de navegação.


* **US02 - Cadastro de Novo Lead:** Como **Captador de Lead**, quero preencher um formulário validado contendo os dados do cliente, canal de origem, CEP e prioridade para registrar a oportunidade no sistema.
* *Critérios de Aceitação:* Todos os campos obrigatórios devem possuir validação nativa HTML5 e regex (e-mail e telefone com máscara via jQuery); ao preencher o CEP, a busca de endereço deve ser feita de forma assíncrona via API ViaCEP; o formulário deve salvar os dados na API Fake via requisição `POST`.



### ⏱️ Épico 2: Cronometragem e Gestão Comercial

* **US03 - Visualização do Dashboard:** Como **Gestor Comercial**, quero visualizar os chamados em uma tabela responsiva ou em cards com badges de status, canal e atendente para acompanhar o andamento dos atendimentos em tempo real.
* *Critérios de Aceitação:* A listagem deve consumir dados da API Fake via requisição `GET`; a interface deve usar classes de grid e componentes responsivos do Bootstrap.


* **US04 - Cronometragem de Ação:** Como **Atendente Comercial**, quero acionar e pausar um cronômetro ao interagir com um cliente para contabilizar exatamente quanto tempo foi investido naquela ação.
* *Critérios de Aceitação:* O tempo corrente deve realizar autosave no `localStorage` para evitar perda de dados caso a página seja atualizada; ao finalizar a ação, o tempo gasto deve ser somado ao tempo total do chamado.


* **US05 - Registro de Ação e Atualização de Estágio:** Como **Atendente Comercial**, quero registrar um relato do atendimento e atualizar a etapa comercial (ex: de *Orçamento* para *Venda Fechada*) com o valor negociado para manter o histórico transparente.
* *Critérios de Aceitação:* O relato deve criar um novo registro na entidade de histórico da API Fake; o chamado principal deve ser atualizado via requisição `PATCH` alterando o status e o tempo total acumulado.



### 🛠️ Épico 3: Manutenção do Sistema

* **US06 - Edição e Exclusão de Chamados:** Como **Gestor Comercial**, quero editar dados incorretos ou excluir chamados duplicados/cancelados para manter a base de dados higienizada.
* *Critérios de Aceitação:* A exclusão deve solicitar confirmação do usuário via componente Modal do Bootstrap e emitir requisição `DELETE` para a API Fake.