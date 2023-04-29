import { useRouter } from "next/router";

import Head from "next/head";

export default function Car({ car }: { car: any }) {
    const router = useRouter();
    const { id } = router.query;

    const titleContent = `${car.color} ${car.id}`;
    return (
        <>
            <Head>
                <title>{titleContent}</title>
            </Head>

            <h1>Hello {id}</h1>
            <img src={car.image} width="300px" />
        </>
    );
}

export async function getServerSideProps({ params }: { params: any }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    };
}
