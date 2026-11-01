-- EXERCÍCIO 3 — Consultas SQL
-- CONSULTA 1: Listar todo o acervo, com código, título, tipo e disponibilidademp.
SELECT
    item.codigo,
    item.titulo,
    item.tipo,
    item.disponivel
FROM item
ORDER BY item.titulo;

-- CONSULTA 2: Listar os empréstimos em aberto, com o nome do usuário e o título do item.
SELECT
    emp.id AS emprestimo_id,
    u.nome AS nome_usuario,
    item.titulo AS titulo_item,
    emp.data_retirada,
    emp.data_devolucao_prevista
FROM emprestimo emp
INNER JOIN usuario u ON emp.usuario_id = u.id
INNER JOIN item ON emp.item_id = item.id
WHERE emp.data_devolucao IS NULL
ORDER BY emp.data_devolucao_prevista;

-- CONSULTA 3: Calcular o total de multas acumuladas por usuário.
SELECT
    u.id AS usuario_id,
    u.nome AS nome_usuario,
    SUM(emp.valor_multa) AS total_multas_acumuladas
FROM usuario u
INNER JOIN emprestimo emp ON u.id = emp.usuario_id
GROUP BY u.id, u.nome
ORDER BY total_multas_acumuladas DESC;


-- CONSULTA 4: Listar os itens que nunca foram emprestados.
SELECT
    item.id,
    item.codigo,
    item.titulo,
    item.tipo,
    item.disponivel
FROM item
LEFT JOIN emprestimo emp ON item.id = emp.item_id
WHERE emp.id IS NULL
ORDER BY item.codigo;

