import clsx from 'clsx';
import { useState } from 'react';

export type OptionButtonPropsOptionsType = {
  [key: string]: { label: string; icon: JSX.Element };
};

export type OptionButtonPropsType<T> = {
  value?: keyof T;
  defaultValue?: keyof T;
  options: T;
  onChange?: (value: keyof T) => void;
};

const OptionButton = <T extends OptionButtonPropsOptionsType>({
  value,
  defaultValue,
  options,
  onChange,
}: OptionButtonPropsType<T>) => {
  const [selected, setSelected] = useState<string>(
    (value ?? defaultValue ?? Object.keys(options)[0]) as string | undefined
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
