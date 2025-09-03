import Responsive from "@components/Responsive"

import { teams } from "@functions/teamList"
import Image from "next/image"

interface Props {

}

const TeamList: React.FC<Props> = ({ }) => {
    return <Responsive>
        <div className="flex flex-col">
            <h1 className="text-amber-500 font-merriweather text-5xl font-light">MEET OUR TEAM</h1>
            <p className="max-w-[800px] text-lg mb-12 mt-4">
                Di balik setiap kasus, ada tim pengacara yang bekerja sepenuh hati. Kami percaya bahwa setiap klien berhak mendapatkan pendampingan hukum yang adil, jelas, dan terpercaya.
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
                {teams.map(team => {
                    return <div key={team.name} className="flex flex-col">
                        <div className="h-120 w-90 relative">
                            <Image src={`/images/team/${team.photo}`} alt="" fill className="object-contain rounded-lg drop-shadow-md" />
                        </div>
                        <label className="font-bold mt-3 ml-2">{team.name}</label>
                        <span className="ml-2">{team.role}</span>
                    </div>
                })}
            </div>
        </div>
    </Responsive>
}

export default TeamList