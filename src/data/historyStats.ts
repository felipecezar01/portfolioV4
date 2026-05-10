import { historyByYear } from './historiaTecnologia'

export type NationalityStat = {
  flag: string
  pt: string
  en: string
  count: number
}

export type HistoryStats = {
  totalPeople: number
  totalGroups: number
  nationalities: NationalityStat[]
}

const FLAG_LABEL: Record<string, { pt: string; en: string }> = {
  '🇺🇸': { pt: 'Americano',     en: 'American' },
  '🇬🇧': { pt: 'Britânico',     en: 'British' },
  '🇩🇪': { pt: 'Alemão',        en: 'German' },
  '🇫🇷': { pt: 'Francês',       en: 'French' },
  '🇮🇹': { pt: 'Italiano',      en: 'Italian' },
  '🇯🇵': { pt: 'Japonês',       en: 'Japanese' },
  '🇷🇺': { pt: 'Russo',         en: 'Russian' },
  '🇨🇳': { pt: 'Chinês',        en: 'Chinese' },
  '🇮🇱': { pt: 'Israelense',    en: 'Israeli' },
  '🇨🇦': { pt: 'Canadense',     en: 'Canadian' },
  '🇦🇹': { pt: 'Austríaco',     en: 'Austrian' },
  '🇦🇺': { pt: 'Australiano',   en: 'Australian' },
  '🇧🇪': { pt: 'Belga',         en: 'Belgian' },
  '🇧🇷': { pt: 'Brasileiro',    en: 'Brazilian' },
  '🇨🇭': { pt: 'Suíço',         en: 'Swiss' },
  '🇨🇿': { pt: 'Tcheco',        en: 'Czech' },
  '🇩🇰': { pt: 'Dinamarquês',   en: 'Danish' },
  '🇫🇮': { pt: 'Finlandês',     en: 'Finnish' },
  '🇭🇺': { pt: 'Húngaro',       en: 'Hungarian' },
  '🇮🇪': { pt: 'Irlandês',      en: 'Irish' },
  '🇰🇵': { pt: 'Norte-Coreano', en: 'North Korean' },
  '🇳🇱': { pt: 'Holandês',      en: 'Dutch' },
  '🇳🇴': { pt: 'Norueguês',     en: 'Norwegian' },
  '🇵🇭': { pt: 'Filipino',      en: 'Filipino' },
  '🇵🇰': { pt: 'Paquistanês',   en: 'Pakistani' },
  '🇵🇱': { pt: 'Polonês',       en: 'Polish' },
  '🇷🇸': { pt: 'Sérvio',        en: 'Serbian' },
  '🇸🇪': { pt: 'Sueco',         en: 'Swedish' },
  '🇸🇬': { pt: 'Cingapurense',  en: 'Singaporean' },
  '🇺🇦': { pt: 'Ucraniano',     en: 'Ukrainian' },
  '🇿🇦': { pt: 'Sul-Africano',  en: 'South African' },
  '🇮🇳': { pt: 'Indiano',       en: 'Indian' },
  '🇪🇸': { pt: 'Espanhol',      en: 'Spanish' },
  '🇰🇷': { pt: 'Sul-Coreano',   en: 'South Korean' },
  '🇹🇼': { pt: 'Taiwanês',      en: 'Taiwanese' },
  '🇹🇷': { pt: 'Turco',         en: 'Turkish' },
  '🇦🇱': { pt: 'Albanês',       en: 'Albanian' },
  '🇪🇬': { pt: 'Egípcio',       en: 'Egyptian' },
}

const FLAG_REGEX = /\p{Regional_Indicator}\p{Regional_Indicator}/u

function pickFirstFlag(flagField: string): string | null {
  const match = flagField.match(FLAG_REGEX)
  return match ? match[0] : null
}

const GROUP_KEYWORD = /\b(equipes?|consórcio|consorcio|comunidade|Open\s+Handset\s+Alliance)\b/i

function analyzeEntryName(name: string): { individuals: number; groups: number } {
  // Detect at most one group reference per entry (Anthropic, OpenAI, IBM, etc.)
  const groups = GROUP_KEYWORD.test(name) ? 1 : 0

  let remaining = name

  // Strip trailing "e a equipe ..." / "e o consórcio ..." up to end-of-string
  remaining = remaining.replace(
    /\s*,?\s+e\s+(?:a|o|os|as)?\s*(?:equipes?|consórcio|comunidade)\b[^,]*$/i,
    '',
  )

  // Strip parentheticals (preserve individuals named after "liderada por ..." inside parens)
  remaining = remaining.replace(/\(([^)]*)\)/g, (_, inner) => {
    const m = String(inner).match(/lidera(?:da|do|dos|das)\s+por\s+(.+)/i)
    if (m) return ' ' + m[1]
    return ' '
  })

  remaining = remaining.replace(/\s+/g, ' ').trim()

  if (!remaining) return { individuals: 0, groups }

  // Pure-group entry: starts with org marker — try to extract "liderada por X e Y"
  if (/^(Equipes?|Consórcio|Comunidade)\b/i.test(remaining)) {
    const led = remaining.match(/lidera(?:da|do|dos|das)\s+por\s+(.+)$/i)
    if (led) {
      const tokens = led[1]
        .split(/\s*(?:,|&|\se\s)\s*/i)
        .map(t => t.trim())
        .filter(Boolean)
        .filter(t => !GROUP_KEYWORD.test(t))
        .filter(t => !/^[A-Z&]{2,5}$/.test(t))
      return { individuals: tokens.length, groups: Math.max(1, groups) }
    }
    return { individuals: 0, groups: Math.max(1, groups) }
  }

  // Split into person tokens
  const tokens = remaining
    .split(/\s*(?:,|&|\se\s)\s*/i)
    .map(t => t.trim())
    .filter(Boolean)
    .filter(t => !GROUP_KEYWORD.test(t))
    // Filter out pure org acronyms (single ALL-CAPS word, ≤ 5 chars: IBM, BBC, ATT, etc.)
    .filter(t => !/^[A-Z&]{2,5}$/.test(t))

  return { individuals: tokens.length, groups }
}

function computeStats(): HistoryStats {
  let totalPeople = 0
  let totalGroups = 0
  const natCount = new Map<string, number>()

  for (const year of historyByYear.values()) {
    for (const entry of year.people) {
      const { individuals, groups } = analyzeEntryName(entry.name)
      totalPeople += individuals
      totalGroups += groups

      if (individuals > 0) {
        const flag = pickFirstFlag(entry.flag)
        if (flag && FLAG_LABEL[flag]) {
          natCount.set(flag, (natCount.get(flag) ?? 0) + individuals)
        }
      }
    }
  }

  const nationalities: NationalityStat[] = [...natCount.entries()]
    .map(([flag, count]) => ({
      flag,
      pt: FLAG_LABEL[flag].pt,
      en: FLAG_LABEL[flag].en,
      count,
    }))
    .sort((a, b) => b.count - a.count || a.pt.localeCompare(b.pt))

  return { totalPeople, totalGroups, nationalities }
}

export const HISTORY_STATS: HistoryStats = computeStats()
