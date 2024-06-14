import './index.css'
import { AppProvider } from '@/providers/app'
import { AppRoutes } from '@/routes'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <AppProvider>
    <AppRoutes />
    <Analytics/>
    </AppProvider>
  )
}

export default App
