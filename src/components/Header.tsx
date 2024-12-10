import Link from 'next/link';

function AppHeader () {
  return (
    <div
      className="self-stretch px-[60px] py-4 bg-gradient-to-b from-black to-[#290404] flex-col justify-between items-center flex gap-5">
      <div
        className="self-stretch py-1 pb-2 border-b border-[#2E2E30] justify-between items-center inline-flex">
        <div className="flex">
          <Link
            key="Home"
            href='/'
            className="flex">
            <div className="justify-start items-center gap-2 flex">
              <img className="w-[45px] h-[45px] rounded-full" src="https://via.placeholder.com/65x69"/>
              <div className="max-w-[200px] text-[#f5efe7] font-normal font-playfair hover:text-[#FDFAF7]">AMERICAN ESSENTIAL CONSTRUCTION GROUP</div>
            </div>
          </Link>
        </div>
        <div className="justify-start items-start gap-[35px] flex">
          <Link key='Home' href='/' className="text-[#f5efe7] font-bold hover:text-[#FFFFFF]">Home</Link>
          <Link key='About' href='/aboutus#About' className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">About</Link>
          <Link key='Services' href='/services#ServiceList' className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">Services</Link>
          <Link key='Contact' href='/contact#Contact' className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">Contact</Link>
          <Link key='News' href='/news#News' className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">News</Link>
        </div>
        <div className="justify-start items-start gap-[35px] flex">
          <div className="bg-[#f5efe7] rounded-2xl shadow flex-col justify-center items-center inline-flex hover:bg-[#FFFFFF]">
            <Link href='contact/#Contact'
              className="self-stretch grow shrink basis-0 px-3 py-2 justify-center items-center gap-3 inline-flex">
              <div
                className="text-center text-[#6f1d1b] text-xsm font-semibold  leading-tight tracking-tight">
                Get in Touch
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full self-stretch flex-col justify-between items-center flex">
        <div className="m-auto max-w-[800px] self-stretch flex-col justify-center items-center gap-[38px] flex">
          <div
            className="self-stretch text-center text-[#f5efe7] text-xlg font-semibold font-playfair leading-[70px]">Comprehensive
            Solution for Repair Services
          </div>
          <div
            className="m-auto self-stretch max-w-[500px] text-center text-[#d4d3d3] font-normal">As
            a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
            reconstruction services, including residential and commercial reconstruction, remodeling, and renovations.
          </div>
          <Link href='contact/#Contact'
            className="px-5 py-4 bg-[#f5efe7] rounded-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-[#FFFFFF]">
            <div
              className="text-center text-[#6f1d1b] font-semibold leading-tight tracking-tight">Schedule
              Appointment
            </div>
          </Link>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          {/*<div className="w-[804px] text-xsm"><span*/}
          {/*  className="text-[#f5efe7] font-bold  leading-[76px]">Home</span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px]"> </span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px] tracking-tight">¬ </span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px]">About</span></div>*/}
          <div className="grow shrink basis-0 h-[78px] justify-end items-center flex">
            <div className="flex-col justify-center items-end inline-flex">
              <div className="text-right"><span
                className="text-[#dedddd] font-normal">+(123) </span><span
                className="text-[#dedddd] font-normal underline">747 295-5409</span></div>
              <div className="w-[381px] h-[54px] justify-start items-center gap-1.5 inline-flex">
                <div className="text-right"><span
                  className="text-[#b6b6b6] font-normal ">               </span><span
                  className="text-[#f5efe7] font-medium ">282 West Dryden Street, Glendale, California 91202, United States<br/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader