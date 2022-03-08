import Head from 'next/head'
import HeaderWrapper from "@presentational/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>자취일기</title>
                <meta name="description" content="community site"/>
                <meta name="keyword" content="community, web, contents, information"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            </Head>
            <HeaderWrapper />
        </>
    )
}
