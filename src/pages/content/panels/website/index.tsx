import { debounce } from 'lodash-es';
import { useState } from 'react';

import { ReactComponent as IconLock } from '@assets/img/lock.svg';
import { ReactComponent as IconWeb } from '@assets/img/web.svg';
import { WAIT_TIME_BEFORE_CLOSING_PANEL } from '@src/constants';
import OptionButtons from '@src/pages/content/components/option-buttons';

import styles from './index.module.scss';

import type { ChangeEvent } from 'react';

const closeIframe = () => {
  parent.postMessage({ type: 'close' }, '*');
};

const onHoverClose = debounce(() => {
  closeIframe();
}, WAIT_TIME_BEFORE_CLOSING_PANEL);

export default function App() {
  const [scope, setScope] = useState<'world' | 'self'>('world');
  const [note, setNote] = useState('');

  return (
    <div
      className="bg-white w-full h-auto p-4 flex flex-col gap-4"
      onMouseLeave={() => {
        if (!note) {
          onHoverClose();
        }
      }}
      onMouseEnter={() => {
        onHoverClose.cancel();
      }}
    >
      <div className="flex justify-center items-center relative flex-none">
        <button
          className="absolute left-0 top-0 text-gray-text"
          onClick={closeIframe}
        >
          Cancel
        </button>
        <span className="font-semibold">Roll up</span>
      </div>
      <textarea
        placeholder="Add a note..."
        value={note}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setNote(event.target.value)
        }
      ></textarea>
      <div className="flex gap-4">
        <OptionButtons
          options={{
            world: {
              label: 'World',
              icon: <IconWeb className="inline-block" />,
            },
            self: {
              label: 'Myself',
              icon: <IconLock className="inline-block" />,
            },
          }}
          value={scope}
          onChange={(value) => setScope(value)}
        />
        <button className={styles['done-button']}>Done</button>
      </div>
    </div>
  );
}
