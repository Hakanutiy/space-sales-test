import { BurgerIcon } from "@/assets/icons";
import classNames from "classnames";

export const ToggleBurgerMenuButton = ({
                                           className,
                                       }: {
    className?: string;
}) => {
    return (
        <label
            htmlFor="menu-toggle"
            className={classNames("md:hidden block cursor-pointer", className)}
        >
            <BurgerIcon />
        </label>
    );
};

export const Layout = ({ children, headerContent, title, sidebarContent }) => {
    return (
        <div className="w-full flex gap-4 ">
            <input id="menu-toggle" type="checkbox" className="peer hidden" />
            <nav className="fixed inset-0 h-dvh bg-foreGround isolate z-50	 md:max-w-26 w-full md:sticky md:top-0 hidden md:block peer-checked:block px-5 py-6">
                <ToggleBurgerMenuButton className="mb-6" />
                {sidebarContent}
            </nav>
            <section className="bg-foreGround mx-auto md:my-12 py-4 max-w-6xl rounded-2xl w-full md:h-full md:h-fit">
                <header className="flex w-full px-4 md:px-7 ">
                    <div className="flex justify-between md:items-center gap-3 flex-col md:flex-row pb-5 border-b w-full">
                        <h1
                            className={
                                "max-w-max text-title flex items-center gap-4 font-medium md:text-2xl text-3xl"
                            }
                        >
                            <ToggleBurgerMenuButton /> {title}
                        </h1>
                        {headerContent}
                    </div>
                </header>
                <main className="px-7 flex flex-col gap-10 pt-5">{children}</main>
            </section>
        </div>
    );
};
