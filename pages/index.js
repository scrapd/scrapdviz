import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>ScrAPDviz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Visualize Austin traffic fatalities from another angle" />
    </Head>
    <div className="navbar">
      <img className="logo" src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
      <h1>ScrAPDviz</h1>
    </div>
    <style jsx>
      {`
        h1 {
          color: #3d74fc;
          display: inline-block;
          margin-left: 10px;
        }

        .navbar > * {
          vertical-align: middle;
        }
      `}
    </style>
  </div>
);
