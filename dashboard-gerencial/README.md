# Dashboard Gerencial

Aplicação administrativa para listar formulários respondidos e abrir ou baixar o HTML original de cada resposta.

## Endpoints usados

- `GET /api/admin/respostas`
- `GET /api/admin/respostas/:id/html`

## Estrutura

- `index.html`: frontend estatico do dashboard gerencial

## Acesso

Se `ADMIN_PANEL_TOKEN` estiver configurado no backend, informe o token no campo do painel para consultar a lista e abrir os relatórios HTML.
