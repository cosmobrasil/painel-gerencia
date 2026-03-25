# Dashboard Gerencial

Aplicação administrativa para listar formulários respondidos e abrir ou baixar o PDF individual de cada resposta.

## Endpoints usados

- `GET /api/admin/respostas`
- `GET /api/admin/respostas/:id/pdf`

## Estrutura

- `index.html`: frontend estatico do dashboard gerencial

## Acesso

Se `ADMIN_PANEL_TOKEN` estiver configurado no backend, informe o token no campo do painel para consultar a lista e abrir os PDFs.
