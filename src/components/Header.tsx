function AppHeader () {
  return (
    <div
      className="self-stretch px-[60px] py-[22px] bg-gradient-to-b from-black to-[#290404] flex-col justify-between items-center flex gap-5">
      <div
        className="self-stretch pt-2.5 pb-[15px] border-b border-[#a2a0a0] justify-between items-center inline-flex">
        <div className="h-[69px] justify-start items-center gap-5 flex">
          <img className="w-[65px] h-[69px] rounded-full" src="https://via.placeholder.com/65x69"/>
          <div className="w-[273px] text-[#f5efe7] text-md font-normal font-playfair">AMERICAN ESSENTIAL
            CONSTRUCTION GROUP
          </div>
        </div>
        <div className="justify-start items-start gap-[35px] flex">
          <div className="text-[#f5efe7] text-xl font-bold">Home</div>
          <div className="text-[#f5efe7] text-xl font-normal">About</div>
          <div className="text-[#f5efe7] text-xl font-normal">Services</div>
          <div className="text-[#f5efe7] text-xl font-normal">Contact</div>
        </div>
        <div className="justify-start items-start gap-[35px] flex">
          <div
            className="h-10 px-4 py-3 bg-white/5 rounded-full border border-[#f5efe7] justify-start items-center gap-2 flex">
            <div
              className="grow shrink basis-0 text-[#e7e7e7] text-base font-normal  leading-none">Value
            </div>
            <div className="w-4 h-4 relative"/>
          </div>
          <div className="h-10 bg-[#f5efe7] rounded-2xl shadow flex-col justify-center items-center inline-flex">
            <div
              className="self-stretch grow shrink basis-0 pl-4 pr-5 py-4 justify-center items-center gap-3 inline-flex">
              <div
                className="text-center text-[#6f1d1b] text-base font-medium  leading-tight tracking-tight">Get
                in Touch
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full self-stretch flex-col justify-between items-center flex">
        <div className="m-auto max-w-[70%]  self-stretch flex-col justify-center items-center gap-[38px] flex">
          <div
            className="self-stretch text-center text-[#f5efe7] text-xlg font-semibold font-playfair leading-[100px]">Comprehensive
            Solution for Repair Services
          </div>
          <div
            className="self-stretch text-center text-[#d4d3d3] text-xl font-normal leading-[29px]">As
            a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
            reconstruction services, including residential and commercial reconstruction, remodeling, and renovations.
          </div>
          <div
            className="px-4 py-5 bg-[#f5efe7] rounded-[50px] justify-center items-center gap-2.5 inline-flex">
            <div
              className="w-[290px] text-center text-[#6f1d1b] text-md font-semibold leading-tight tracking-tight">Schedule
              Appointment
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="w-[804px]"><span
            className="text-[#f5efe7] font-bold  leading-[76px]">Home</span><span
            className="text-[#f5efe7] font-medium leading-[76px]"> </span><span
            className="text-[#f5efe7] font-medium leading-[76px] tracking-tight">¬ </span><span
            className="text-[#f5efe7] font-medium leading-[76px]">About</span></div>
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