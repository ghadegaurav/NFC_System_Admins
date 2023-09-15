import express from 'express'
const router = express.Router();
import UserControls from '../controlers/userControlls.js'

router.get('/scheme', UserControls.Data)
router.post('/register', UserControls.register)
router.get('/login', UserControls.login)

export default router