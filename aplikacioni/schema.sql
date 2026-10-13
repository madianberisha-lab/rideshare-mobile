
CREATE TABLE IF NOT EXISTS udhetimet (
    id SERIAL PRIMARY KEY,
    nisja TEXT NOT NULL,
    destinacioni TEXT NOT NULL,
    ora TEXT NOT NULL,
    vendtakimi TEXT NOT NULL,
    vende INTEGER NOT NULL DEFAULT 0
);

INSERT INTO udhetimet (nisja, destinacioni, ora, vendtakimi, vende)
SELECT 'Prishtine', 'AAB', '08:00', 'Stacioni i autobuseve', 2
WHERE NOT EXISTS (SELECT 1 FROM udhetimet WHERE id = 1);

INSERT INTO udhetimet (nisja, destinacioni, ora, vendtakimi, vende)
SELECT 'Fushe Kosove', 'AAB', '08:15', 'Te stacioni kryesor', 1
WHERE NOT EXISTS (SELECT 1 FROM udhetimet WHERE id = 2);

INSERT INTO udhetimet (nisja, destinacioni, ora, vendtakimi, vende)
SELECT 'Lipjan', 'AAB', '07:45', 'Qendra e qytetit', 0
WHERE NOT EXISTS (SELECT 1 FROM udhetimet WHERE id = 3);
