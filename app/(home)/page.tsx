import { getDictionary } from '@functions/dictionary'

import Description from "@features/about/Description"
import ClientList from "@features/client/ClientList"
import Hero from "@features/home/Hero"
import Motto from "@features/home/Motto"
import ClientCarousel from '@features/client/ClientCarousel'



const Home: React.FC<Page> = async ({ params }) => {

    const { lang } = await params
    const dict = await getDictionary(lang) // en


    return <div>
        <Hero dict={dict} />
        <Motto dict={dict} />
        <Description />
        <ClientCarousel />
        {/* <ClientList /> */}
    </div>
}

export default Home