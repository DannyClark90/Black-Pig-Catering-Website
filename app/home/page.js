import Header from "@/Components/Home_Header"
import Section from "@/Components/Section"

export default function page() {
  return (
    <main>
        <Header/>
        <Section index={1} 
        title={`${"Welcome to The Farmhouse Cafe... Where culinary excellence meets rustic charm."}`} 
        body={`${"Nestled in countryside on the outskirts of the historical market town of Maldon in Essex; our cafe is dedicated to delivering Michelin-style dishes crafted with the finest ingredients. Whether you're joining us for a leisurely breakfast, a hearty lunch, or a decadent dinner, we promise a dining experience that delights the senses and nourishes the soul."}`}/>
    </main>
  )
}

