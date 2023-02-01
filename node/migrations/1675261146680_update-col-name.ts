/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;


const upSQL = `
    BEGIN;
        CREATE TYPE app.e_user_type AS ENUM ('admin', 'editor', 'viewer');
        ALTER TABLE 
            app.users 
        ADD COLUMN 
            user_type app.e_user_type DEFAULT 'viewer';
    COMMIT;

    `


const downSQL = ` BEGIN;
    ALTER TABLE 
        app.users 
    DROP COLUMN 
        user_type;
    
    DROP TYPE app.e_user_type;

    COMMIT;

    `


export async function up(pgm: MigrationBuilder): Promise<void> {
    try {
        pgm.sql(upSQL)
        // pgm.addType('app.e_user_type',['admin','editor','viewer']);
        // pgm.addColumn('users', {['user_type']:{type:'app.e_user_type',default:'viewer'}})
    } catch (error) {
        console.error(error)
    }
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    try {
        pgm.sql(downSQL)
        // pgm.dropType('app.e_user_type');
        // pgm.dropColumn('users', 'user_type')
    } catch (error) {
        console.error(error)
    }
}
