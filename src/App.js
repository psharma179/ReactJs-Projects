import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
            

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
