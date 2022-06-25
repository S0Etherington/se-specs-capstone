require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const { seed } = require('../database/seed.js')
const { getWeapons, getSingleWeapon, getMonsters, getSingleMonster, getDamages, getSingleDamage } = require('../database/controller.js')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.get('/damages', getDamages)
app.get('/damages', getSingleDamage)

app.get('/weapons', getWeapons)
app.get('/weapons', getSingleWeapon)

app.get('/monsters', getMonsters)
app.get('/monsters', getSingleMonster)
