import { useEffect, type ReactNode } from "react"

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Set dark mode on mount
    document.documentElement.classList.add("dark")
  }, [])

  return <>{children}</>
}
