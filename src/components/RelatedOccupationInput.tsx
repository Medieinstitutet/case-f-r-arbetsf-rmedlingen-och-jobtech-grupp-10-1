// https://www.npmjs.com/package/react-tagsinput

import { useState } from 'react';
import TagsInput from 'react-tagsinput';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import './RelatedOccupationInput.scss'

const RelatedOccupationInput = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [showDuplicateError, setShowDuplicateError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchWords.length >= 3) {
      setShowLengthError(false);
      const searchString = searchWords.join(' ');
      const response = await postSearchQuery(searchString);
      console.log(response);
      setSearchWords([]);
    } else {
      setShowLengthError(true);
    }
  };

  const handleInputChange = (content: string[], updatedContent: string[]) => {
    setShowDuplicateError(false);
    setShowLengthError(false);
    
    const isDelete = !content.includes(updatedContent[0]);
    if (isDelete) {
      setSearchWords((prev) => [
        ...prev.filter((word) => word !== updatedContent[0]),
      ]);
      return;
    }

    const isUnique = !searchWords.includes(updatedContent[0]);
    if (!isUnique) {
      setShowDuplicateError(true);
      return;
    }
    setSearchWords((prev) => [...prev, ...updatedContent]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TagsInput
        value={searchWords}
        onChange={(content, updatedContent) =>
          handleInputChange(content, updatedContent)
        }
        // Lägger till space, tab som en avgränsare för att lägga till nytt ord
        addKeys={[32, 9]}
        inputProps={{ placeholder: 'Nytt sökord' }}
        addOnBlur={true}
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
      <input type="submit" value='Sök'/>
      <button onClick={() => setSearchWords([])}>Rensa</button>
    </form>
  );
};

export default RelatedOccupationInput;
