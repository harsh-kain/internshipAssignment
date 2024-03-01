import Tools from '../components/Tools'
import {Container, Navbar, Heading, StatusBar, DetailsSection,Card, Footer} from './index'
const Home = () => {

  return (
    <div className='flex justify-center items-center flex-col bg-[#FBFCFD]'>
        <Navbar />
        <Container>
            <Heading heading="Best website builder in the US" className="text-xl font-medium md:text-4xl lg:text-4xl mt-5"/>
            <StatusBar />
            <Tools />
            <DetailsSection />
            <Heading heading="Related deals you might like for" className='mt-14'/>
            <Card />
        </Container>
        <Footer />
    </div>
  )
}

export default Home