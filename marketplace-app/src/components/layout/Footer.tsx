export default function Footer() {
  return (
    <footer className="flex flex-col bg-secondary p-3 gap-5 py-5 flex-shrink-0">
      <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start gap-3 sm:gap-0">
        <div className="flex items-center sm:items-start flex-col gap-2">
          <h1 className="my-3"> Learn more </h1>
          <p> About Topleaderr </p>
          <p> Press Releases </p>
          <p> Careers </p>
          <p> Privacy Policy </p>
        </div>
        <div className="flex items-center sm:items-start flex-col gap-2">
          <h1 className="my-3"> Social </h1>
          <p> twitter </p>
          <p> instagram </p>
          <h2>
            {" "}
            Contact:{" "}
            <a href="mailto:business@topleaderr.com">
              business@topleaderr.com
            </a>{" "}
          </h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mb-14">
        © 2023 TopLeaderr All Rights Reserved
      </div>
    </footer>
  );
}
