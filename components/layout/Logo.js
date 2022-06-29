import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/logo/milhas-code-logo.png" width={100} height={75} />
        </a>
      </Link>
    </div>

    //   <Link href="/" passHref>
    //     <Image
    //       src="/logo/milhas-code-logo.png"
    //       alt="/"
    //       width="125"
    //       height="50"
    //     />
    //   </Link>
  );
}

export default Logo;
