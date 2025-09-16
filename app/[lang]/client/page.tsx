import useDictionary from "@functions/dictionary";

import ContactUs from "@features/contact/ContactUs";
import Wrapper from "@components/Wrapper";
import ClientList from "@features/client/ClientList";

const Home: React.FC<Page> = async ({ params }) => {
    const { lang } = await params;
    const dict = await useDictionary(lang);

    return (
        <Wrapper lang={lang} dict={dict}>
            <ClientList dict={dict} />
            <ContactUs dict={dict} />
        </Wrapper>
    );
};

export default Home;
