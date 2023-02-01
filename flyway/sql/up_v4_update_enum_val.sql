BEGIN;
UPDATE app.users SET user_type = 'viewer';
UPDATE app.users SET user_type = 'admin' WHERE username = 'system';
UPDATE app.users SET user_type = 'editor' WHERE username = 'editor';
ALTER TABLE 
    app.users
DROP COLUMN 
    is_admin;
COMMIT;