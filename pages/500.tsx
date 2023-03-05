import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PhotoNavBar from '@/components/global/navbar';
import PhotoFooter from '@/components/global/footer';

import siteConfig from '@/config/site.config';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

const Error500 = () => {
    return (
        <div>
            <Head>
                <title>500 - {siteConfig.global.site.name}</title>
            </Head>

            <div id='notion-photo-500' className='flex min-h-screen select-none flex-col font-Golos dark:bg-[#252525]'>
                <PhotoNavBar />

                <div id='notion-photo-500-content' className='mx-auto flex flex-grow leading-10 dark:text-neutral-300'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-semibold'>500</h1>
                        <p>Internal Server Error.</p>
                    </div>
                </div>

                <PhotoFooter />
            </div>
        </div>
    );
};

export default Error500;
