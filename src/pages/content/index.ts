/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */

const iframeURL = chrome.runtime.getURL('src/pages/content/index.html');
const iframe = Object.assign(document.createElement('iframe'), {
  src: iframeURL,
});
Object.assign(iframe.style, {
  zIndex: '2147483647',
  position: 'fixed',
  right: '24px',
  top: '24px',
  width: '276px',
  height: '100px',
  border: 'none',
  borderRadius: '16px',
  boxShadow:
    '0px 0.4px 0.7px rgba(113, 81, 78, 0.04), 0px 1px 2px rgba(113, 81, 78, 0.06), 0px 2.4px 4.8px rgba(113, 81, 78, 0.08), 0px 8px 16px rgba(113, 81, 78, 0.12)',
  visibility: 'hidden',
  opacity: 0,
  overflow: 'visible',
  transform: 'translateY(-100%)',
  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
});
document.body.append(iframe);

const showIframe = () => {
  iframe.style.visibility = 'visible';
  iframe.style.opacity = '1';
  iframe.style.transform = 'translateY(0)';
};

const hideIframe = () => {
  iframe.style.opacity = '0';
  iframe.style.transform = 'translateY(-100%)';
  setTimeout(() => {
    iframe.style.visibility = 'hidden';
  }, 500);
};

const setPanel = (panel?) => {
  const src = !panel ? undefined : iframeURL + '?panel=' + panel;
  if (iframe.src !== src) {
    iframe.src = src;
  }
};

window.addEventListener('message', ({ data: message }) => {
  switch (message.type) {
    case 'resize':
      iframe.style.height = message.data.height + 'px';
      iframe.style.width = message.data.width + 'px';
      break;
    case 'close':
      hideIframe();
      break;
  }
});

chrome.runtime.onMessage.addListener((message) => {
  // chrome.runtime.onMessage.removeListener(event);
  if (message.type === 'popup_click') {
    showIframe();
    setPanel('website');
  }
});
