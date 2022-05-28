import Head from "next/head";
import {Navbar} from "../Ui"



type DashboardLayoutProps = {
  children: React.ReactNode;
  title? : string;
}



export const Layout = ({children, title}:DashboardLayoutProps) => {
    return (
        <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="autor" content="mohammad wildan"/>
            <meta name="descriptiost" content="mantap co akuu bikin web"/>
            <meta name="keywords" content="XXX. pokekmon, pokedex"/>
        </Head>
            <Navbar />
        <main>
            {children}
        </main>
        </>
    );
}
