'use client'

import { useRouter } from "next/navigation"

interface ButtonInterface {
  children: string | undefined,
}

export default function BackButton({children}: ButtonInterface) {
  const router = useRouter();
  return(
    <button onClick={() => router.back()}>{children}</button>
  )
}