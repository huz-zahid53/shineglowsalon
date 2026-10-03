// Note: the fetch property descriptor polyfill is already applied in index.html
// before this module loads, so we do NOT repeat it here. Duplicating
// Object.defineProperty on the same property can throw in strict environments.

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found in the document.');

createRoot(rootElement).render(<App />);
