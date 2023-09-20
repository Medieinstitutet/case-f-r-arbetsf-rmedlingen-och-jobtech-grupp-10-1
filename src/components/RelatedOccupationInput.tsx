/* eslint-disable @typescript-eslint/no-explicit-any */
// https://www.npmjs.com/package/react-tagsinput

import { useContext, useState } from 'react';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import './RelatedOccupationInput.scss';
import { TagsInput } from 'react-tag-input-component';
import {
  IRelatedOccupationsContext,
  RelatedOccupationsContext,
} from '../contexts/RelatedOccupationsContext';
import {
  FormTextareaVariation,
  FormTextareaValidation,
} from '@digi/arbetsformedlingen';
import {
  DigiFormInput,
  DigiFormTextarea,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import { DigiFormTextareaCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';

const RelatedOccupationInput = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [pressedOnce, setPressedOnce] = useState(false);
  const { dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [searchText, setSearchText] = useState<string>('');

  const handleSubmit = async () => {
    const searchString = searchWords.join(' ');
    const query = searchString + ' ' + searchText;
    const queryLength = query.split(' ').length;
    if (searchWords.length >= 3 || queryLength >= 3) {
      setShowLengthError(false);
      const response = await postSearchQuery(query);
      dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
      dispatch({
        type: 'SET_LATEST_SEARCH',
        payload: { title: '', keywords: searchString, freeText: searchText },
      });
      setSearchWords([]);
      setSearchText('');
    } else {
      setShowLengthError(true);
      console.log(searchText);
    }
  };

  const handleInputChange = (tags: string[]) => {
    console.log(tags);

    if (tags[tags.length - 1] === ' ') {
      return;
    }
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
  };

  const handleSearchTextChange = (event: DigiFormTextareaCustomEvent<any>) => {
    setSearchText(event.target.value);
  };

  return (
    <DigiLayoutContainer>
      <div>
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
        <DigiFormTextarea
          value={searchText}
          onAfOnChange={handleSearchTextChange}
          afLabel="Fritext sök"
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={FormTextareaValidation.NEUTRAL}
        />
        <DigiFormInput afLabel="Titel" />
        <button onClick={handleSubmit}>Sök</button>
        <button
          onClick={() => {
            setSearchWords([]);
            setSearchText('');
          }}
        >
          Rensa
        </button>
      </div>
    </DigiLayoutContainer>
  );
};

export default RelatedOccupationInput;
