import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";
import Image from "next/image";
import dekanCup from "../../public/images/about/DekanCup.jpg";
import orakom from "../../public/images/about/Orakom.jpg";
import isl from "../../public/images/about/ISL.jpeg";
import pkmp from "../../public/images/about/pkmp.jpg";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return (
        <li ref={ ref } className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type:"spring"}}
            >
                <h3
                    className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp; <a
                    href={companyLink}
                    target="_blank"
                    className="text-primary  dark:text-primary capitalize"
                >@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const CommiteeActivities = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16
            ">
                Commitee Activities
            </h2>

            <div className="grid grid-cols-8 gap-4 items-center justify-center">
                <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image 
                        src={dekanCup}
                        alt="Anna"
                        className="w-full h-auto rounded-2xl" 
                        priority
                        sizes='(max-width: 500px) 100vw,
                        (max-width: 500px) 50vw,
                        33vw'
                        />
                </div>
                <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image 
                        src={orakom}
                        alt="Anna"
                        className="w-full h-auto rounded-2xl" 
                        priority
                        sizes='(width: 500px) 100vw,
                        (max-width: 500px) 50vw,
                        33vw'
                        />
                </div>
                <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image 
                        src={isl}
                        alt="Anna"
                        className="w-full h-auto rounded-2xl" 
                        priority
                        sizes='(width: 500px) 100vw,
                        (max-width: 500px) 50vw,
                        33vw'
                        />
                </div>
                <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image 
                        src={pkmp}
                        alt="Anna"
                        className="w-full h-auto rounded-2xl" 
                        priority
                        sizes='(width: 500px) 100vw,
                        (max-width: 500px) 50vw,
                        33vw'
                        />
                </div>
            </div>

            <div ref={ ref } className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mt-12">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "/>
                
                <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
                    <Details
                        position="Mobile Legend's Subdivison Head"
                        companyLink="http://www.instagram.com/dekancupft.unj"
                        company= "Dekan Cup Fakultas Teknik UNJ"
                        time="Oct - Nov 2022"
                        address=""
                        work="Promoted on personal Social Media (Instagram), so that is exceeds the target by 120% and created booklet, match rundowns, bracket, and budget estimates
                        "
                    />
                    <Details
                        position="Mobile Legend's Subdivison Head"
                        companyLink=""
                        company= "Informatics Super League PTIK & STI 2021"
                        time="Nov 2021 - Dec 2021"
                        address=""
                        work="Created a booklet, match rundowns, bracket, and budget estimates"
                    />
                    <Details
                        position="Public Relations"
                        companyLink="http://erafm-unj.com/"
                        company= "Orientasi Radio Komunitas ERA-FM UNJ 2021"
                        time="Oct 2021 - Nov 2021"
                        address=""
                        work="Create and distribute meeting invitation broadcasts & Captions, Follow up 
                        participants"
                    />
                    <Details
                        position="Dicipline and Assessment Team"
                        companyLink=""
                        company= "Pelatihan Kepemimpinan Mahasiswa Prodi Rumpun Teknik Elektro (PKMP RTE) 2021"
                        time="Nov 2021"
                        address=""
                        work="Created a rules, guidebooks, assigned grades, and participants Imposed sanctions"
                    />
                    <Details
                        position="Dicipline and Assessment Team"
                        companyLink=""
                        company= "Pengenalan Kehidupan Kampus Mahasiswa Baru (PKKMB PTIK) 2021"
                        time="Aug 2021"
                        address=""
                        work="Created a rules, guidebooks, assigned grades, and participants Imposed sanctions"
                    />
                    <Details
                        position="Treasurer & Deputy Secretary"
                        companyLink=""
                        company= "Musyawarah Besar ERA-FM UNJ 2021"
                        time="Dec 2020 - Jan 2021"
                        address=""
                        work="Made licensing letters, activity proposals, requests for funds, attendance of 
                        participants and committes, invitations to briefing & evaluation meetings, 
                        Record and share meeting results"
                    />
                </ul>
            </div>

        </div>
    )
}

export default CommiteeActivities