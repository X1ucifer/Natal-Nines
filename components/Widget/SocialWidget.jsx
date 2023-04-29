import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/company/natal-nine/" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://twitter.com/natalnine" className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link href="https://www.youtube.com/@NatalNine" className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
      <Link href="https://www.instagram.com/natalnine/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  );
}
