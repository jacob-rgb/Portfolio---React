
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Main } from './portfolio/routers/Main';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);