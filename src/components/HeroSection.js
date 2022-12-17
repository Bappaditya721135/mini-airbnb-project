import galaryimg from '../img/herosection.png';

export default function HeroSection() {
    return (
        <div className="hero-section">
            
                <img className="hero-img" src={galaryimg} alt="grid-img" />
                <h2 className="hero-header">online Experiences</h2>
                <p className="hero-disc">Join interactive activities led by one-of-a-kind hosts-without leaving the home.</p>
        </div>
    );
}