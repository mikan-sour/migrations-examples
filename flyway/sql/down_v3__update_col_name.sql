BEGIN;
DELETE TYPE app.e_user_type;
ALTER TABLE 
    app.users 
DROP COLUMN 
    user_type;
COMMIT;
