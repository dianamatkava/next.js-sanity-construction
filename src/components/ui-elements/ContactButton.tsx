import Link from "next/link";


function ContactButton ({name, className=""}) {
  return (
    <div className={`min-w-[250px] flex-col justify-center items-center gap-2 inline-flex text-nowrap flex-nowrap ${className}`}>
      <Link href='/contact#Contact'
            className="self-stretch px-4 py-3 bg-[#6f1d1b] rounded-[50px] justify-center items-center gap-1 inline-flex hover:bg-[#5C1312] hover:text-white">
        <div
          className="min-w-fit text-center text-[#f5efe7] text-sm font-semibold leading-1 tracking-tight">{name}
        </div>
      </Link>
    </div>
  );
}

export default ContactButton;