import WeekPicker from './WeekPicker.jsx'

export default function BookingsPage() {
  return (
    <main className="bookings-page">
      <p>Bookings!</p>
      <WeekPicker date={new Date()} />
    </main>
  )
}
