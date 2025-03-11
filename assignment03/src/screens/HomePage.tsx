import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeContent from "../containers/HomeContent/HomeContent";
import { getCart } from "../services/maintainCart";
import OrderConfirmation from "../containers/OrderConfirmation/OrderConfirmation";


const HomePage = () => {
    // const location = useLocation();
    // const cartProducts = location.state?.cartProducts || []; 
    // console.log(location,cartProducts);

    const confirmedProducts = [...getCart()];
    return (
        <>
            <Header />
            {confirmedProducts && confirmedProducts.length > 0 && <OrderConfirmation confirmedProducts={confirmedProducts}/>}
            <HomeContent />
            <Footer />
        </>
    );
}
export default HomePage;