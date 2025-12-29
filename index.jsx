import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
      <>
            <Head>
                    <script
                              async
                                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1759087925328741"
                                                  crossOrigin="anonymous"
                                                          ></script>
                                                                </Head>
                                                                      <Component {...pageProps} />
                                                                          </>
                                                                            );
                                                                            }

                                                                            export default MyApp;