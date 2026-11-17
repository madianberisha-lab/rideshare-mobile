
-- Java 9: Udhëtimet e preferuara
-- RideShare - Neon / PostgreSQL

CREATE TABLE IF NOT EXISTS preferimet (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    perdoruesi_id TEXT NOT NULL,
    udhetimi_id INTEGER NOT NULL,
    krijuar_me TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_preferimet_perdoruesi
        FOREIGN KEY (perdoruesi_id)
        REFERENCES profilet(github_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_preferimet_udhetimi
        FOREIGN KEY (udhetimi_id)
        REFERENCES udhetimet(id)
        ON DELETE CASCADE,

    CONSTRAINT unique_preferim
        UNIQUE (perdoruesi_id, udhetimi_id)
);
