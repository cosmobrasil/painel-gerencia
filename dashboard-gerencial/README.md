# Dashboard Gerencial

Aplicação administrativa para listar formulários respondidos e abrir ou baixar o HTML original de cada resposta.

## Acesso

O dashboard agora abre bloqueado por uma senha. O usuário precisa informar a senha de acesso para carregar a lista e acessar os relatórios. O acesso não é persistido entre recargas.

## Endpoints usados

- `GET /api/admin/respostas`
- `GET /api/admin/respostas/:id/html`

## Estrutura

- `index.html`: frontend estatico do dashboard gerencial
