import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/tailwind.css'
import './styles/design-system.css'
import './styles/base.css'
import './styles/animations.css'
import './styles/components.css'
import './styles/utilities.css'

createRoot(document.getElementById("root")!).render(<App />);
