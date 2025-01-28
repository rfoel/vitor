import { useEffect, useState } from 'react'

import { useDuolingo } from './useDuolingo'
import { cn } from './cn'

function App() {
  const [isStreakSafe, setIsStreakSafe] = useState(true)
  const { data, loading } = useDuolingo()

  const streak = data?.streakData.currentStreak

  const startDate = '2025-01-26'

  useEffect(() => {
    if (data) {
      setIsStreakSafe(streak?.startDate === startDate)
    }
  }, [data, streak?.startDate])

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center bg-blue-200">
        Loading...
      </div>
    )
  }

  if (!data) {
    return null
  }

  return (
    <div
      className={cn(
        'w-screen h-screen flex flex-col gap-4 items-center justify-center',
        { 'bg-red-200': !isStreakSafe },
        { 'bg-green-200': isStreakSafe },
      )}
    >
      <img
        src={`https:${data.picture}/xlarge`}
        className="w-[200px] h-[200px]"
      />
      <h1 className="text-4xl">Vitor's Duolingo Streak</h1>
      <p>{data.streakData.currentStreak.length} days</p>
      {isStreakSafe ? (
        <p>Streak is safe!</p>
      ) : (
        <p>Vitor didn't keep his promise</p>
      )}
    </div>
  )
}

export default App
