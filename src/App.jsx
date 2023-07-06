import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MyCV } from './App/CV/MyCV';
import { MyCalendar } from './App/Calendar/Calendar';
import { Settings } from './App/Settings/Settings';
import { FAQ } from './App/FAQ/FAQ';

export function App() {
  const [withSidebar, setWithSidebar] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Layout withSidebar={withSidebar} setWithSidebar={setWithSidebar} />
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="my-cv/*" element={<MyCV />} />
          <Route path="calendar/*" element={<MyCalendar />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
