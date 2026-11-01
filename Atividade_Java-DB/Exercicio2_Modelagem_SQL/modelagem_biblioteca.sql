-- EXERCÍCIO 2 — Modelagem do Banco de Dados

-- Drop das tabelas iniciais
DROP TABLE IF EXISTS emprestimo;
DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS item;


-- 1. TABELA `item` (Item 11)
-- Colunas: id, codigo, titulo, tipo, autor, edicao, disponivel
CREATE TABLE item (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    codigo      VARCHAR(20)  NOT NULL UNIQUE,
    titulo      VARCHAR(150) NOT NULL,
    tipo        VARCHAR(20)  NOT NULL CHECK (tipo IN ('livro', 'revista')),
    autor       VARCHAR(100),                     -- Preenchido quando for livro (NULL para revista)
    edicao      INT,                              -- Preenchido quando for revista (NULL para livro)
    disponivel  BOOLEAN      NOT NULL DEFAULT TRUE
);

-- 2. TABELA `usuario`
-- Colunas: id, nome, tipo, limite_itens
CREATE TABLE usuario (
    id            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome          VARCHAR(100) NOT NULL,
    tipo          VARCHAR(20)  NOT NULL CHECK (tipo IN ('aluno', 'professor')),
    limite_itens  INT          NOT NULL CHECK (limite_itens > 0)
);

-- 3. TABELA `emprestimo`
-- Colunas: id, item_id, usuario_id, data_retirada, data_devolucao_prevista, data_devolucao, valor_multa
CREATE TABLE emprestimo (
    id                      INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_id                 INT            NOT NULL REFERENCES item(id),
    usuario_id              INT            NOT NULL REFERENCES usuario(id),
    data_retirada           DATE           NOT NULL,
    data_devolucao_prevista DATE           NOT NULL,
    data_devolucao          DATE,                                      
    valor_multa             NUMERIC(10, 2) NOT NULL DEFAULT 0.00 CHECK (valor_multa >= 0)
);

-- 4. INSERÇÃO DE DADOS DE TESTE
-- Dados:
INSERT INTO item (codigo, titulo, tipo, autor, edicao, disponivel) VALUES
    -- 20 LIVROS (id 1 a 20)
    ('LIV-001', 'O Senhor dos Anéis: A Sociedade do Anel', 'livro', 'J.R.R. Tolkien',        NULL, FALSE), -- id = 1  (Emprestado atualmente)
    ('LIV-002', 'O Senhor dos Anéis: As Duas Torres',      'livro', 'J.R.R. Tolkien',        NULL, FALSE), -- id = 2  (Emprestado atualmente)
    ('LIV-003', 'O Senhor dos Anéis: O Retorno do Rei',    'livro', 'J.R.R. Tolkien',        NULL, FALSE), -- id = 3  (Emprestado atualmente)
    ('LIV-004', 'O Hobbit',                                'livro', 'J.R.R. Tolkien',        NULL, FALSE), -- id = 4  (Emprestado atualmente)
    ('LIV-005', 'O Silmarillion',                          'livro', 'J.R.R. Tolkien',        NULL, FALSE), -- id = 5  (Emprestado atualmente)
    ('LIV-006', 'Duna',                                    'livro', 'Frank Herbert',         NULL, FALSE), -- id = 6  (Emprestado atualmente)
    ('LIV-007', 'Fundação',                                'livro', 'Isaac Asimov',          NULL, FALSE), -- id = 7  (Emprestado atualmente)
    ('LIV-008', 'Eu, Robô',                                'livro', 'Isaac Asimov',          NULL, TRUE),  -- id = 8  (Disponível - já teve empréstimos)
    ('LIV-009', 'Neuromancer',                             'livro', 'William Gibson',        NULL, TRUE),  -- id = 9  (Disponível - já teve empréstimos)
    ('LIV-010', 'O Guia do Mochileiro das Galáxias',       'livro', 'Douglas Adams',         NULL, TRUE),  -- id = 10 (Disponível - já teve empréstimos)
    ('LIV-011', 'Androides Sonham com Ovelhas Elétricas?', 'livro', 'Philip K. Dick',        NULL, TRUE),  -- id = 11 (Disponível - já teve empréstimos)
    ('LIV-012', '2001: Uma Odisseia no Espaço',            'livro', 'Arthur C. Clarke',      NULL, TRUE),  -- id = 12 (Disponível - já teve empréstimos)
    ('LIV-013', 'Deuses Americanos',                       'livro', 'Neil Gaiman',           NULL, TRUE),  -- id = 13 (Disponível - já teve empréstimos)
    ('LIV-014', 'O Nome do Vento',                         'livro', 'Patrick Rothfuss',      NULL, TRUE),  -- id = 14 (Disponível - já teve empréstimos)
    ('LIV-015', 'O Caminho dos Reis',                      'livro', 'Brandon Sanderson',     NULL, TRUE),  -- id = 15 (Disponível - já teve empréstimos)
    ('LIV-016', 'Código Limpo (Clean Code)',               'livro', 'Robert C. Martin',      NULL, TRUE),  -- id = 16 (Disponível - já teve empréstimos)
    ('LIV-017', 'Arquitetura Limpa',                       'livro', 'Robert C. Martin',      NULL, TRUE),  -- id = 17 (Disponível - já teve empréstimos)
    ('LIV-018', 'Padrões de Projetos (GoF)',               'livro', 'Erich Gamma et al.',    NULL, TRUE),  -- id = 18 (NUNCA EMPRESTADO)
    ('LIV-019', 'Refatoração',                             'livro', 'Martin Fowler',         NULL, TRUE),  -- id = 19 (NUNCA EMPRESTADO)
    ('LIV-020', 'O Programador Pragmático',                'livro', 'Andrew Hunt',           NULL, TRUE),  -- id = 20 (NUNCA EMPRESTADO)
    ('REV-001', 'Weekly Shonen Jump',                      'revista', NULL,                  2026, FALSE), -- id = 21 (Emprestado atualmente)
    ('REV-002', 'Batman: O Cavaleiro das Trevas',          'revista', NULL,                  1,    FALSE), -- id = 22 (Emprestado atualmente)
    ('REV-003', 'Watchmen - Edição Definitiva',            'revista', NULL,                  12,   FALSE), -- id = 23 (Emprestado atualmente)
    ('REV-004', 'Sandman: Prelúdios e Noturnos',           'revista', NULL,                  8,    TRUE),  -- id = 24 (Disponível - já teve empréstimos)
    ('REV-005', 'Akira - Edição Especial',                 'revista', NULL,                  38,   TRUE),  -- id = 25 (Disponível - já teve empréstimos)
    ('REV-006', 'One Piece Magazine',                      'revista', NULL,                  15,   TRUE),  -- id = 26 (Disponível - já teve empréstimos)
    ('REV-007', 'Marvel Comics: Guerra Civil',             'revista', NULL,                  7,    TRUE),  -- id = 27 (Disponível - já teve empréstimos)
    ('REV-008', 'Fullmetal Alchemist Guidebook',           'revista', NULL,                  3,    TRUE),  -- id = 28 (Disponível - já teve empréstimos)
    ('REV-009', 'Berserk Official Guidebook',              'revista', NULL,                  41,   TRUE),  -- id = 29 (NUNCA EMPRESTADO)
    ('REV-010', 'Homem-Aranha: A Última Caçada de Kraven', 'revista', NULL,                  6,    TRUE);  -- id = 30 (NUNCA EMPRESTADO)


-- 4.2 Inserindo usuários
-- - 18 Alunos
-- - 7 Professores

INSERT INTO usuario (nome, tipo, limite_itens) VALUES
    -- 18 ALUNOS (id 1 a 18 | limite = 3)
    ('Frodo Bolseiro',       'aluno',     3), -- id = 1  (Senhor dos Anéis)
    ('Samwise Gamgee',       'aluno',     3), -- id = 2  (Senhor dos Anéis)
    ('Aragorn Elessar',      'aluno',     3), -- id = 3  (Senhor dos Anéis)
    ('Legolas Verdefolha',   'aluno',     3), -- id = 4  (Senhor dos Anéis)
    ('Gimli Filho de Glóin', 'aluno',     3), -- id = 5  (Senhor dos Anéis)
    ('Peter Parker',         'aluno',     3), -- id = 6  (HQ - Homem-Aranha)
    ('Miles Morales',        'aluno',     3), -- id = 7  (HQ - Homem-Aranha)
    ('Dick Grayson',         'aluno',     3), -- id = 8  (HQ - Asa Noturna)
    ('Barbara Gordon',       'aluno',     3), -- id = 9  (HQ - Batgirl / Oráculo)
    ('Wally West',           'aluno',     3), -- id = 10 (HQ - Flash)
    ('Kamala Khan',          'aluno',     3), -- id = 11 (HQ - Ms. Marvel)
    ('Monkey D. Luffy',      'aluno',     3), -- id = 12 (Mangá - One Piece)
    ('Roronoa Zoro',         'aluno',     3), -- id = 13 (Mangá - One Piece)
    ('Naruto Uzumaki',       'aluno',     3), -- id = 14 (Mangá - Naruto)
    ('Edward Elric',         'aluno',     3), -- id = 15 (Mangá - Fullmetal Alchemist)
    ('Son Goku',             'aluno',     3), -- id = 16 (Mangá - Dragon Ball)
    ('Ichigo Kurosaki',      'aluno',     3), -- id = 17 (Mangá - Bleach)
    ('Tanjiro Kamado',       'aluno',     3), -- id = 18 (Mangá - Demon Slayer)

    -- 7 PROFESSORES (id 19 a 25 | limite = 5)
    ('Gandalf o Cinzento',   'professor', 5), -- id = 19 (Senhor dos Anéis)
    ('Galadriel de Lórien',  'professor', 5), -- id = 20 (Senhor dos Anéis)
    ('Elrond de Valfenda',   'professor', 5), -- id = 21 (Senhor dos Anéis)
    ('Charles Xavier',       'professor', 5), -- id = 22 (HQ - X-Men)
    ('Bruce Wayne',          'professor', 5), -- id = 23 (HQ - Batman)
    ('Kakashi Hatake',       'professor', 5), -- id = 24 (Mangá - Naruto)
    ('Satoru Gojo',          'professor', 5); -- id = 25 (Mangá - Jujutsu Kaisen)

-- 4.3 Inserindo empréstimos:

INSERT INTO emprestimo (
    item_id,
    usuario_id,
    data_retirada,
    data_devolucao_prevista,
    data_devolucao,
    valor_multa
) VALUES
    (1,  1,  '2026-01-05', '2026-01-19', '2026-01-18', 0.00), -- #01: Frodo devolveu LIV-001 no prazo
    (2,  2,  '2026-01-05', '2026-01-19', '2026-01-23', 2.00), -- #02: Samwise devolveu LIV-002 (4 dias atraso x 0,50 = R$ 2,00)
    (3,  3,  '2026-01-06', '2026-01-20', '2026-01-20', 0.00), -- #03: Aragorn devolveu LIV-003 no prazo
    (4,  4,  '2026-01-06', '2026-01-20', '2026-01-26', 3.00), -- #04: Legolas devolveu LIV-004 (6 dias atraso x 0,50 = R$ 3,00)
    (5,  5,  '2026-01-07', '2026-01-21', '2026-01-25', 2.00), -- #05: Gimli devolveu LIV-005 (4 dias atraso x 0,50 = R$ 2,00)
    (21, 6,  '2026-01-08', '2026-01-15', '2026-01-14', 0.00), -- #06: Peter Parker devolveu REV-001 no prazo
    (22, 7,  '2026-01-08', '2026-01-15', '2026-01-18', 3.00), -- #07: Miles Morales devolveu REV-002 (3 dias atraso x 1,00 = R$ 3,00)
    (23, 8,  '2026-01-10', '2026-01-17', '2026-01-17', 0.00), -- #08: Dick Grayson devolveu REV-003 no prazo
    (24, 9,  '2026-01-10', '2026-01-17', '2026-01-22', 5.00), -- #09: Barbara Gordon devolveu REV-004 (5 dias atraso x 1,00 = R$ 5,00)
    (25, 10, '2026-01-12', '2026-01-19', '2026-01-20', 1.00), -- #10: Wally West devolveu REV-005 (1 dia atraso x 1,00 = R$ 1,00)
    (6,  11, '2026-02-02', '2026-02-16', '2026-02-15', 0.00), -- #11: Kamala Khan devolveu LIV-006 no prazo
    (7,  12, '2026-02-02', '2026-02-16', '2026-02-26', 5.00), -- #12: Luffy devolveu LIV-007 (10 dias atraso x 0,50 = R$ 5,00)
    (8,  13, '2026-02-05', '2026-02-19', '2026-02-25', 3.00), -- #13: Zoro devolveu LIV-008 (6 dias atraso x 0,50 = R$ 3,00)
    (9,  14, '2026-02-05', '2026-02-19', '2026-02-23', 2.00), -- #14: Naruto devolveu LIV-009 (4 dias atraso x 0,50 = R$ 2,00)
    (10, 15, '2026-02-10', '2026-02-24', '2026-02-20', 0.00), -- #15: Edward Elric devolveu LIV-010 no prazo
    (11, 16, '2026-03-01', '2026-03-15', '2026-03-23', 4.00), -- #16: Son Goku devolveu LIV-011 (8 dias atraso x 0,50 = R$ 4,00)
    (12, 17, '2026-03-02', '2026-03-16', '2026-03-18', 1.00), -- #17: Ichigo devolveu LIV-012 (2 dias atraso x 0,50 = R$ 1,00)
    (13, 18, '2026-03-03', '2026-03-17', '2026-03-16', 0.00), -- #18: Tanjiro devolveu LIV-013 no prazo
    (14, 19, '2026-03-05', '2026-03-19', '2026-03-19', 0.00), -- #19: Prof. Gandalf devolveu LIV-014 no prazo
    (15, 20, '2026-03-05', '2026-03-19', '2026-03-18', 0.00), -- #20: Profa. Galadriel devolveu LIV-015 no prazo
    (16, 21, '2026-04-01', '2026-04-15', '2026-04-14', 0.00), -- #21: Prof. Elrond devolveu LIV-016 no prazo
    (17, 22, '2026-04-02', '2026-04-16', '2026-04-18', 1.00), -- #22: Prof. Charles Xavier devolveu LIV-017 (2 dias atraso x 0,50 = R$ 1,00)
    (26, 23, '2026-04-10', '2026-04-17', '2026-04-17', 0.00), -- #23: Prof. Bruce Wayne devolveu REV-006 no prazo
    (27, 24, '2026-04-12', '2026-04-19', '2026-04-23', 4.00), -- #24: Prof. Kakashi devolveu REV-007 (4 dias atraso x 1,00 = R$ 4,00)
    (28, 25, '2026-04-15', '2026-04-22', '2026-04-29', 7.00), -- #25: Prof. Satoru Gojo devolveu REV-008 (7 dias atraso x 1,00 = R$ 7,00)
    (1,  19, '2026-05-01', '2026-05-15', '2026-05-15', 0.00), -- #26: Prof. Gandalf devolveu LIV-001 no prazo
    (5,  20, '2026-05-02', '2026-05-16', '2026-05-20', 2.00), -- #27: Profa. Galadriel devolveu LIV-005 (4 dias atraso x 0,50 = R$ 2,00)
    (8,  6,  '2026-05-10', '2026-05-24', '2026-05-28', 2.00), -- #28: Peter Parker devolveu LIV-008 (4 dias atraso x 0,50 = R$ 2,00)
    (9,  8,  '2026-06-01', '2026-06-15', '2026-06-14', 0.00), -- #29: Dick Grayson devolveu LIV-009 no prazo
    (10, 12, '2026-06-05', '2026-06-19', '2026-06-25', 3.00), -- #30: Luffy devolveu LIV-010 (6 dias atraso x 0,50 = R$ 3,00)
    (11, 14, '2026-07-01', '2026-07-15', '2026-07-21', 3.00), -- #31: Naruto devolveu LIV-011 (6 dias atraso x 0,50 = R$ 3,00)
    (12, 16, '2026-07-03', '2026-07-17', '2026-07-27', 5.00), -- #32: Son Goku devolveu LIV-012 (10 dias atraso x 0,50 = R$ 5,00)
    (13, 1,  '2026-07-10', '2026-07-24', '2026-07-26', 1.00), -- #33: Frodo devolveu LIV-013 (2 dias atraso x 0,50 = R$ 1,00)
    (14, 3,  '2026-08-01', '2026-08-15', '2026-08-15', 0.00), -- #34: Aragorn devolveu LIV-014 no prazo
    (15, 5,  '2026-08-04', '2026-08-18', '2026-08-22', 2.00), -- #35: Gimli devolveu LIV-015 (4 dias atraso x 0,50 = R$ 2,00)
    (16, 9,  '2026-08-10', '2026-08-24', '2026-08-24', 0.00), -- #36: Barbara Gordon devolveu LIV-016 no prazo
    (17, 15, '2026-08-12', '2026-08-26', '2026-08-25', 0.00), -- #37: Edward Elric devolveu LIV-017 no prazo
    (24, 24, '2026-09-01', '2026-09-08', '2026-09-11', 3.00), -- #38: Prof. Kakashi devolveu REV-004 (3 dias atraso x 1,00 = R$ 3,00)
    (25, 25, '2026-09-02', '2026-09-09', '2026-09-14', 5.00), -- #39: Prof. Satoru Gojo devolveu REV-005 (5 dias atraso x 1,00 = R$ 5,00)
    (26, 13, '2026-09-10', '2026-09-17', '2026-09-21', 4.00), -- #40: Zoro devolveu REV-006 (4 dias atraso x 1,00 = R$ 4,00)
    (27, 23, '2026-09-15', '2026-09-22', '2026-09-22', 0.00), -- #41: Prof. Bruce Wayne devolveu REV-007 no prazo
    (28, 17, '2026-10-01', '2026-10-08', '2026-10-12', 4.00), -- #42: Ichigo devolveu REV-008 (4 dias atraso x 1,00 = R$ 4,00)
    (8,  21, '2026-10-02', '2026-10-16', '2026-10-15', 0.00), -- #43: Prof. Elrond devolveu LIV-008 no prazo
    (1,  1,  '2026-10-22', '2026-11-05', NULL, 0.00), -- #44: EM ABERTO -> Frodo com 'LIV-001' (Sociedade do Anel)
    (2,  2,  '2026-10-23', '2026-11-06', NULL, 0.00), -- #45: EM ABERTO -> Samwise com 'LIV-002' (As Duas Torres)
    (3,  3,  '2026-10-24', '2026-11-07', NULL, 0.00), -- #46: EM ABERTO -> Aragorn com 'LIV-003' (O Retorno do Rei)
    (4,  19, '2026-10-25', '2026-11-08', NULL, 0.00), -- #47: EM ABERTO -> Prof. Gandalf com 'LIV-004' (O Hobbit)
    (5,  19, '2026-10-25', '2026-11-08', NULL, 0.00), -- #48: EM ABERTO -> Prof. Gandalf com 'LIV-005' (O Silmarillion)
    (6,  22, '2026-10-26', '2026-11-09', NULL, 0.00), -- #49: EM ABERTO -> Prof. Charles Xavier com 'LIV-006' (Duna)
    (7,  15, '2026-10-27', '2026-11-10', NULL, 0.00), -- #50: EM ABERTO -> Edward Elric com 'LIV-007' (Fundação)
    (21, 12, '2026-10-28', '2026-11-04', NULL, 0.00), -- #51: EM ABERTO -> Monkey D. Luffy com 'REV-001' (Weekly Shonen Jump)
    (22, 23, '2026-10-29', '2026-11-05', NULL, 0.00), -- #52: EM ABERTO -> Prof. Bruce Wayne com 'REV-002' (Batman: Cavaleiro das Trevas)
    (23, 6,  '2026-10-30', '2026-11-06', NULL, 0.00); -- #53: EM ABERTO -> Peter Parker com 'REV-003' (Watchmen)

