import useFetch from 'use-http'

// url will return a json with the streak data and the picture
const url =
  'https://www.duolingo.com/2017-06-30/users/1416256037?fields=streakData%7BcurrentStreak,previousStreak%7D,picture'

type Streak = {
  endDate: string
  length: number
  lastExtendedDate: string
  startDate: string
}

type DuolingoData = {
  streakData: {
    currentStreak: Streak
    previousStreak: Streak
  }
  picture: string
}
export const useDuolingo = () => {
  const { loading, error, data } = useFetch<DuolingoData>(url, {}, [])

  return { loading, error, data }
}
