/* eslint-disable @typescript-eslint/no-explicit-any */
// https://www.npmjs.com/package/react-tagsinput

import { useContext, useState } from 'react';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import './RelatedOccupationInput.scss';
import { TagsInput } from 'react-tag-input-component';
import { RelatedOccupationsContext } from '../contexts/RelatedOccupationsContext';
import {
  FormTextareaVariation,
  FormTextareaValidation,
} from '@digi/arbetsformedlingen';
import { DigiFormTextarea } from '@digi/arbetsformedlingen-react';
import { DigiFormTextareaCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

const RelatedOccupationInput = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [pressedOnce, setPressedOnce] = useState(false);
  const { dispatch } = useContext<any>(RelatedOccupationsContext);
  const [searchText, setSearchText] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchWords.length >= 3) {
      setShowLengthError(false);
      const searchString = searchWords.join(' ');
      const response = await postSearchQuery(searchString);
      console.log(response);
      dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
      setSearchWords([]);
    } else {
      setShowLengthError(true);
      console.log(searchText);
    }
  };

  const handleInputChange = (tags: string[]) => {
    setSearchWords([...tags]);
  };

  const resetErrors = () => {
    if (pressedOnce) {
      setShowDuplicateError(false);
      setShowLengthError(false);
      setPressedOnce(false);
    } else if (showDuplicateError || showLengthError) {
      console.log('pressedOnce', pressedOnce);

      setPressedOnce(true);
    }
  };

  const handleOnExisting = () => {
    console.log('Inne i on existing');

    setShowDuplicateError(true);
  };

  const handleOnBlur = (e: any) => {
    const value = e.target.value;
    const isDuplicate = searchWords.includes(value);
    if (isDuplicate) {
      setShowDuplicateError(true);
      return;
    }
    if (value === '') return;
    handleInputChange([...searchWords, value]);
    e.target.value = '';
    // setSearchWords((prev) => [...prev, e.target.value]);
    // e.target.value = '';
  };

  const handleSearchTextChange = (event: DigiFormTextareaCustomEvent<any>) => {
    setSearchText(event.target.value);
  };

  // useEffect(() => {
  //   console.log(searchWords);
  // }, [searchWords]);

  return (
    <form onSubmit={handleSubmit}>
      <TagsInput
        value={searchWords}
        onChange={(tags) => handleInputChange(tags)}
        onRemoved={(tag) =>
          setSearchWords(searchWords.filter((t) => t !== tag))
        }
        separators={['Enter', 'Tab', ' ', ',']}
        onExisting={handleOnExisting}
        onKeyUp={resetErrors}
        onBlur={handleOnBlur}
        placeHolder="Sökord"
      />
      {/* <TagsInput
        value={searchWords}
        onChange={(content, updatedContent) =>
          handleInputChange(content, updatedContent)
        }
        // Lägger till space, tab som en avgränsare för att lägga till nytt ord
        addKeys={[32, 9]}
        inputProps={{ placeholder: 'Nytt sökord' }}
        addOnBlur={true}
        renderInput={(props) => <input {...props} onKeyUp={resetErrors}/>}
      /> */}
      {showDuplicateError && ( // TODO: Lägg till AFs felmeddelande
        <p style={{ border: 'red solid 2px' }}>
          Du kan inte lägga till samma ord flera gånger
        </p>
      )}
      {showLengthError && ( // TODO: Lägg till AFs felmeddelande
        <p style={{ border: 'red solid 2px' }}>
          Du måste lägga till minst 3 ord
        </p>
      )}
      <input type="submit" value="Sök" />
      <button onClick={() => setSearchWords([])}>Rensa</button>
      <DigiFormTextarea
        value={searchText}
        onAfOnChange={handleSearchTextChange}
        afLabel="Fri text"
        afVariation={FormTextareaVariation.MEDIUM}
        afValidation={FormTextareaValidation.NEUTRAL}
      ></DigiFormTextarea>
    </form>
  );
};

export default RelatedOccupationInput;
