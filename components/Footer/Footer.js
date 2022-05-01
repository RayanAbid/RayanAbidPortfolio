import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  var TodayDate = new Date();
  var year = TodayDate.getFullYear();

  return (
    <div className="bg-main text-center px-4 md:px-6 md:py-5 lg:px-20 lg:py-0">
      <hr className="bg-white  h-[1px] border-0" />

      <div
        className="w-full px-8  flex flex-col justify-start md:flex-row md:justify-between 
      lg:justify-center gap-2 md:gap-0 py-6"
      >
        <p className="text-sm leading-none text-white">
          Rayan Abid - Software Developer - {year} -{" "}
          <a href="mailto:rayanabid12345@gmail.com">Email me</a>
        </p>
        <br />
      </div>
    </div>
  );
}
