import Button from '../components/Button';
import FancyButton from '../components/FancyButton';
import Highlight from '../components/Highlight';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .homepage-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          max-width: 90vw;
          height: 100vh;
          margin: auto;
        }
      `}</style>
      <div className="homepage-grid">
        <Button> Button </Button>
        <FancyButton> Fancy Button </FancyButton>
        <Highlight text="Text Highlight" />
      </div>
    </>
  );
}
