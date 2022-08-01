import Link from "../src/components/Link";
import Title from "../src/components/Title";

export default function HomePage(){
    return (
        <div>
            <Title as="h1">TEste</Title>
            <h1>Alura cases - Home Page</h1>
            <Link href="/faq">
                Ir para FAQ
            </Link>
        </div>
    )
}