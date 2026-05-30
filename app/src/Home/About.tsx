import { motion } from "motion/react"

const About = () => {
    return (
        <>
            <article className="flex flex-col">
                <h4 className="font-semibold text-xl">About</h4>
                <div className="text-lg flex flex-col gap-y-1 lg:gap-y-2 mt-3">
                    <p>I am a fullstack engineer with over 5 years of experience with skills in TypeScript and Golang.</p>
                    <p>I care deeply about performance, aesthetics, and building experiences that feel as good as they look.</p>
                </div>
            </article>
        </>
    )
}

export default About