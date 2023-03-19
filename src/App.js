import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Filter from './Filter'
import Form from './Form';
import Header from './Header';
import Quiz from './Quiz';
import TempControl from './Temp_control';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/Temp_control' element={<TempControl />} />
          <Route path='/form' element={<Form />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;