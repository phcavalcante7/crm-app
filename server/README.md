# 🔧 Server - Backend CRM 
Backend do sistema CRM desenvolvido com Node.js, Express e TypeScript.

## 🚀 Tecnologias

- **Runtime:** Node.js
- **Framework:** Express
- **Linguagem:** TypeScript
- **ORM:** Prisma
- **Banco:** PostgreSQL
- **Autenticação:** JWT
- **Validação:** Zod

## 🔧 Configuração

```bash
# 1. Configure as variáveis de ambiente:
cp .env.example .env

# 2. Execute as migrações:
npm run db:migrate

# 3. Inicie o servidor:
npm run dev
``` 

## 📡 API Endpoints
### Autenticação
- POST /api/auth/login - Login
- POST /api/auth/register - Registro

### Consórcios
- GET /api/consortiums - Listar consórcios
- POST /api/consortiums - Criar consórcio
- GET /api/consortiums/:id - Buscar consórcio
- PUT /api/consortiums/:id - Atualizar consórcio
- DELETE /api/consortiums/:id - Deletar consórcio

### Financiamentos
- GET /api/financings - Listar financiamentos
- POST /api/financings - Criar financiamento
- GET /api/financings/:id - Buscar financiamento
- PUT /api/financings/:id - Atualizar financiamento
- DELETE /api/financings/:id - Deletar financiamento