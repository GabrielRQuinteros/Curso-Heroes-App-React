import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroesApp } from './HeroesApp'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import 'animate.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <HeroesApp/>
    </BrowserRouter>
  </StrictMode>
)
