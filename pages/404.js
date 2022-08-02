import Link from "../src/components/Link";


export default function NotFoundPage() {
    return (
        <div>
            <Head>
                <title>Not Found - Alura Cases Campanha</title>
            </Head>
            <h1>Você se perdeu e caiu na página 404</h1>
            <Link href="/">
                Ir para Home
            </Link>
        </div>
    )
}