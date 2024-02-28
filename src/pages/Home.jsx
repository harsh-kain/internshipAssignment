import {Container, Navbar, Heading, StatusBar, DetailsSection} from './index'
const Home = () => {

  return (
    <div className='flex justify-center items-center flex-col'>
        <Navbar />
        <Container>
            <Heading heading="Best website builder in the US" className="bg-slate-400"/>
            <StatusBar />
            <DetailsSection />
            <h1>kain</h1>
        </Container>
    </div>
  )
}

export default Home