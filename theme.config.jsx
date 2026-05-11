/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
      ⚡ OptimaAi Docs
    </span>
  ),
  project: {
    link: 'https://github.com/your-org/optimaai',
  },
  docsRepositoryBase: 'https://github.com/your-org/optimaai-docs',
  useNextSeoProps() {
    return { titleTemplate: '%s – OptimaAi Docs' }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="OptimaAi — AI-powered business intelligence platform documentation" />
    </>
  ),
  footer: {
    text: `${new Date().getFullYear()} © OptimaAi. All rights reserved.`,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
}
