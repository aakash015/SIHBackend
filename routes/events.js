const express = require('express');
const { eventByAicte, eventByFaculty, eventConfirmedByInstitute,getEventById, eventConfirmedByAicte, storeId, getConfirmedEvents, getEventById2, getPendingEvents, getAllConfirmedEvents, getConfirmedEventById, storeEvent } = require('../controllers/events');
const router = express.Router();

router.param('eventId',getEventById);
router.param('eventId2',getEventById2);
router.param('userId',storeId);
router.param('id',storeEvent);
router.post('/byAicte',eventByAicte)
router.post('/byFaculty',eventByFaculty)
router.post('/confirmedByInstitute/:eventId',eventConfirmedByInstitute)
router.post('/confirmedByAicte/:eventId2',eventConfirmedByAicte)
router.get('/getAllConfirmedEvents/:userId',getConfirmedEvents)
router.get('/getAllPendingEvents/:userId',getPendingEvents)
router.get('/getAllConfirmedEvents',getAllConfirmedEvents)
router.get('/getConfirmedEventById/:id',getConfirmedEventById)
module.exports = router;