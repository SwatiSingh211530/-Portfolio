import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="swatisingh90909@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 830 3131 944" Image={FiPhone} />
      <SingleInfo text="Noida, Uttar Pradesh, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
