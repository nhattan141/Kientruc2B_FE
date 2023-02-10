import Routes from '../src/routes';
import * as React from 'react';
function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </React.Suspense>
  );
}

export default App;
