import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
  placeholder: string;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, placeholder, error } = props;
  return (
    <FieldWrapper label={''} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          'bg-gray-50 border border-gray-300 text-gray-900 mb-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
