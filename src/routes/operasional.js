const route = require('express').Router()
const ops = require('../controllers/operasional')

route.post('/add/:id', ops.addCart)
route.delete('/del/:id', ops.deleteCart)
route.get('/cart', ops.getCartOps)
route.patch('/submit', ops.submitOps)
route.patch('/subfinops', ops.submitOpsFinal)
route.post('/updoc', ops.uploadDocument)
route.patch('/doc', ops.getDocument)
route.patch('/detail', ops.getDetailOps)
route.patch('/detailid/:id', ops.getDetailId)
route.get('/get', ops.getOps)
route.patch('/ttd', ops.getApproval)
route.get('/docdraft/:name', ops.getDocDraft)
route.patch('/app', ops.approveOps)
route.patch('/reject', ops.rejectOps)
route.patch('/apprev', ops.appRevisi)
route.patch('/update/:id/:idtrans', ops.editOps)
route.patch('/subrev', ops.submitRevisi)
route.patch('/verif', ops.submitVerif)
route.patch('/realisasi', ops.submitRealisasi)
route.patch('/editvrf/:id', ops.updateDataVerif)
route.patch('/confident/:id', ops.confirmNewIdent)
route.patch('/subbayar', ops.submitAjuanBayar)
route.patch('/ttdlist', ops.getApprovalList)
route.patch('/applist', ops.approveListOps)
route.patch('/rejectlist', ops.rejectListOps)
route.post('/uplist', ops.uploadBukti)
route.patch('/sublistbayar', ops.submitBuktiBayar)
route.patch('/getdocbayar', ops.getDocBayar)
route.get('/report', ops.getReport)

module.exports = route
