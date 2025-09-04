"use client"

import Responsive from "@components/Responsive"

import { teams } from "@functions/teamList"
import Image from "next/image"

interface Props {
    className?: string
}

const TeamList: React.FC<Props> = ({ className }) => {

    return <Responsive className={className}>
        <div className="flex flex-col">
            <h1 className="text-amber-500 font-merriweather text-3xl text-center md:text-left md:text-5xl font-light">MEET OUR TEAM</h1>
            <p className="max-w-[800px] text-base md:text-lg mb-12 mt-3 text-center md:text-left md:mt-4">
                Di balik setiap kasus, ada tim pengacara yang bekerja sepenuh hati. Kami percaya bahwa setiap klien berhak mendapatkan pendampingan hukum yang adil, jelas, dan terpercaya.
            </p>
            <div className="flex flex-wrap gap-8 md:gap-12 justify-center">
                {teams.map(team => {
                    return <div key={team.name} className="flex flex-col">
                        <div className="h-100 lg:h-120 aspect-3/4 relative hover:scale-105 duration-500">
                            <Image src={`/images/team/${team.photo}`} alt="" fill className="object-cover rounded-lg drop-shadow-md" />
                        </div>
                        <label className="font-bold mt-4 ml-2">{team.name}</label>
                        <span className="ml-2">{team.role}</span>
                    </div>
                })}
            </div>
        </div>
    </Responsive>
}

export default TeamList