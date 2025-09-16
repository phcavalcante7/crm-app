# 🏦 CRM  - Sistema de Gestão de Consórcios e Financiamentos

Sistema CRM especializado para gestão de consórcios, financiamentos, seguridade, .

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/phcavalcante7/crm-app.git
cd crm-app

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
cp server/.env.example server/.env
cp client/.env.example client/.env

# Configure o banco de dados
npm run db:migrate
npm run db:seed

# Inicie o desenvolvimento
npm run dev
```

### 📦 Scripts Disponíveis
- npm run dev - Inicia servidor e cliente em modo desenvolvimento <br>
- npm run build - Build de produção <br>
- npm run lint - Executa linting <br>
- npm run format - Formata código com Prettier <br>
- npm run test - Executa testes <br>

### 🛠️ Stacks

#### BACKEND: 
- Node.js + Express
- TypeScript 
- Prisma ORL + PostgreSQL
- JWT Authentication
- Zod Validation

#### FRONTEND: 
- React 18
- Vite
- TypeScript 
- Tailwind CSS
- Shadcn/ui
- React Router
- Axios