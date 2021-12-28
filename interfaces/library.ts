import { Tier } from '.'

export interface AudioCategory {
  id: string
  name: string
  tier: Tier
}

export interface AudioFile {
  id: string
  name: string
  fileName: string
  category: string
  dateAdded: Date
  tags?: string[]
  tier: Tier
}
