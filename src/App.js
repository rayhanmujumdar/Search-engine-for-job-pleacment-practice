import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-center my-10 border-2 border-black w-2/4 mx-auto rounded-md text-xl font-semibold bg-red-500 text-white py-2">
        My name is Rayhan
      </h1>
        <button className="mx-auto block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>
        <Footer></Footer>
    </div>
  );
}

export default App;
