import path from 'path'
import PostgresClient from '../libs/PostgresClient'

const postgres_url = process.env.DATABASE_URL || 'postgres://localhost:5432/ourlove_test'
const noop = () => {}

const postgres = new PostgresClient(postgres_url, {max: 1})

export async function connect(shouldTruncate) {
  await _init(postgres, shouldTruncate)
  return postgres
}

async function _init(postgres, shouldTruncate) {
  await Promise.all([
    createUsers(postgres),
    createUsersOAuthIntegrations(postgres),
    createUsersOAuthIntegrationsIndexes(postgres),
    createRelationships(postgres),
    createRelationshipsIndexes(postgres),
    createUsersRelationshipsMap(postgres)
  ])

  if (shouldTruncate)
    await truncateTables(postgres)
}


async function createUsers(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS users (
      id serial PRIMARY KEY,
      name varchar(255),
      primary_email varchar(255),
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createUsersOAuthIntegrations(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS users_oauth_integrations (
      id serial PRIMARY KEY,
      user_id integer REFERENCES users,
      type varchar(255),
      unique_id varchar(255),
      access_token varchar(255),
      refresh_token varchar(255),
      first_name varchar(255),
      last_name varchar(255),
      email varchar(255),
      expires timestamp,
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createUsersOAuthIntegrationsIndexes(postgres) {
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS users_oauth_integrations_unique_id on users_oauth_integrations (unique_id)`)
}

async function createRelationships(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS relationships (
      id serial PRIMARY KEY,
      created_user_id integer REFERENCES users,
      path varchar(255),
      person1_name varchar(255),
      person2_name varchar(255),
      relationship_primary_image varchar(255),
      relationship_started timestamp(6) without time zone,
      relationship_married timestamp(6) without time zone,
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function createRelationshipsIndexes(postgres) {
  await postgres.query(`CREATE INDEX CONCURRENTLY IF NOT EXISTS relationships_path on relationships (path)`)
}

async function createUsersRelationshipsMap(postgres) {
  await postgres.query(`
    CREATE TABLE IF NOT EXISTS users_relationships_map (
      id serial PRIMARY KEY,
      user_id integer REFERENCES users,
      relationships_id integer REFERENCES relationships,
      created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
      updated_at timestamp(6) without time zone NOT NULL DEFAULT now()
    );
  `)
}

async function truncateTables(postgres) {
  // Truncate all tables
  await postgres.query(`
    truncate  users,
              relationships,
              users_relationships_map;
  `)
}
