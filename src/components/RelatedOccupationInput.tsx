import { useContext, useState } from 'react';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import './RelatedOccupationInput.scss';
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
  DigiFormInput,
  DigiFormTextarea,
  DigiFormValidationMessage,
  DigiLayoutContainer,
} from '@digi/arbetsformedlingen-react';
import { FormValidationMessageVariation } from '@digi/arbetsformedlingen';
import { useNavigate } from 'react-router-dom';
import { Spinner } from './Spinner';
import {
  DigiFormTextareaCustomEvent,
  DigiFormInputCustomEvent,
} from '@digi/arbetsformedlingen/dist/types/components';
import Modal from './Modal';

const RelatedOccupationInput = () => {
  const [showLengthError, setShowLengthError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [identifiedKeywords, setIdentifiedKeywords] = useState<string[]>([]);
  const { dispatch } = useContext<IRelatedOccupationsContext>(
    RelatedOccupationsContext
  );
  const [searchText, setSearchText] = useState<string>('');
  const [searchTitle, setSearchTitle] = useState<string>('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const searchWords = searchText.split(' ').filter((word) => word !== '');
    const queryLength = searchWords.length;

    if (queryLength >= 3) {
      const query =
        searchTitle !== ''
          ? `${searchText}&input_headline=${searchTitle}`
          : searchText;

      setShowLengthError(false);
      const response = await postSearchQuery(query);

      if (response.hits_total !== 0) {
        dispatch({ type: 'SET_RELATED_OCCUPATIONS', payload: response });
        dispatch({
          type: 'SET_LATEST_SEARCH',
          payload: { title: searchTitle, freeText: searchText },
        });
        setSearchText('');
        navigate('/related-occupations');
      } else {
        setShowDialog(true);
        setIdentifiedKeywords([
          ...response.identified_keywords_for_input.competencies,
        ]);
      }
    } else {
      setShowLengthError(true);
    }
    setIsLoading(false);
  };

  const handleSearchTextChange = (event: DigiFormTextareaCustomEvent<any>) => {
    setSearchText(event.target.value);
  };
  const handleSearchTitleChange = (event: DigiFormInputCustomEvent<string>) => {
    setSearchTitle(event.target.value as string);
  };

  return (
    <DigiLayoutContainer afVerticalPadding>
      <div style={{ maxWidth: '500px' }}>
        {isLoading && <Spinner />}
        {showLengthError && (
          <DigiFormValidationMessage
            afVariation={FormValidationMessageVariation.ERROR}
          >
            Minst tre sökord måste anges
          </DigiFormValidationMessage>
        )}
        <DigiFormTextarea
          value={searchText}
          onAfOnChange={handleSearchTextChange}
          onAfOnFocus={() => setShowLengthError(false)}
          afLabel="Fritext sök"
          afLabelDescription='Skriv in minst tre kompetenser du vill söka på. Exempel: "html, css, javascript". Eller
          klistra in beskrivningen från en utbildning du är intresserad av.'
          afVariation={FormTextareaVariation.MEDIUM}
          afValidation={
            showLengthError
              ? FormTextareaValidation.ERROR
              : FormTextareaValidation.NEUTRAL
          }
          afRequired
        />
        <DigiFormInput
          afLabel="Utbildningens namn"
          value={searchTitle}
          onAfOnChange={handleSearchTitleChange}
        />

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
            setSearchText('');
            setSearchTitle('');
          }}
        >
          Rensa
        </DigiButton>
        <Modal
          text={`Sökningen gav inga resultat, prova att lägga till fler ord i din sökning. ${
            identifiedKeywords.length > 0
              ? `De relevanta orden hittills är: ${identifiedKeywords.join(
                  ', '
                )}`
              : ''
          }`}
          showDialog={showDialog}
          primaryButtonText="OK"
          onPrimaryButtonClick={() => {
            setShowDialog(false);
          }}
        />
      </div>
    </DigiLayoutContainer>
  );
};

export default RelatedOccupationInput;
