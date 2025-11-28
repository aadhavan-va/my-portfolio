import About from "./About"
import Experience from "./Experience"
import GithubStats from "./GithubStats"
import Skills from "./Skills"
import Social from "./Social"

const HomeLayout = () => {
    return (
        <section className="mt-28 flex flex-col gap-y-8 w-full">
            <About />
            <Social />
            <Skills />
            <Experience />
        </section >
    )
}

export default HomeLayout