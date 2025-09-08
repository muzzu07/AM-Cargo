import logo from '@/assets/logo.png'

export default function Logo( size: 'sm' | 'md' | 'lg' = 'md' ) {
  return (
    <img
      src={logo}
      alt="Company Logo"
      className='h-20 w-auto'
    />
  )
}

