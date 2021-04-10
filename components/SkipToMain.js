import Link from 'next/link'

const SkipToMain = () => {
    return ( 
        <Link href="#main"><a class="skip-to-main" tabindex="1">Skip to Main</a></Link>
    );
}

export default SkipToMain;


