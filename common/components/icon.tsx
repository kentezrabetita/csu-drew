import {
  MdSchool,
  MdGrade,
  MdOutlineHowToVote,
  MdOutlineAccountBalanceWallet
} from 'react-icons/md';
import { IoBookSharp, IoLibrary } from 'react-icons/io5';
import { SlDocs } from 'react-icons/sl';
import { CgTranscript } from 'react-icons/cg';
import { CgFileDocument } from 'react-icons/cg';
import { BsCalendarPlus, BsCalendarRange, BsHouseDoor } from 'react-icons/bs';
import { RiSurveyLine } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import { SiGooglescholar } from 'react-icons/si';
import {
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineLibrary
} from 'react-icons/hi';
import { GrFacebook } from 'react-icons/gr';

const Icon = ({ name }: { name: String }) => {
  switch (name) {
    case 'MdSchool':
      return <MdSchool />;
    case 'MdGrade':
      return <MdGrade />;
    case 'MdOutlineHowToVote':
      return <MdOutlineHowToVote />;
    case 'MdOutlineAccountBalanceWallet':
      return <MdOutlineAccountBalanceWallet />;
    case 'IoBookSharp':
      return <IoBookSharp />;
    case 'IoLibrary':
      return <IoLibrary />;
    case 'SlDocs':
      return <SlDocs />;
    case 'CgTranscript':
      return <CgTranscript />;
    case 'CgFileDocument':
      return <CgFileDocument />;
    case 'BsCalendarPlus':
      return <BsCalendarPlus />;
    case 'BsCalendarRange':
      return <BsCalendarRange />;
    case 'BsHouseDoor':
      return <BsHouseDoor />;
    case 'RiSurveyLine':
      return <RiSurveyLine />;
    case 'GiReceiveMoney':
      return <GiReceiveMoney />;
    case 'SiGooglescholar':
      return <SiGooglescholar />;
    case 'HiOutlineUserGroup':
      return <HiOutlineUserGroup />;
    case 'HiOutlineBookOpen':
      return <HiOutlineBookOpen />;
    case 'HiOutlineLibrary':
      return <HiOutlineLibrary />;
    case 'GrFacebook':
      return <GrFacebook />;
    default:
      return <MdSchool />;
  }
};

export default Icon;
