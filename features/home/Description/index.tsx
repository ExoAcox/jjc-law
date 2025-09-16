import Responsive from "@components/Responsive";
import { Dictionary } from "@functions/dictionary";

interface Props {
  dict: Dictionary
}

const Description: React.FC<Props> = ({ dict }) => {
  return (
    <Responsive>
      <div className="flex flex-col-reverse lg:flex-row gap-0 lg:gap-16">
        <div className="flex-1 flex flex-col gap-3 pt-8">
          <h2 className="mb-2 lg:mb-4 text-amber-500" dangerouslySetInnerHTML={{ __html: dict.home.description.title }}>
          </h2>
          <p className="leading-7.5" dangerouslySetInnerHTML={{ __html: dict.home.description.desc }}>
          </p>
        </div>
        <div className="bg-amber-100 lg:flex-1 h-[360px] lg:h-[500px]"></div>
      </div>
    </Responsive>
  );
};

export default Description;
