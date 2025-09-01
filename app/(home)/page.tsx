import Description from "@features/about/Description"
import ClientList from "@features/client/ClientList"
import Hero from "@features/home/Hero"
import Motto from "@features/home/Motto"



const Home = () => {
    return <div>
        <Hero />
        <Motto />
        <Description />
        <ClientList />
    </div>
}

export default Home