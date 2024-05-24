import {getDatabase, ref, set} from 'firebase/database'
import {app} from './config.ts'

const DB_LINK = import.meta.env.VITE_DB_LINK
export const db = getDatabase(app, DB_LINK)

export const writeUserData = (userId: string, data: object): Promise<void> => {
  return set(ref(db, 'users/' + userId), data)
}
