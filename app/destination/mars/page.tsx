// destination/moon.tsx
import BackgroundDestination from "../../components/destination/BackgroundDestination"
import MainContentDestination from "../../components/destination/MainContentDestination"

const links = [
  { link: "/destination", name: "moon" },
  { link: "/destination/mars", name: "mars" },
  { link: "/destination/europa", name: "europa" },
  { link: "/destination/titan", name: "titan" },
]

export default function Mars() {
  return (
    <>
      <BackgroundDestination />
      <MainContentDestination
        imageSrc="/assets/destination/image-mars.webp"
        imageAlt="mars"
        title="mars"
        description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        distance="225 mil. km"
        travelTime="9 months"
        links={links}
      />
    </>
  )
}
