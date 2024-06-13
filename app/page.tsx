import Background from "./components/Background"
import MainContentHomepage from "./components/MainContentHomepage"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main>
      <Background />
      <Navigation />
      <MainContentHomepage />
    </main>
  )
}
