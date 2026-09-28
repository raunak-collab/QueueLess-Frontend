import Footer from "@/components/layout/Footer";
import Navbar from "@/components/landing/Navbar";


export default function layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
