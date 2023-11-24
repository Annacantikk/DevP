import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import profilePic from '../../public/images/home/annacantikk.png'
import Skills from "@/components/Skills";
import Experience from "@/components/Internship";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Internship from "@/components/Internship";
import EmploymentHistory from "@/components/EmploymentHistory";
import ExtracurricularActivities from "@/components/ExtracurricularActivities";
import CommiteeActivities from "@/components/CommiteeActivities";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title> Anna | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            
            <TransitionEffect/>

            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                <AnimatedText text="Innovate Your Design With Me!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                        <p className="font-medium">
                            Hello, my name is Anna, a web developer and graphic designer dedicated to creating not only beautiful but also
                            functional and user-focused design and front-end web development. I have an endless passion for exploring new
                            and innovative ways to bring my clients' visions to life.
                        </p> &nbsp;
                        <p className="font-medium">
                            Whatever your project may be, whether it's creating a stunning website or developing an effective front-end 
                            solution for a web application, I am ready to bring my skills and enthusiasm to create remarkable digital 
                            experiences with your team.    
                        </p> &nbsp;
                        <p className="font-medium">
                            So, if you're looking for someone who can deliver amazing design, focus on the user, and provide effective front-end
                            web solutions, let's join forces and innovate together on the journey to create unforgettable digital impressions.
                            Thank you for your attention, and I'm excited to collaborate with you soon!
                        </p>
                    </div>
                        
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                        <Image 
                            src={profilePic}
                            alt="Anna"
                            className="w-full h-auto rounded-2xl" 
                            priority
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                            />
                    </div>
                        
                    <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={3} />+
                            </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                        </div>
                        
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={5} />+
                            </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                        </div>
                        
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={1} />
                            </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                        </div>
                    </div>
                </div>
                
                    <Skills />
                    <Education />
                    <Internship />
                    <EmploymentHistory />
                    <ExtracurricularActivities />
                    <CommiteeActivities/>
                </Layout>
            </main>
        </>
    )
}

export default about