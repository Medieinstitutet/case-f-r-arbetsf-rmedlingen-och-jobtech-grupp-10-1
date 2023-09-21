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
  DigiButton,
  DigiDialog,
  DigiFormInput,
  DigiFormTextarea,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import { DigiFormTextareaCustomEvent } from '@digi/arbetsformedlingen/dist/types/components';
import { DialogSize, DialogHeadingLevel } from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';

const RelatedOccupationInput = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [pressedOnce, setPressedOnce] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [searchText, setSearchText] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const searchString = searchWords.join(' ');
    const query = searchString + ' ' + searchText;
    const queryLength = query.split(' ').length;
    if (searchWords.length >= 3 || queryLength >= 3) {
      setShowLengthError(false);
      const response = await postSearchQuery(query);
      if (response.hits_total !== 0) {
        dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
        dispatch({
          type: 'SET_LATEST_SEARCH',
          payload: { title: '', keywords: searchString, freeText: searchText },
        });
        setSearchWords([]);
        setSearchText('');
        navigate('/related-occupations');
      } else {
        setShowDialog(true);
      }
    } else {
      setShowLengthError(true);
    }
  };

  const handleInputChange = (tags: string[]) => {
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
    <DigiLayoutContainer afVerticalPadding>
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
        <DigiButton
          onAfOnClick={handleSubmit}
          af-variation="primary"
          style={{ marginRight: '0.5rem' }}
        >
          Sök
        </DigiButton>
        <DigiButton
          af-variation="secondary"
          onAfOnClick={() => {
            setSearchWords([]);
            setSearchText('');
          }}
        >
          Rensa
        </DigiButton>
        <DigiDialog
          afSize={DialogSize.MEDIUM}
          afShowDialog={showDialog}
          afHeadingLevel={DialogHeadingLevel.H3}
          afHeading="Sökningen gav inga resultat, prova att söka med andra ord."
          afCloseButtonText=""
          afPrimaryButtonText="OK"
          onAfOnClose={() => setShowDialog(false)}
          onAfPrimaryButtonClick={() => {
            setShowDialog(false);
          }}
        />
      </div>
    </DigiLayoutContainer>
  );
};

export default RelatedOccupationInput;
