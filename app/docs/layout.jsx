import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '../../lib/source';

export default function Layout({ children }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <img
            src="/logo.png"
            alt="Optima AI"
            style={{ height: '52px', width: 'auto' }}
          />
        ),
        githubUrl: 'https://github.com/your-org/optimaai',
      }}
    >
      {children}
    </DocsLayout>
  );
}
