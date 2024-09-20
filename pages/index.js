import Header from '../components/header';
import Title from '../components/title';
import Wave from '../components/wave';
import Welcome from '../components/welcome';
import CareerHighlights from "../components/career-highlights";
import Footer from '../components/footer';

export default function Home() {
    return (
        <div>
            <Header/>
            <Title
                text="Senior Engineering Leader"
                subtitle="CONTINUOUS IMPROVEMENT | MENTORSHIP | TECHNOLOGY INNOVATION AND DELIVERY | CHANGE LEADERSHIP"
            />
            <Wave topColor="#2F6DAC" bottomColor="#EAEAEE" />
            <Welcome/>
            <Wave topColor="#EAEAEE" bottomColor="#FFFFFF" />
            <CareerHighlights/>
            <Wave topColor="#FFFFFF" bottomColor="#95B4DA" />
            <Footer/>
        </div>
    );
}