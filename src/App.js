import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Category from "./components/Category";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Category />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
