import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MultiStepsProvider } from './context/MultiStepsProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MultiStepsProvider>
      <App />
    </MultiStepsProvider>
  </StrictMode>,
)
