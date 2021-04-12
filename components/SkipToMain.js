import Link from 'next/link'

const SkipToMain = () => {
    return ( 
        <Link href="#main"><a className="skip-to-main" tabIndex="1">Skip to Main</a></Link>
    );
}

export default SkipToMain;


