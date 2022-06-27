require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
// const { seed } = require('../database/seed.js')
const { getWeapons, getSingleWeapon, getMonsters, getSingleMonster, getDamages, getSingleDamage } = require('../database/controller.js')
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env


app.use(express.json())
app.use(cors())

// app.post('/seed', seed)

app.get('/damages', getDamages)
// app.get('/damageSingle', getSingleDamage)

app.get('/weapons', getWeapons)
// app.get('/weaponSingle', getSingleWeapon)

app.get('/monsters', getMonsters)
// app.get('/monsterSingle', getSingleMonster)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))