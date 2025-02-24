import {useMediaQuery} from 'react-responsive'
import {BREAKPOINTS} from '../config/breakpoints'

const useMedia = () => {
  const isMobile = useMediaQuery({
    query: `(min-width:${BREAKPOINTS.MOBILE}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width:${BREAKPOINTS.TABLET}px)`,
  });

  const isDesktop = useMediaQuery({
    query: `(min-width:${BREAKPOINTS.DESKTOP}px)`,
  }); 

  return { isMobile, isTablet, isDesktop };
}

export default useMedia