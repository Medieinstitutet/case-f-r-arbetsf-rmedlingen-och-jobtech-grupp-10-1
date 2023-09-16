import {
  NavigationSidebarPosition,
  NavigationSidebarVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiNavigationSidebar,
  DigiUtilBreakpointObserver,
} from '@digi/arbetsformedlingen-react';
import { postSearchQuery } from '../services/relatedOccupationsSearchService';
import { useState } from 'react';

const SideBar = () => {
  const [searchText, setSearchText] = useState('');
  // console.log(DigiUtilBreakpointObserver);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await postSearchQuery(searchText);
    // const formData = new FormData(e.target);
    console.log(response);

    // const data = await postSearchQuery(e.target.value);
  };

  return (
    <DigiNavigationSidebar
      afActive={true}
      afStickyHeader={true}
      afBackdrop={true}
      afPosition={NavigationSidebarPosition.START}
      afVariation={NavigationSidebarVariation.OVER}
      afCloseButtonText="Stäng"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Textsökning"
          name="inputText"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input type="submit" />
      </form>
      <DigiUtilBreakpointObserver>fdsa</DigiUtilBreakpointObserver>
    </DigiNavigationSidebar>
  );
};

export default SideBar;
