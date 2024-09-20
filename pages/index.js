import Header from '../components/Header';
import Title from '../components/Title';
import Wave from '../components/Wave';
import Welcome from '../components/Welcome';
import CareerHighlights from "../components/career-highlights";
import Footer from '../components/Footer';

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