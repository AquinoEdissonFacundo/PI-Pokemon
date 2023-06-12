import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './componentes/landing/landing';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from './redux/actions/index'
function App() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  console.log(types)
  useEffect(() => {
		dispatch(actions.getTypes());
	}, []);

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
