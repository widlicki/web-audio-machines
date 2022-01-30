import { getRepository } from 'typeorm'
import { AudioCategory } from '../../../entities/AudioCategory'

export const AudioCategoryFactory = {
  build: (attrs: Partial<AudioCategory> = {}) => {
    const audioCategoryAttrs: Partial<AudioCategory> = {
      ...attrs,
    }

    return getRepository(AudioCategory).create(audioCategoryAttrs)
  },

  create: async (attrs: Partial<AudioCategory> = {}) => {
    const audioCategory = AudioCategoryFactory.build(attrs)
    const createdUser = await getRepository(AudioCategory).save(audioCategory)

    return createdUser
  },

  deleteAll: async () =>
    await getRepository(AudioCategory).query(
      'TRUNCATE "audioCategory" CASCADE'
    ),
}
