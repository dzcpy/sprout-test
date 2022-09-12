import clsx from 'clsx';
import { useState } from 'react';

export type OptionButtonPropsOptionsType = {
  [key: string]: { label: string; icon: JSX.Element };
};

export type OptionButtonPropsType = {
  value?: string;
  defaultValue?: string;
  options: OptionButtonPropsOptionsType;
  onChange?: (value: string) => void;
};

const OptionButton = ({
  value,
  defaultValue,
  options,
  onChange,
}: OptionButtonPropsType) => {
  const [selected, setSelected] = useState<string>(
    value ?? defaultValue ?? Object.keys(options)[0]
  );
  return (
    <div className="flex gap-1 p-1 rounded-lg bg-gray-bg">
      {Object.entries(options).map(([key, { label, icon }]) => (
        <button
          key={key}
          className={clsx(
            'flex gap-1 items-center py-1 px-2 rounded-sm transition-all leading-4',
            {
              'bg-white shadow-sm': selected === key,
              'text-gray-inactive': selected !== key,
            }
          )}
          onClick={() => {
            setSelected(key);
            onChange(key);
          }}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
};

export default OptionButton;
