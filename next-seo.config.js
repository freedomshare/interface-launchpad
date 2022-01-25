/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Home",
  titleTemplate: "%s | Benchmark Protocol",
  defaultTitle: "Home",
  description: "Benchmark Protocol",
  canonical: "https://benchmarkprotocol.finance",
  openGraph: {
    url: "https://benchmarkprotocol.finance",
    title: "Benchmark Protocol",
    description: "",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "benchmarkprotocol.finance og-image",
      },
    ],
    site_name: "Benchmark Protocol",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
