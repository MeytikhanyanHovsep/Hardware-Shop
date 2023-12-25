import { Provider } from "react-redux";
import Footer from "./Footer";
import store from "@/features/Store";
import NextTopLoader from "nextjs-toploader";
import Header from "./Header";

export default function Component({ children }) {
    return <>
        <NextTopLoader color="#2299DD" initialPosition={ 0.08 } crawlSpeed={ 10 } height={ 3 } showSpinner={ false } easing="ease" speed={ 200 } shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
        <Provider store={ store }>
            <Header />
            { children }
            <Footer />
        </Provider>
    </>
}