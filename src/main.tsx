import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN || "https://397999b949859ba2b935739ab135313f@o4511540401143808.ingest.us.sentry.io/4511540410712064",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions for development
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample rate for all sessions
  replaysOnErrorSampleRate: 1.0, // Capture 100% of sessions with errors
});

function FallbackComponent({ error, resetError }: Sentry.FallbackRender) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-gray-700 mb-6">We're sorry, but an error occurred while loading the application.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => Sentry.showReportDialog()}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Submit Feedback
          </button>
          <button
            onClick={resetError}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>
);