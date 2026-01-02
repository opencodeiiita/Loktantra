'use client'

interface StatusBadgeProps {
  status: 'active' | 'ended' | 'draft' | 'pending' | 'confirmed' | 'live'
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export default function StatusBadge({
  status,
  showIcon = true,
  size = 'md',
  animated = false,
}: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          icon: (
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          ),
          label: 'ACTIVE',
        }
      case 'live':
        return {
          bg: 'bg-red-50',
          text: 'text-red-600',
          border: 'border-red-200',
          icon: (
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          ),
          label: 'LIVE',
        }
      case 'ended':
        return {
          bg: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'ENDED',
        }
      case 'draft':
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-300',
          icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          ),
          label: 'DRAFT',
        }
      case 'pending':
        return {
          bg: 'bg-yellow-50',
          text: 'text-yellow-700',
          border: 'border-yellow-200',
          icon: (
            <svg
              className="w-3.5 h-3.5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ),
          label: 'PENDING',
        }
      case 'confirmed':
        return {
          bg: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          icon: (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
          label: 'CONFIRMED',
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-300',
          icon: null,
          label: status.toUpperCase(),
        }
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs'
      case 'lg':
        return 'px-4 py-2 text-sm'
      case 'md':
      default:
        return 'px-3 py-1.5 text-xs'
    }
  }

  const config = getStatusConfig()

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase ${
        config.bg
      } ${config.text} ${getSizeClasses()} ${
        animated ? 'transition-all duration-300' : ''
      }`}
    >
      {showIcon && config.icon}
      <span>{config.label}</span>
    </div>
  )
}
