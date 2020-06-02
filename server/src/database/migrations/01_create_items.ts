//imports
import Knex from 'knex';

//create table
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

//delete table
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}