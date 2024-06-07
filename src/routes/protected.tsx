import { Navigate } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

const { TeamsPage } = lazyImport(
  () => import('@/features/adminPanel/pages/TeamsPage'),
  'TeamsPage',
)

export const protectedRoutes = [
  {
    path: '/teams',
    element: <TeamsPage />,
  },
  {
    path: '*',
    element: <Navigate to="teams" />,
  },
]
