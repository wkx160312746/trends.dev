// shared data across instances so we load only once

import { ref } from 'vue'
import A from '../../../public/data.json'

declare global {
  const fathom: {
    trackGoal: (id: string, value: number) => any
  }
}

export interface Sponsor {
  url: string
  img: string
  name: string
  description?: string
  height?: string
}

export interface SponsorData {
  special: Sponsor[]
  platinum: Sponsor[]
  platinum_china: Sponsor[]
  gold: Sponsor[]
  silver: Sponsor[]
  bronze: Sponsor[]
}

export const data = ref<SponsorData>()
export const pending = ref<boolean>(false)

export const base = `https://sponsors.vuejs.org`

export const load = async () => {
  if (!pending.value) {
    pending.value = true
    data.value = A as any
  }
}
