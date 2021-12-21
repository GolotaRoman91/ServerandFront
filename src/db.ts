import {Client} from 'pg';
import {dbstring} from './constants';

const client = new Client(dbstring);

client.connect();

export async function getUsers() {
  const result = await client.query('SELECT * FROM users');
  return result.rows;
}

export async function createUser(user) {
  const {firstName, lastName, phone, email, adress} = user;
  const query = `insert into users (firstName, lastName, phone, email, adress)
  values ('${firstName}', '${lastName}', '${phone}', '${email}', '${adress}')`;
  console.log(query);
  const result = await client.query(query);
  return result.rows
}
