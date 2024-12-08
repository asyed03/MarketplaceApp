import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Searchbar() {
  return (
    <div className="flex rounded-xl bg-greyscale-100 text-greyscale-200 basis-[100%] h-button-regular p-3">
      <MagnifyingGlassIcon className="w-5 mr-2" />
      <input
        className="flex focus:outline-none bg-inherit basis-[100%]"
        placeholder="Search"
      ></input>
    </div>
  );
}
