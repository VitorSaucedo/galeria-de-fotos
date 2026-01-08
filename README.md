# Galeria de Fotos 📸

Um aplicativo web moderno de galeria de fotos construído com React, TypeScript e Tailwind CSS, que utiliza a API do Unsplash para buscar e exibir fotos.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework para construção de interfaces
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Tailwind CSS** - Framework CSS para estilização rápida
- **Vite** - Build tool moderna e rápida
- **Axios** - Cliente HTTP para requisições à API
- **Lucide React** - Ícones modernos e bonitos

## ✨ Funcionalidades

- **Busca de Fotos**: Pesquise fotos por palavras-chave usando a API do Unsplash
- **Galeria Inicial**: Exibe 12 fotos aleatórias ao carregar a página
- **Loading States**: Skeleton loaders durante o carregamento
- **Feedback de Erro**: Mensagens claras quando ocorrem problemas
- **Design Responsivo**: Funciona em dispositivos móveis, tablets e desktop
- **Debounce**: Busca com delay de 500ms para melhor performance
- **Hover Effects**: Animações suaves ao passar o mouse sobre as fotos

## 📁 Estrutura do Projeto

```
galeria-fotos/
├── src/
│   ├── @types/
│   │   └── photo.ts           # Tipagem das fotos
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Cabeçalho da aplicação
│   │   │   └── Footer.tsx     # Rodapé
│   │   └── ui/
│   │       ├── PhotoCard.tsx  # Card individual da foto
│   │       └── SearchBar.tsx  # Barra de busca
│   ├── hooks/
│   │   └── usePhotos.ts       # Hook customizado para gerenciar fotos
│   ├── services/
│   │   └── api.ts             # Configuração e serviços da API
│   ├── App.tsx                # Componente principal
│   ├── main.tsx               # Ponto de entrada
│   └── App.css                # Estilos globais
├── public/
├── .env.local                 # Variáveis de ambiente (API key)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🔧 Configuração

### Pré-requisitos
- Node.js 18+
- NPM ou Yarn
- Chave de API do Unsplash

### Instalação

1. Clone o repositório:
```bash
git clone <repo-url>
cd galeria-fotos
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a chave de API:
Crie um arquivo `.env.local` na raiz do projeto com:
```env
VITE_UNSPLASH_ACCESS_KEY=sua_chave_de_api_aqui
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📋 Requisitos da API

O projeto utiliza a API do Unsplash. Você precisa:

1. Criar uma conta em [Unsplash](https://unsplash.com)
2. Registrar uma aplicação em [Unsplash Developers](https://unsplash.com/developers)
3. Gerar uma chave de acesso (Access Key)
4. Adicionar a chave no arquivo `.env.local`

## 🎨 Estilização

O projeto utiliza **Tailwind CSS** com configuração moderna (v4). Os principais recursos:

- **Cores**: Tons de cinza para fundos e texto, com efeitos de hover
- **Espaçamento**: Sistema consistente de padding e margin
- **Responsividade**: Breakpoints para mobile, tablet e desktop
- **Animações**: Transições suaves em hover e loading

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a:

- **Mobile**: 1 coluna de fotos
- **Tablet**: 2 colunas de fotos
- **Desktop**: 4 colunas de fotos

## 🚨 Tratamento de Erros

- **API Key ausente**: Mensagem clara sobre configuração necessária
- **Sem conexão**: Feedback de erro com sugestão de verificação
- **Nenhuma foto encontrada**: Mensagem amigável com dicas de busca

## 🔒 Segurança

- A chave da API é armazenada em variável de ambiente
- Não exposta no código fonte
- Utilizada apenas no lado do cliente (Vite)

## 📝 Licença

Este é um projeto de aprendizado e demonstração. As fotos são fornecidas pela API do Unsplash e estão sujeitas aos termos de uso da plataforma.