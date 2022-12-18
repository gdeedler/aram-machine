'use client'

import { useRouter } from "next/navigation"

interface ButtonInterface {
  children: string,
  route: string,
}

export default function Button({children, route}: ButtonInterface) {
  const router = useRouter();
  return(
    <button onClick={() => router.push(route)}>{children}</button>
  )
}