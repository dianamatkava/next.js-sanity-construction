import Link from "next/link";


function ContactButton () {
  return (
    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
      <Link href='/contact#Contact'
            className="self-stretch px-5 py-4 bg-[#6f1d1b] rounded-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-[#5C1312] hover:text-white">
        <div
          className="min-w-fit text-center text-[#f5efe7] text-sm font-semibold leading-tight tracking-tight text-nowrap">Schedule
          Appointment
        </div>
      </Link>
    </div>
  );
}

export default ContactButton;