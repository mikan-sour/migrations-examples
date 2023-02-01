BEGIN;
CREATE TYPE app.e_user_type AS ENUM ('admin', 'editor', 'viewer');
ALTER TABLE app.users 
ADD COLUMN user_type e_user_type DEFAULT 'viewer';
COMMIT;
