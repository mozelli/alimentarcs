import Bonus from "./components/bonus/page";
import Hero from "./components/hero/page";
import Info from "./components/info/page";
import Rating from "./components/rating/page";
import './globals.css';

export default function Home() {

  return (
    <main>
      <Hero />
      <Info />
      <Bonus />
      <Rating />
    </main>
  )
}
