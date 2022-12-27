import { HTMLProps } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'

type TextareaProps = HTMLProps<HTMLTextAreaElement> & {
  name: string
}

const Textarea = ({ label, name, className, ...props }: TextareaProps) => {
  const [input, { touched, error }] = useField(name)
  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={classNames(
          'flex w-full rounded-lg border text-gray-500 hover:outline-none focus:outline-none',
          touched && error
            ? 'border-red-400 focus:border-red-600'
            : 'border-gray-300 focus:border-blue-600',
          className,
        )}
        id={input.name}
        {...input}
        {...props}
      />
      {touched && error && (
        <div className="mt-1 text-sm text-red-400">{error}</div>
      )}
    </div>
  )
}

export default Textarea
