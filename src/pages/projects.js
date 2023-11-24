import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import gale from "../../public/images/projects/projectGalenium.png";
import gale1 from "../../public/images/projects/projectGalenium (1).png";
import gale2 from "../../public/images/projects/projectGalenium (2).png";
import gale3 from "../../public/images/projects/projectGalenium (3).png";
import jm1 from "../../public/images/projects/jmFurnindo (1).png";
import jm2 from "../../public/images/projects/jmFurnindo (2).png";
import jm3 from "../../public/images/projects/jmFurnindo (3).png";
import vr1 from "../../public/images/projects/virtualRoom (1).jpg";
import vr2 from "../../public/images/projects/virtualRoom (2).jpg";
import vr3 from "../../public/images/projects/virtualRoom (3).jpg";
import prinsip1 from "../../public/images/projects/9prinsip (1).png";
import prinsip2 from "../../public/images/projects/9prinsip (2).png";
import prinsipCover from "../../public/images/projects/9prinsipCover.png";
import compro1 from "../../public/images/projects/compro (1).png";
import compro2 from "../../public/images/projects/compro (2).png";
import compro3 from "../../public/images/projects/compro (3).png";
import compro4 from "../../public/images/projects/compro (4).png";
import compro5 from "../../public/images/projects/compro (5).png";
import compro6 from "../../public/images/projects/compro (6).png";
import newsWebCover from "../../public/images/projects/newsWebCover.png";
import siakadCover from "../../public/images/projects/siakadCover.png";
import kantinCover from "../../public/images/projects/kantinCover.png";
import bigData1 from "../../public/images/projects/bigData (1).png";
import bigData2 from "../../public/images/projects/bigData (2).png";
import bigData3 from "../../public/images/projects/bigData (3).png";
import bigData4 from "../../public/images/projects/bigData (4).png";
import bigData5 from "../../public/images/projects/bigData (5).png";
import bigData6 from "../../public/images/projects/bigData (6).png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "/>

            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primary xs:text-base">{type}</span>
                <Link href = {link} target="_blank" className="hover:underline underline offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>

                <div className="mt-2 flex items-center" >
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon/>
                    </Link>

                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark 
                        sm:px-4 sm:text-base
                        ">
                        Visit Project
                    </Link>
                </div>

            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            "/>

            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                    transition={{duration: 0.2}}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primary lg:text-lg md:text-base">{type}</span>
                
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline offset-2"
                    download={true}
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title> Anna | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect/>

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="My Projects"
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Merancang Website Jaya Makmur Furnindo"
                                img={jm3}
                                summary="Website ini dirancang dengan responsif, sehingga para pengunjung dapat dengan mudah mengakses dan menjelajahi berbagai koleksi furnitur, baik di perangkat desktop maupun seluler."
                                link="https://jmfurnindo.com/"
                                github="/"
                                type="Website"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Merancang Website Galenium Pharmasia"
                                img={gale}
                                summary="Desain visual yang menarik dan menawan digunakan untuk memperkuat identitas merek Galenium Pharmasia dan memberikan kesan positif kepada pengunjung."
                                link="https://raflyawan.github.io/galenium-pharmasia/"
                                github="/"
                                type="Website"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Merancang Website Portal Berita"
                                img={newsWebCover}
                                summary=""
                                link=""
                                github="/"
                                type="Website"
                            />
                        </div>

                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Tampilan Profil Perusahaan berupa pdf"
                                img={compro1}
                                link="/Furnindo ke-2.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Tampilan Ruangan Virtual Interaktif"
                                img={vr1}
                                link="/Konsep Ruangan Virtual.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Mockup dan Prototype UI/UX Siakad Mobile"
                                img={siakadCover}
                                link="/Aplikasi SIAKAD Mobile Mockup dan Prototyping.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Desain Aplikasi Kantin Digital "
                                img={kantinCover}
                                link="/Project Aplikasi Kantin Online UNJ.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Desain pembelajaran mengenai Big Data"
                                img={bigData1}
                                link="/Big data tools 120323.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-12">
                            <Project
                                title="Membuat Desain pembelajaran Prinsip Gagne"
                                img={prinsipCover}
                                link="/9 Prinsip Gagne.pdf"
                                github="/"
                                type="Desain"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}

export default projects;
