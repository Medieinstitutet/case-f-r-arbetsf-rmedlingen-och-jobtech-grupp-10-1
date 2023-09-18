import {
  NavigationSidebarMobilePosition,
  NavigationSidebarMobileVariation,
  NavigationSidebarPosition,
  NavigationSidebarVariation,
} from '@digi/arbetsformedlingen';
import {
  DigiLayoutBlock,
  DigiNavigationSidebar,
  DigiUtilBreakpointObserver,
} from '@digi/arbetsformedlingen-react';
import RelatedOccupationInput from './RelatedOccupationInput';
import { useState } from 'react';

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (status: boolean) => void;
}) => {
  const [large, setLarge] = useState(false);
  return (
      <DigiUtilBreakpointObserver onAfOnMedium={() => setLarge(false)} onAfOnLarge={() => setLarge(true)}>
        <DigiNavigationSidebar
          afActive={open}
          afStickyHeader={false}
          afBackdrop={false}
          afPosition={NavigationSidebarPosition.START}
          afVariation={NavigationSidebarVariation.STATIC}
          afHideHeader={true}
          onAfOnClose={() => setOpen(false)}
          afMobilePosition={NavigationSidebarMobilePosition.END}
          afMobileVariation={NavigationSidebarMobileVariation.DEFAULT}
        >
          <RelatedOccupationInput />
        </DigiNavigationSidebar>
      </DigiUtilBreakpointObserver>
  );
};

export default SideBar;
