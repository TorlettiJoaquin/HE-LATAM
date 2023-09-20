import { useParams } from "react-router-dom"
import { Footer } from "../../constant/Footer"
import { Navbar } from "../../constant/Navbar"

export const Details = () => {
  const { heroId } = useParams()
  console.log(heroId)
  return (
    <>
    <Navbar />
      <section className='bg-primary'>
        <div className='container mx-auto'>
          <h2 className='py-6 text-center text-4xl'>Heroe xxxx</h2>

        </div>
      </section>
      <Footer />
    </>
  )
}
