const route = require('express').Router()
const klaim = require('../controllers/klaim')

route.post('/add', klaim.addCart)
route.delete('/del/:id', klaim.deleteCart)
route.get('/cart', klaim.getCartClaim)
route.patch('/submit', klaim.submitKlaim)
route.patch('/subfinklaim', klaim.submitKlaimFinal)
route.post('/updoc', klaim.uploadDocument)
route.patch('/doc', klaim.getDocument)
route.patch('/detail', klaim.getDetailKlaim)
route.get('/get', klaim.getKlaim)
route.patch('/ttd', klaim.getApproval)
route.patch('/app', klaim.approveKlaim)
route.get('/docdraft/:name', klaim.getDocDraft)
route.patch('/reject', klaim.rejectKlaim)
route.patch('/apprev', klaim.appRevisi)
route.patch('/update/:id', klaim.editKlaim)
route.patch('/subrev', klaim.submitRevisi)
route.patch('/verif', klaim.submitVerif)
route.patch('/editvrf/:id', klaim.updateDataVerif)

module.exports = route
