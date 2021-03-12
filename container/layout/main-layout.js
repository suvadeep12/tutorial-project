import Footer from "../footer";
import Header from "../header";

function Mainlayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Mainlayout;
