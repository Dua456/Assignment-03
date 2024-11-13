import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Extension from "./components/extension";
import Customise from "./components/customise"
import YourWork from "./components/Your work";
import Sponcer from "./components/sponsors";
import Footer from "./components/footer";



export default function Home () {
    return (
        <div>
            <Navbar />   
            <Hero />
            <Extension />
            <Customise />
            <YourWork />
            <Sponcer />
            <Footer />
            
        </div>
    );
}
