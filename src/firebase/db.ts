import {getDatabase} from 'firebase/database'
import {app} from './config.ts'

const DB_LINK = import.meta.env.VITE_DB_LINK
export const db = getDatabase(app, DB_LINK)
