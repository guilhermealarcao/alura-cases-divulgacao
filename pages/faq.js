import Head from "next/head";
import Link from "../src/components/Link";


export default function HomePage() {
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura cases - FAQ Page</h1>
            <Link href="/">
                Ir para Home
            </Link>
        </div>
    )
}