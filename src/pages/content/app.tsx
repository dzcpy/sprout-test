import { createRoot } from 'react-dom/client';
import WebsitePanel from '@pages/content/panels/website';
import TextPanel from '@pages/content/panels/text';
import ImagePanel from '@pages/content/panels/image';
import '@assets/style/tailwind.scss';
import '@assets/font/inter.css';

const container = document.body;
const root = createRoot(container);

const resizeObserver = new ResizeObserver(([entry]) => {
  const { blockSize, inlineSize } = entry.borderBoxSize?.[0] ?? {};
  if (Number.isFinite(blockSize) && Number.isFinite(inlineSize)) {
    parent.postMessage(
      {
        type: 'resize',
        data: { height: blockSize, width: inlineSize },
      },
      '*'
    );
  }
});

const App = () => {
  const url = new URL(location.href);
  switch (url?.searchParams?.get('panel')) {
    case 'website':
      return <WebsitePanel />;
    case 'text':
      return <TextPanel />;
    case 'image':
      return <ImagePanel />;
    default:
      return null;
  }
};

resizeObserver.observe(container);

root.render(<App />);
