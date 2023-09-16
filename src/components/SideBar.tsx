import {
  NavigationSidebarPosition,
  NavigationSidebarVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiNavigationSidebar,
  // DigiUtilBreakpointObserver,
} from '@digi/arbetsformedlingen-react';
import RelatedOccupationInput from './RelatedOccupationInput';

const SideBar = () => {
  return (
    <DigiNavigationSidebar
      afActive={true}
      afStickyHeader={true}
      afBackdrop={false}
      afPosition={NavigationSidebarPosition.START}
      afVariation={NavigationSidebarVariation.OVER}
      afCloseButtonText="Stäng"
    >
      <RelatedOccupationInput />
    </DigiNavigationSidebar>
  );
};

export default SideBar;
