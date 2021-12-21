const userName = 'postgres';
const userPass = '1234';
const dbPath = 'localhost:5432';
const dbName = 'users';
export const dbstring = `postgres://${userName}:${userPass}@${dbPath}/${dbName}`;
