import pg from 'pg';


let credentails = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: {rejectUnauthorized: false,}
};


const pool = new pg.Pool(credentails);




export function query(text, params, callback) {
    return pool.query(text, params, callback);
}


