import {Container, Navbar, Heading, StatusBar, DetailsSection,Card, Footer} from './index'
const Home = () => {

  return (
    <div className='flex justify-center items-center flex-col'>
        <Navbar />
        <Container>
            <Heading heading="Best website builder in the US" className="bg-slate-400"/>
            <StatusBar />
            <DetailsSection />
            <Card />
            <h1>kain</h1>
        </Container>
        <Footer />
    </div>
  )
}

export default Home