import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Search from './components/searchBar/Search';
import Language from './components/language/Language';
import Example from './components/Hymn-book/AddBook';
import './App.css';
import AddLang from "./components/language/AddLang";
import AddBook from "./components/Hymn-book/AddBook"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Header /> */}
      {/* <Search /> */}
      {/* <Language /> */}
      {/* <Example/> */}
    
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Header />} />
          <Route path="header" element={<Header />} />
          <Route path="addLang" element={<AddLang />} />
          <Route path="AddBook" element={<AddBook />} />
        </Route>
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
