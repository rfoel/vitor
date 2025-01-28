import { picture, streakData } from './assets/streak.json'
import { cn } from './cn'

function App() {
  const startDate = '2025-01-26'
  const isStreakSafe = streakData.currentStreak.startDate === startDate

  return (
    <div
      className={cn(
        'w-screen h-screen flex flex-col gap-4 items-center justify-center',
        { 'bg-red-200': !isStreakSafe },
        { 'bg-green-200': isStreakSafe },
      )}
    >
      <img src={`https:${picture}/xlarge`} className="w-[200px] h-[200px]" />
      <h1 className="text-4xl">Vitor's Duolingo Streak</h1>
      <p>{streakData.currentStreak.length} days</p>
      {isStreakSafe ? (
        <p>Streak is safe!</p>
      ) : (
        <p>Vitor didn't keep his promise</p>
      )}
    </div>
  )
}

export default App
