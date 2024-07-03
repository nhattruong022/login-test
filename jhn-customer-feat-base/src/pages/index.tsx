import Head from 'next/head';

// type Repo = {
//     stargazers_count: number;
// };

// export const getServerSideProps = async () => {
//     const queryClient = new QueryClient();
//     await queryClient.fetchQuery({
//         queryKey: ['home'],
//         queryFn: () => [],
//     });
//     //console.log(await response.json());
//     // const res = await fetch('https://api.github.com/repos/vercel/next.js');
//     //const repo: Repo = await response.json();
//     //const repo: Repo = { stargazers_count: 100 };
//     return {
//         props: {
//             //repo,
//             dehydratedState: dehydrate(queryClient),
//         },
//     };
// };

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>My page title</title>
            </Head>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}