import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Container = (props) => {
  const router = useRouter();
  const urlContent = "spexbyte.digital.vercal.app";

  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta property="og:url" content={`${urlContent}${router.asPath}`} />
      </Head>
    </Fragment>
  );
};

export default Container;
