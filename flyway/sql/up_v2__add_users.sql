BEGIN;
INSERT INTO app.users(username, password, is_admin) VALUES ('system','admin',true);
INSERT INTO app.users(username, password, is_admin) VALUES ('editor','not_admin',false);
INSERT INTO app.users(username, password, is_admin) VALUES ('viewer','not_admin2',false);
COMMIT;