BEGIN;

ALTER TABLE 
    app.users
ADD COLUMN 
    is_admin BOOLEAN DEFAULT false;

UPDATE app.users SET is_admin = false;
UPDATE app.users SET is_admin = true; WHERE username = 'system';

COMMIT;