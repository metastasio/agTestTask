import { Navigate } from 'react-router-dom';

export const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return props.children;
};
