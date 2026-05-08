import Image from "next/image";
import LogoImg from "../../public/Logo.svg";

function Header() {
  return (
    <header className="w-full pt-3 pb-4 bg-[#1e1b4b] mx-auto max-w-[1300px]">
      <div className="flex flex-col items-center gap-1">
        <Image src={LogoImg} alt="Logo" height={28} />
        <h1 className="text-4xl">Patients</h1>
      </div>
    </header>
  );
}

export default Header;
