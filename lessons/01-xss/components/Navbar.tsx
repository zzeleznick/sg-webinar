import Link from "next/link";

// Returns a branded navbar
export default function Navbar() {
    const sections = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/#blog" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];
    return (
        <nav className="bg-white w-full border-b md:border-0 fixed min-h-[80px]">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h1 className="text-4xl font-bold text-purple-600">Just a Brand</h1>
              </Link>
              <div className="md:hidden">
                <button
                  className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                >
                </button>
              </div>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:pb-0 md:mt-0`}
            >
              <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {sections.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-indigo-600">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className={`flex-1 justify-self-end hidden md:block`} /> */}
          </div>
        </nav>
      )
}