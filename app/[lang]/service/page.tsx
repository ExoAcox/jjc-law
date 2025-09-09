import useDictionary from "@functions/dictionary";

import CompanySkill from "@features/service/CompanySkill"
import ContactUs from "@features/contact/ContactUs";
import Wrapper from "@components/Wrapper";
import NonCompanySkill from "@features/service/NonCompanySkill";
import ServiceList from "@features/service/ServiceList";

const Home: React.FC<Page> = async ({ params }) => {
    const { lang } = await params;
    const dict = await useDictionary(lang);

    return (
        <Wrapper lang={lang}>
            <CompanySkill dict={dict} />
            <NonCompanySkill dict={dict} />
            <ServiceList dict={dict} />
            <ContactUs />
        </Wrapper>
    );
};

export default Home;
