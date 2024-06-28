// destination/moon.tsx
import BackgroundDestination from "../components/destination/BackgroundDestination"
import MainContentDestination from "../components/destination/MainContentDestination"

const links = [
  { link: "/destination", name: "moon" },
  { link: "/destination/mars", name: "mars" },
  { link: "/destination/europa", name: "europa" },
  { link: "/destination/titan", name: "titan" },
]

export default function Moon() {
  return (
    <>
      <BackgroundDestination />
      <MainContentDestination
        imageSrc="/assets/destination/image-moon.webp"
        imageAlt="moon"
        title="moon"
        description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        distance="384,400 km"
        travelTime="3 days"
        links={links}
      />
    </>
  )
}
