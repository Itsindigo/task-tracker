import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define the onUpdate function
const onUpdate = (registration) => {
  // Notify the user about the update and ask for a page reload
  if (window.confirm('A new version of the app is available. Reload to update?')) {
    // Skip waiting and activate the new service worker immediately
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    // Reload the page to use the updated content
    window.location.reload();
  }
};

// Register the service worker with the onUpdate callback
serviceWorkerRegistration.register({ onUpdate });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
