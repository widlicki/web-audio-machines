import 'reflect-metadata'
import { Connection, createConnection, getConnectionOptions } from 'typeorm'
import { AudioCategory } from '../entities/AudioCategory'

export const initializeDatabase = async (
  optionOverrides: Record<string, any> = {}
): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions()
  const options: any = {
    ...connectionOptions,
    entities: [AudioCategory],
    migrations: [`${__dirname}/api/database/migrations/*.ts`],
    ...optionOverrides,
  }

  const connection = await createConnection(options)

  return connection
}

export default initializeDatabase
