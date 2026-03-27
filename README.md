# Painel de Gerência

Painel HTML simples com listagem de respostas e acesso ao HTML de cada relatório.

## Acesso

O painel abre bloqueado e exige a senha `Cosmob2026@` para liberar a visualização.

## Arquivos
- `index.html`: página do painel
- `backend/server.js`: endpoints `/api/admin/respostas` e `/api/admin/respostas/:id/html`
- `backend/package.json`: dependências (`pdfkit`, etc.)

## Observação

O bloqueio é feito no front-end. Se precisar de proteção real no servidor, a API também deve validar a autenticação.
