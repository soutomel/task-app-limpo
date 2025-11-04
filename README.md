# Gerenciador de Tarefas (React Native - Expo)

Este é um protótipo funcional de aplicativo móvel desenvolvido em React Native (com o framework Expo) para gerenciamento de tarefas. O projeto foi construído para demonstrar os conceitos de navegação entre telas, persistência de dados local (AsyncStorage) e as operações básicas de CRUD (Create, Read, Update, Delete).

## 🚀 Funcionalidades

* **Cadastro:** Adição de novas tarefas (Create).
* **Listagem:** Visualização de todas as tarefas salvas (Read).
* **Edição:** Alteração da descrição de tarefas existentes (Update).
* **Exclusão:** Remoção permanente de tarefas (Delete).
* **Persistência Local:** Utiliza `AsyncStorage` para manter as tarefas salvas mesmo após o fechamento do aplicativo.
* **Navegação:** Implementa navegação stack usando `React Navigation`.

## ⚙️ Configuração e Instalação

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm ou Yarn
* Expo Go (no seu celular ou emulador)

### Rodando o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/soutomel/task-app-limpo.git](https://github.com/soutomel/task-app-limpo.git)
    cd task-app-limpo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # OU
    yarn install
    ```

3.  **Inicie o servidor Expo:**
    ```bash
    npx expo start
    ```

4.  **Acesse o App:** Use o aplicativo Expo Go no seu celular e escaneie o QR Code exibido no terminal.

## 📁 Estrutura de Pastas

* `App.js`: Ponto de entrada principal e configuração da navegação.
* `screens/`: Contém os componentes que representam telas inteiras (`TaskListScreen.js`, `TaskFormScreen.js`).
* `src/`: Contém a lógica de dados, como o Contexto e Persistência (`TaskContext.js`).
* `components/`: Contém componentes reutilizáveis menores, como o item de lista (`TaskItem.js`).
