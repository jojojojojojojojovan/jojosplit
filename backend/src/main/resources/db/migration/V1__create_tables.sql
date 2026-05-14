CREATE TABLE users (
    id    BIGSERIAL PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

CREATE TABLE groups (
    id         BIGSERIAL PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE TABLE group_members (
    id         BIGSERIAL PRIMARY KEY,
    group_id   BIGINT    NOT NULL REFERENCES groups(id),
    user_id    BIGINT    NOT NULL REFERENCES users(id),
    UNIQUE (group_id, user_id)
);

CREATE TABLE transactions (
    id         BIGSERIAL    PRIMARY KEY,
    group_id   BIGINT       NOT NULL REFERENCES groups(id),
    created_by BIGINT       NOT NULL REFERENCES users(id),
    name       VARCHAR(100) NOT NULL,
    date       DATE         NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE TABLE transaction_members (
    id             BIGSERIAL     PRIMARY KEY,
    transaction_id BIGINT        NOT NULL REFERENCES transactions(id),
    member_id      BIGINT        NOT NULL REFERENCES group_members(id),
    amount         NUMERIC(19,4) NOT NULL
);