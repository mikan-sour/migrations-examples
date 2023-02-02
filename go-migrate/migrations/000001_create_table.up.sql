CREATE TABLE
    IF NOT EXISTS app.users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        username VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(50) UNIQUE NOT NULL,
        active BOOLEAN DEFAULT true,
        is_admin BOOLEAN DEFAULT false,
        created_date timestamp without time zone NOT NULL DEFAULT (
            current_timestamp AT TIME ZONE 'UTC'
        )
    );
CREATE 
    TABLE IF NOT EXISTS app.posts (
        id SERIAL PRIMARY KEY,
        created_by uuid,
        content TEXT,
        CONSTRAINT fk_user
            FOREIGN KEY(created_by) 
                REFERENCES app.users(id) ON DELETE CASCADE
    );