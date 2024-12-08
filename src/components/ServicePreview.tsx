function ServicePreview () {
  return (
    <div className="self-stretch h-[632px] bg-[#f5efe7] justify-between items-start inline-flex">
      <div className="w-[819px] h-[632px] flex-col justify-start items-start gap-2.5 inline-flex">
        <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/819x632"/>
      </div>
      <div className="grow shrink basis-0 self-stretch px-10 justify-start items-center gap-[30px] flex">
        <div className="w-px self-stretch justify-between items-center flex">
          <div className="w-[178.77px] h-[0px] origin-top-left -rotate-90 border-2 border-[#414141]"></div>
          <div className="w-[632px] self-stretch origin-top-left -rotate-90 border-2 border-[#e2e2e2]"></div>
        </div>
        <div className="w-[727px] flex-col justify-start items-start gap-[139px] inline-flex">
          <div className="flex-col justify-start items-start gap-[25px] flex">
            <div
              className="w-[559px] text-[#424242] text-[64px] font-semibold font-playfair leading-[68px]">Water
              Damage Restoration
            </div>
            <div className="w-[719px] h-[91.98px]"><span
              className="text-[#505050] text-lg font-normal leading-loose">Lorem ipsum (</span><span
              className="text-[#505050] text-lg font-normal underline leading-loose">/ˌlɔː.rəm ˈɪp.səm/</span><span
              className="text-[#505050] text-lg font-normal leading-loose"> </span><span
              className="text-[#505050] text-lg font-normal underline leading-loose">LOR-əm IP-səm</span><span
              className="text-[#505050] text-lg font-normal leading-loose">) is a dummy or placeholder text commonly us a dummy or placeholder text commonly us  placeholder text commonly us a dummy or placeholder text commonly us           </span>
            </div>
            <div
              className="w-[440.13px] h-[91.98px] text-[#505050] text-lg font-normal leading-loose">+
              dummy or placeholder + dummy or placeholder + dummy or placeholder<br/></div>
          </div>
          <div className="justify-start items-center gap-[30px] inline-flex">
            <div className="w-[297px] h-[63.44px] relative">
              <div className="w-[297px] h-[63.44px] left-0 top-0 absolute bg-[#6f1d1b] rounded-[70px]"/>
              <div
                className="w-[174.54px] h-[18.68px] left-[51.11px] top-[22.34px] absolute text-center text-white text-2xl font-semibold leading-tight tracking-tight">Contact
              </div>
            </div>
            <div className="w-[38.18px] h-5 justify-start items-center gap-2.5 flex">
              <div className="text-[#414141] text-lg font-bold leading-tight">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePreview;