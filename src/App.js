import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useFetch from './util/useFetch';
import { Suspense } from 'react';

const Main = React.lazy(() => import("./Main"));
const Loading = React.lazy(() => import('./component/Loading'));


function App() {

  const [memos, isPending, error] = useFetch("http://localhost:3001/memo/")

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loading />}>
        <div className='app'>
          <Routes>
            <Route exact path="/" element={<Main memos={memos} isPending={isPending} />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
