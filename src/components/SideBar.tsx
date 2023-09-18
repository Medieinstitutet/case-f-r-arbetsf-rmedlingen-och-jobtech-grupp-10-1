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

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (status: boolean) => void;
}) => {
  return (
      <DigiUtilBreakpointObserver onAfOnLarge={() => console.log('Large')}>
        <DigiNavigationSidebar
          afActive={open}
          afStickyHeader={false}
          afBackdrop={false}
          afPosition={NavigationSidebarPosition.START}
          afVariation={NavigationSidebarVariation.PUSH}
          afHideHeader={true}
          onAfOnClose={() => setOpen(false)}
          afMobilePosition={NavigationSidebarMobilePosition.END}
          afMobileVariation={NavigationSidebarMobileVariation.FULLWIDTH}
        >
          <RelatedOccupationInput />
        </DigiNavigationSidebar>
      </DigiUtilBreakpointObserver>
  );
};

export default SideBar;
