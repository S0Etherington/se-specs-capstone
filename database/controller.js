require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getWeapons: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM weapons
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },

    // getSingleWeapon: (req, res) => {
    //     sequelize.query(`
    //         SELECT *
    //         FROM weapons
    //         WHERE weapon_id = ${weaponId}
    //     `)
    //     .then(dbRes => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch(err => console.log(err))
    // },

    getMonsters: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM monsters
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },

    // getSingleMonster: (req, res) => {
    //     sequelize.query(`
    //         SELECT *
    //         FROM monsters
    //         WHERE monster_id = ${monsterId}
    //     `)
    //     .then(dbRes => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch(err => console.log(err))
    // },

    getDamages: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM damage_types
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },

    // getSingleDamage: (req, res) => {
    //     sequelize.query(`
    //         SELECT *
    //         FROM damage_types
    //         WHERE damage_id = ${damageId}
    //     `)
    //     .then(dbRes => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch(err => console.log(err))
    // }
}