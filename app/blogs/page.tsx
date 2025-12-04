import { BlogBubble } from "../src/Blogs/Common/BlogBubble"

const Blogs = () => {
    return <section className="h-screen mt-28 w-full">
        <h4 className="font-semibold text-xl mb-3">Technical Blogs</h4>


        <BlogBubble
            title="What I Learned Optimizing Our Next.js Bundle Size"
            date="4th Dec 2025"
            href="https://aadhavan-va.hashnode.dev/what-i-learned-optimizing-our-nextjs-bundle-size"
        // prefix={<BookOpen className="h-4 w-4" />} // or pass null to hide
        />
    </section >
}

export default Blogs