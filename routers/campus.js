import Router from 'express';

const storageCampus = Router();

storageCampus.get("/", (req, res) => {
res.send("soy get");
})
storageCampus.post("/", (req, res) => {
    res.send("soy post");
    })

export default storageCampus;