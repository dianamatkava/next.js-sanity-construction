import {MdOutlineArrowOutward} from "react-icons/md";

function ServicePreview () {
  return (
    <div className="self-stretch bg-[#f5efe7] justify-between items-start flex mx-[-60px]">
      <div className="flex-col justify-start items-start gap-2.5 inline-flex w-1/2">
        <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/819x632"/>
      </div>
      <div className="grow shrink basis-0 self-stretch px-2 justify-start items-center flex w-1/2">
        <div className="w-px self-stretch justify-between items-center flex">
          <div className="w-[178.77px] h-[1px] origin-top-left rotate-90 border-2 border-[#414141]"></div>
        </div>
        <div className="flex flex-col justify-between items-start gap-2 my-auto h-full px-4 pl-8 py-8">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div
              className="text-[#424242] text-lg font-semibold font-playfair leading-[45px]">Water
              Damage Restoration
            </div>
            <div className="leading-2 w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et libero sollicitudin, id congue mi egestas. Morbi venenatis ante eu tempor fringilla. Integer id venenatis justo. Donec egestas scelerisque lectus quis consequat. Nam eleifend est non cursus semper, rutrum ornare sapien volutpat ut.</div>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-center items-center gap-2.5 inline-flex">
              <div
                className="self-stretch px-5 py-4 bg-[#6f1d1b] rounded-[50px] justify-center items-center gap-2.5 inline-flex">
                <div
                  className="min-w-fit text-center text-[#f5efe7] text-sm font-semibold leading-tight tracking-tight text-nowrap">Schedule
                  Appointment
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-0.5 inline-flex">
              <div className="text-[#414141] text-xsm font-bold leading-tight">Read More</div>
              <span className="font-bold"><MdOutlineArrowOutward width={12}/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePreview;