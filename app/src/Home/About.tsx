import { motion } from "motion/react"

const About = () => {
    return (
        <>
            <article className="flex flex-col">
                <h4 className="font-semibold text-xl">about</h4>
                <div className="text-lg flex flex-col gap-y-1 lg:gap-y-2 mt-3">
                    <p>I’m a Frontend Developer with 4.5+ years of experience crafting fast, accessible, and user-focused interfaces.</p>
                    <p>I care deeply about performance, aesthetics, and building experiences that feel as good as they look.</p>
                </div>
            </article>
        </>
    )
}

export default About