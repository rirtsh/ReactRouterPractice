import { Routes , BrowserRouter, Route, } from 'react-router-dom';
import { Home } from './component/home';
import { About } from './component/about';
import { Contact } from './component/contact';
import { NotFound } from './component/NotFound';

export const RouterConfig = () => {
  return (
    <>
      <h1>Hello React Router v6</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/ReactRouterPractice" element={<Home />} />
          <Route path="/ReactRouterPractice/about" element={<About />} />
          <Route path="/ReactRouterPractice/contact" element={<Contact message="Hello Contact" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};