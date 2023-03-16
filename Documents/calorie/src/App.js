import {
	Route,
	Link,
	Routes,
	BrowserRouter as Router,
	BrowserRouter,
} from "react-router-dom";

import Calorie from './Component/calorie';
import Main from './Component/main';
import img from './images/calorie.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<Routes>
						<Route path="/main" element={<Main />} />
						<Route path="/calories" element={<Calorie />} />
						
					</Routes>
				</BrowserRouter>
      
    </div>
  );
}

export default App;
