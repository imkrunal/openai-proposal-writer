import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { ImSpinner9 } from 'react-icons/im'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'gradient' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
}

const Button = ({
  color = 'primary',
  size = 'md',
  type,
  loading,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        'flex items-center rounded-lg border-transparent font-medium text-white',
        size === 'xs' && 'px-2.5 py-1.5 text-xs',
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-4 py-2 text-base',
        size === 'xl' && 'px-6 py-3 text-base',
        color === 'primary' && 'bg-blue-500 hover:bg-blue-600',
        color === 'secondary' && 'bg-gray-700 hover:bg-gray-800',
        color === 'gradient' && 'bg-gradient-to-r from-green-500 to-green-600',
      )}
      {...props}
    >
      {loading && <ImSpinner9 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}

export default Button
