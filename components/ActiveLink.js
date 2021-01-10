import { useRouter } from 'next/router'
import Link from "next/link"

function ActiveLink({ children, activeClassName, href, className = '' }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Link href={href} passHref scroll={false}>
      <a onClick={handleClick} className={`${className}${router.pathname === href ? activeClassName : ''}`}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink