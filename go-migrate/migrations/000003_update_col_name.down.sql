BEGIN;
ALTER TABLE 
    app.users 
DROP COLUMN 
    user_type;
DROP TYPE app.e_user_type;
COMMIT;
