import { type AppProps } from 'next/app';

import Layout from '@/components/layout';
import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    // const [queryClient] = React.useState(
    //     () =>
    //         new QueryClient({
    //             defaultOptions: {
    //                 queries: {
    //                     // With SSR, we usually want to set some default staleTime
    //                     // above 0 to avoid refetching immediately on the client
    //                     staleTime: 60 * 1000,
    //                 },
    //             },
    //         })
    // );

    return (
        // <QueryClientProvider client={queryClient}>
        //     <HydrationBoundary state={pageProps.dehydratedState}>
        //         <Layout>
        //             <Component {...pageProps} />
        //         </Layout>
        //     </HydrationBoundary>
        //     <ReactQueryDevtools />
        // </QueryClientProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
