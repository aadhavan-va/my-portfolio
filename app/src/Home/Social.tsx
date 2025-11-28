import Link from "next/link"
import Image from "next/image"

const Social = () => {
    return (
        <div>
            <p className="text-xl font-semibold">socials</p>
            <div className="flex mt-3 gap-x-2">
                <Link href="https://x.com/Aadhavan_va" target="_blank" className="p-1 rounded-lg flex items-center w-fit hover:scale-110 transition-all bg-[#0a0a0a] duration-300 ">
                    <Image
                        src="/images/twitter.svg"
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="https://linkedin.com/in/aadhavan-va" target="_blank" className="p-1 rounded-lg flex items-center w-fit hover:scale-110 transition-all bg-[#0a0a0a] duration-300 ">
                    <Image
                        src="/images/linkedin.svg"
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="https://github.com/aadhavan-va" target="_blank" className="p-1 rounded-lg flex items-center w-fit hover:scale-110 transition-all bg-[#0a0a0a] duration-300 ">
                    <Image
                        src="/images/github.svg"
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href="mailto:aadhavan.va@gmail.com" target="_blank" className="p-1 rounded-lg flex items-center w-fit hover:scale-110 transition-all bg-[#0a0a0a] duration-300 ">
                    <Image
                        src="/images/email.svg"
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Social