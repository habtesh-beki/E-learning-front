import MobileHeader from './mobileHeader';
import DesktopHeader from './desktopHeader'


export default function Header(){
    return (
        <header>
        <MobileHeader />
        <DesktopHeader />
        </header>
      );
}