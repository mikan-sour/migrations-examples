/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

const upSQL = `
BEGIN;
    INSERT INTO app.users(username, password, is_admin) VALUES ('system','admin',true);
    INSERT INTO app.users(username, password, is_admin) VALUES ('editor','not_admin',false);
    INSERT INTO app.users(username, password, is_admin) VALUES ('viewer','not_admin2',false);
COMMIT;
`

const downSQL = `
BEGIN;
    DELETE FROM app.users WHERE 1 = 1;
COMMIT;
`

export async function up(pgm: MigrationBuilder): Promise<void> {
    try {
        pgm.sql(upSQL)
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
