/* eslint-disable consistent-return */
import { TIERS } from '../../../entities/AudioCategory'
import { AudioCategoryFactory } from './audioCategoryFactory'

export const audioCategorySeeds = async (): Promise<any> => {
  const audioCategories = [
    {
      name: 'Kick',
      tier: TIERS.FREE,
    },
    {
      name: 'Bass',
      tier: TIERS.FREE,
    },
    {
      name: 'Hat',
      tier: TIERS.FREE,
    },
    {
      name: 'Snare',
      tier: TIERS.FREE,
    },
    {
      name: 'Synth',
      tier: TIERS.FREE,
    },
    {
      name: 'Drone',
      tier: TIERS.PREMIUM,
    },
    {
      name: 'Noise',
      tier: TIERS.PREMIUM,
    },
  ]

  try {
    console.log('Seeding audio category data...')
    const audioCategoryPromises = audioCategories.map((category) =>
      AudioCategoryFactory.create(category)
    )

    console.log(audioCategoryPromises)

    const userResults = await Promise.all(audioCategoryPromises)
    console.log('Done seeding audio categories.')

    return userResults
  } catch (e) {
    console.error('ERROR - AudioCategory: ', e)
  }
}
