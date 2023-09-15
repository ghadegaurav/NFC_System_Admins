import express from 'express'
const router = express.Router();
import UserControls from '../controlers/userControlls.js'

router.get('/scheme', UserControls.Data)

export default router