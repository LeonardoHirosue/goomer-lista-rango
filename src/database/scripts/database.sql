DROP TABLE IF EXISTS tb_adresses;
DROP TABLE IF EXISTS tb_availabilities;
DROP TABLE IF EXISTS tb_establishments;

CREATE TABLE IF NOT EXISTS tb_establishments (
    id text,
    image text,
    name text,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tb_adresses (
    id text,
    country text,
    state text,
    city text,
    district text,
    street text,
    number text,
    postal_code text,
    complement text,
    reference text,
    establishment_id text UNIQUE,
    PRIMARY KEY (id),
    CONSTRAINT fk_establishment_id 
    FOREIGN KEY (establishment_id) 
    REFERENCES tb_establishments (id) ON DELETE CASCADE
);

DROP TYPE weekday;

CREATE TYPE weekday AS ENUM (
    'segunda-feira', 
    'terça-feira', 
    'quarta-feira', 
    'quinta-feira', 
    'sexta-feira', 
    'sábado', 
    'domingo'
);

CREATE TABLE IF NOT EXISTS tb_availabilities (
    id text,
    day_of_week weekday,
    start_time time,
    end_time time,
    establishment_id text,
    PRIMARY KEY (id),
    CONSTRAINT fk_establishment_id 
    FOREIGN KEY (establishment_id) 
    REFERENCES tb_establishments (id) ON DELETE CASCADE
);

INSERT INTO tb_establishments VALUES(
    '50c18138-243a-4803-b3e6-96b5458b3b49',
    'imagem.png',
    'Naomi Culinária Japonesa'
);

INSERT INTO tb_adresses VALUES(
    '8e7d704e-cd73-42cf-8586-d5328173542f',
    'Brasil',
    'São Paulo',
    'Sorocaba',
    'Jardim Paulistano',
    'Av. Presidente Kennedy',
    '149',
    '18040-550',
    'Restaurante Japonês',
    'Sem referência',
    '50c18138-243a-4803-b3e6-96b5458b3b49'
);

INSERT INTO tb_availabilities VALUES(
    '7dda6ba5-da65-4ed5-b5a3-ba30b9a67a5b',
    'segunda-feira',
    '12:00',
    '22:30',
    '50c18138-243a-4803-b3e6-96b5458b3b49'
);

INSERT INTO tb_availabilities VALUES(
    '7dda6ba5-da65-4ed5-b5a3-ba30b9a67a5c',
    'segunda-feira',
    '14:00',
    '14:30',
    '50c18138-243a-4803-b3e6-96b5458b3b49'
);