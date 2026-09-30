'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'

export function useSimulatedAction(successMessage: string, description?: string) {
  const [pending, setPending] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const run = useCallback(() => {
    if (pending) return
    setPending(true)
    timeoutRef.current = setTimeout(() => {
      setPending(false)
      toast.success(successMessage, { description })
    }, 1400)
  }, [pending, successMessage, description])

  return { pending, run }
}
