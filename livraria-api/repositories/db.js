import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://ntzrafen:roEUSyHg2AlqsnKjVwerWAF7OeCY91jC@fanny.db.elephantsql.com/ntzrafen"
    });
    global.connection = pool;
    
    return pool.connect();
}

export {
    connect
}