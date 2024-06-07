import React from 'react'
import {BrowserRouter as Router, HashRouter} from 'react-router-dom'

import { Spinner } from '@/components/Elements/Spinner/Spinner'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>

        <HashRouter>{children}</HashRouter>
      </QueryClientProvider>
    </React.Suspense>
  )
}
