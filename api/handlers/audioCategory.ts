import { NextApiResponse } from 'next'
import { getRepository } from 'typeorm'
// mport { AudioCategory as AudioCategoryDto } from '../../interfaces/library'
import initializeDatabase from '../database/database'
import { AudioCategory } from '../entities/AudioCategory'

export const handleGetAll = async (res: NextApiResponse<any>) => {
  const connection = await initializeDatabase()
  const repository = await getRepository(AudioCategory)
  const audioCategories = await repository.find()
  await connection.close()

  res.status(200).json(audioCategories)
}
