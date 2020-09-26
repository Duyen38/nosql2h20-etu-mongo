import express from 'express';
var router = express.Router();
import m from '../db'
import { ObjectId } from 'mongodb'
import Employee from '../models/employee';
/* GET users listing. */
router.get('/', async function(req, res) {
    let result = await m.db.collection('employees').find().toArray()
    return res.json(result)
});

router.post('/', async function(req, res) {
    const {
        name,
        academic_degree,
        academic_title,
        position,
        lectures,
        classes,
        professional_interests,
        publications,
        other_informations
    } = req.body
    console.log(req.body)
    let newEmployee = new Employee(name,
        academic_degree,
        academic_title,
        position,
        lectures,
        classes,
        professional_interests,
        publications,
        other_informations)
    let result = await m.db.collection('employees').insertOne(newEmployee)
    return res.json(result)
});

router.put('/', async function(req, res) {
    const {
        _id,
        name,
        academic_degree,
        academic_title,
        position,
        lectures,
        classes,
        professional_interests,
        publications,
        other_informations
    } = req.body
    console.log(req.body)
    let newInformation = new Employee(name,
        academic_degree,
        academic_title,
        position,
        lectures,
        classes,
        professional_interests,
        publications,
        other_informations)
    let result = await m.db.collection('employees').updateOne({ _id: new ObjectId(_id) }, { $set: newInformation })
    return res.json(result)
});

router.delete('/', async function(req, res) {
    const _id = req.body._id

    let result = await m.db.collection('employees').deleteOne({ _id: new ObjectId(_id) })
    return res.json(result)
});

export default router