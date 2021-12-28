import { AudioCategory, AudioFile } from '../interfaces/library'

export const mockAudioCategories: AudioCategory[] = [
  {
    id: 'a0649ac4-9618-4dc0-993d-1dc4dcce1539',
    name: 'Kick',
    tier: 'FREE',
  },
  {
    id: 'feb9d1ce-5098-4a30-97bd-c248341615f4',
    name: 'Bass',
    tier: 'FREE',
  },
  {
    id: '998b77a6-25de-48c4-83ff-04e51cafeaaf',
    name: 'Synth',
    tier: 'PREMIUM',
  },
]

export const mockAudioFiles: AudioFile[] = [
  {
    id: '8f25cb68-7dd8-4335-9778-7950ea08a735',
    name: 'Kick-1',
    fileName: 'kick1.wav',
    category: 'Kick',
    dateAdded: new Date(2021, 12, 28),
    tags: ['kick', '808'],
    tier: 'FREE',
  },
  {
    id: 'c630edbe-59eb-4f90-ad08-b2448d3fa051',
    name: 'Kick-2',
    fileName: 'kick2.wav',
    category: 'Kick',
    dateAdded: new Date(2021, 12, 28),
    tags: ['kick', '909', 'house'],
    tier: 'FREE',
  },
  {
    id: '8a23c994-3c07-4276-ae48-531903d03005',
    name: 'Bass-1',
    fileName: 'bass1.wav',
    category: 'Bass',
    dateAdded: new Date(2021, 12, 28),
    tags: ['bass', 'minimal', 'techno'],
    tier: 'FREE',
  },
  {
    id: '7b506039-88c3-4f6a-8c64-75f89b9788f0',
    name: 'Synth-1',
    fileName: 'synth1.wav',
    category: 'Synth',
    dateAdded: new Date(2021, 12, 28),
    tags: ['synth', 'drone', 'cinematic'],
    tier: 'FREE',
  },
]
