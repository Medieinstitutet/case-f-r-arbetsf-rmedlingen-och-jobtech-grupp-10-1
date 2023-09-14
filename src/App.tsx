import './App.scss';
import { DigiButton } from '@digi/arbetsformedlingen-react';
import { ButtonVariation } from '@digi/arbetsformedlingen';

function App() {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <DigiButton
        afVariation={ButtonVariation.PRIMARY}
        onAfOnClick={handleClick}
      >
        Hello
      </DigiButton>
    </>
  );
}

export default App;
