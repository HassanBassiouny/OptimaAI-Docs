import { Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'OptimaAi Docs',
  description: 'OptimaAi — AI-powered business intelligence platform documentation',
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
          ⚡ OptimaAi Docs
        </span>
      }
      projectLink="https://github.com/your-org/optimaai"
    />
  )

  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/your-org/optimaai-docs"
          footer={<p>© {new Date().getFullYear()} OptimaAi. All rights reserved.</p>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
