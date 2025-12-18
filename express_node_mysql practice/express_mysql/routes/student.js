const express = require("express")
const pool = require("../db/pool")
const result = require("../utils/result")

const router = express.Router()

router.get("/", (req, res) => {
    const sql = `SELECT * FROM students`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post("/", (request, response) => {
    const { name, email, course } = request.body
    const sql = `INSERT INTO students(name,email,course) VALUES(?,?,?)`
    pool.query(sql, [name, email, course], (error, data) => {
        response.send(result.createResult(error, data))
    })

})

router.put("/", (request, response) => {
    const { name,email } = request.body
    const sql="update students set email=? where name=?"
    pool.query(sql, [email,name], (error, data) => {
        response.send(result.createResult(error, data))
    })

})
router.delete("/", (request, response) => {
    const { name } = request.body
    const sql="DELETE FROM students where name=?"
    pool.query(sql, [name], (error, data) => {
        response.send(result.createResult(error, data))
    })

})

module.exports = router