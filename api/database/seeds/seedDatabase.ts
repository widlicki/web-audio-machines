import initializeDatabase from '../database'
import { audioCategorySeeds } from './AudioCategory/audioCategorySeeds'

const seedDatabase = async (): Promise<any> => {
  await audioCategorySeeds()
}

const run = async (): Promise<any> => {
  console.log('Connecting to DB')
  const connection = await initializeDatabase({ migrationsRun: false })

  console.log('Seeding DB')
  await seedDatabase()

  console.log('Disconnecting from DB')
  return await connection.close()
}

run()
