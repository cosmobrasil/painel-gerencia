# Painel de Gerência

Painel HTML simples com listagem de respostas e acesso ao PDF de cada relatório.

## Arquivos
- `painel-relatorios.html`: página do painel
- `backend/server.js`: endpoints `/api/admin/respostas` e `/api/admin/respostas/:id/pdf`
- `backend/package.json`: dependências (`pdfkit`, etc.)

## Token admin
Configure no backend:
- `ADMIN_PANEL_TOKEN`
