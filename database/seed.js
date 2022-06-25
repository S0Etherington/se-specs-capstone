require('dotenv').config()
const Sequelize = require('sequelize')

const CONNECTION_STRING = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            DROP TABLE IF EXISTS damage_types;
            DROP TABLE IF EXISTS monsters;
            DROP TABLE IF EXISTS weapons;

            CREATE TABLE damage_types (
                damage_id SERIAL PRIMARY KEY,
                damage_name VARCHAR(50) NOT NULL
            );

            CREATE TABLE monsters (
                monster_id SERIAL PRIMARY KEY,
                monster_name VARCHAR(50) NOT NULL,
                hit_points INT NOT NULL,
                damage_weakness INT REFERENCES damage_types(damage_id)
            );

            CREATE TABLE weapons (
                weapon_id SERIAL PRIMARY KEY,
                weapon_name VARCHAR(50) NOT NULL,
                damage INT NOT NULL,
                damage_type INT REFERENCES damage_types(damage_id)
            );

            INSTERT INTO damage_types (damage_name)
            VALUES ('Ice'), 
                ('Fire'),
                ('Shock'),
                ('Poison'),
                ('Light');

            INSTERT INTO monsters (monster_name, hit_points, damage_weakness)
            VALUES ('Slime', 50, 1),
                ('Glacial Wolf', 100, 2),
                ('Water Sprite', 200, 3),
                ('Forest Imp', 300, 4),
                ('Shadow Serpent', 800, 5);

            INSERT INTO weapons (weapon_name, damage, damage_type)
            VALUES ('Dagger', 25, 1),
                ('Bow and Arrow', 30, 2),
                ('Morning Star', 75, 3),
                ('Blow Darts', 75, 4),
                ('Battle Axe', 150, 5);
        `).then(() => {
            console.log('Database seeded')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding database', err))
    }
}