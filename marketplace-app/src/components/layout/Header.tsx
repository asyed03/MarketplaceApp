import Image from "next/image";
import reactlogo from "../../../public/images/react-logo.svg";
import Menu from "../navigation/Menu";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import Searchbar from "../navigation/Searchbar";

export default async function Header() {
  // const session = await auth();
  // console.log("session in header: ", session);

  // let user = null;
  // if (session) {
  //   try {
  //     user = await getCurrentUser();
  //   } finally {
  //     if (!user) {
  //       throw notFound();
  //     }
  //   }
  // }

  return (
    <header className="flex-col">
      <div className="bg-secondary p-3 flex items-center py-5 gap-1 flex-shrink-0">
        <div className="flex grow justify-center items-center gap-3">
          <div className="flex grow justify-center">
            <Link href="/">
              <Image
                priority
                height="30"
                width="30"
                src={reactlogo}
                alt="reactlogo"
              />
            </Link>
          </div>
          <div className="flex grow basis-[70%] justify-start">
            <Searchbar />
          </div>
        </div>
        <div className="flex md:grow justify-end gap-3">
          <Menu>test</Menu>
        </div>
      </div>
    </header>
  );
}
