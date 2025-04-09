import heroImage from "../assets/hero.avif";
import mobileFriendlyImage from "../assets/mobile-friendly.png";
import NavBar from "../components/NavBar";

const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
];
const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
];

export default function Home() {
    return (
        <div>
            <NavBar />
            <main className="main-content">
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <img
                        alt=""
                        src={heroImage}
                        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                    />
                    <div
                        aria-hidden="true"
                        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    >
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                Work with us
                            </h2>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                {links.map((link) => (
                                    <a key={link.name} href={link.href}>
                                        {link.name}{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                ))}
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.name}
                                        className="flex flex-col-reverse gap-1"
                                    >
                                        <dt className="text-base/7 text-gray-300">
                                            {stat.name}
                                        </dt>
                                        <dd className="text-4xl font-semibold tracking-tight text-white">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                            <div className="relative lg:row-span-2">
                                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            Mobile friendly
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                            Anim aute id magna aliqua ad ad non
                                            deserunt sunt. Qui irure qui lorem
                                            cupidatat commodo.
                                        </p>
                                    </div>
                                    <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                        <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                            <img
                                                className="size-full object-cover object-top"
                                                src={mobileFriendlyImage}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                            </div>
                            <div className="relative max-lg:row-start-1">
                                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            Performance
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit maiores
                                            impedit.
                                        </p>
                                    </div>
                                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                        <img
                                            className="w-full max-lg:max-w-xs"
                                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                            </div>
                            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                <div className="absolute inset-px rounded-lg bg-white"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            Security
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                            Morbi viverra dui mi arcu sed.
                                            Tellus semper adipiscing suspendisse
                                            semper morbi.
                                        </p>
                                    </div>
                                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                        <img
                                            className="h-[min(152px,40cqw)] object-cover"
                                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                            </div>
                            <div className="relative lg:row-span-2">
                                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                            Powerful APIs
                                        </p>
                                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                            Sit quis amet rutrum tellus
                                            ullamcorper ultricies libero dolor
                                            eget sem sodales gravida.
                                        </p>
                                    </div>
                                    <div className="relative min-h-[30rem] w-full grow">
                                        <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                        NotificationSetting.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">
                                                        App.jsx
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-6 pt-6 pb-14">
                                                {/* Your code example */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
