import { Tier } from '.'

export interface User {
  id: string
  email: string
  createdDate: Date
  tier: Tier
}
