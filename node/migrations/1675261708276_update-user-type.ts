/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

const upSql = `
BEGIN;
UPDATE app.users SET user_type = 'viewer';
UPDATE app.users SET user_type = 'admin' WHERE username = 'system';
UPDATE app.users SET user_type = 'editor' WHERE username = 'editor';
ALTER TABLE 
    app.users
DROP COLUMN 
    is_admin;
COMMIT;`;

const downSQL = `
BEGIN;

    ALTER TABLE 
        app.users
    ADD COLUMN 
        is_admin BOOLEAN DEFAULT false;

    UPDATE app.users SET is_admin = false;
    UPDATE app.users SET is_admin = true WHERE username = 'system';

COMMIT;
`



export async function up(pgm: MigrationBuilder): Promise<void> {
    try {
        pgm.sql(upSql);
    } catch (error) {
        console.error(error)
    }
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    try {
        pgm.sql(downSQL)
    } catch (error) {
        console.error(error)
    }
}
