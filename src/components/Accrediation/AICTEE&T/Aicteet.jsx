import React from "react";
import "./Aicteet.css";
import Footer from "../../HomePage/Footer/Footer";
import Section from "../../HomePage/Section/Section";
import Navbar from "../../HomePage/navbar/Navbar";
import ScrollToTopButton from "../../ScrollToTopButton";

const approvals = [
  {
    slNo: "01",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 45-46/91-AICTE/586",
        approvalDate: "19.04.1993",
        period: "1992-1994",
        pdfLink: "/assets/docs/AICTE/F-No_45-46_91-AICTE_586.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "02",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 45-46/91-AICTE/9532",
        approvalDate: "28.10.1993",
        period: "1993-1994",
        pdfLink: "/assets/docs/AICTE/F-No_45-46_91-AICTE_9532.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "03",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 2-15/BIII/RC(M)/93",
        approvalDate: "17.04.1994",
        period: "1994-1997",
        pdfLink: "/assets/docs/AICTE/F-No_2-15_BIII_RC(M)_93.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "04",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        approvalNo: "F.No. 732-50-10/RC/94",
        approvalDate: "12.08.1994",
        period: "1994-1995",
        pdfLink: "/assets/docs/AICTE/F-No_732-50-10_RC_94.pdf"
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40",
        approvalNo: "(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "05",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230/RC/94",
        approvalDate: "05.06.1995",
        period: "1995-1997",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230_RC_94.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "06",
    courses: [
      {
        name: "B.E. Computer Science and Engineering",
        intake: "30 to 60",
        approvalNo: "F.No. 730-52-230/RC/94",
        approvalDate: "07.06.1995",
        period: "1996-1997",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230_RC_94_CS.pdf"
      },
    ],
  },
  {
    slNo: "07",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/96",
        approvalDate: "08.04.1996",
        period: "1996-1999",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_96.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "08",
    courses: [
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "40 to 60",
        approvalNo: "F.No. 730-52-230(E)/ET/96",
        approvalDate: "24.05.1996",
        period: "1996-1999",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_96_2.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "09",
    courses: [
      {
        name: "M.E. Engineering Design",
        intake: "18",
        approvalNo: "F.No.441/TND-93/E&T(PG)/92",
        approvalDate: "14.11.1996",
        period: "1996-1997",
        pdfLink: "/assets/docs/AICTE/F-No_441_TND_93_ET_PG_92.pdf"
      },
    ],
  },
  {
    slNo: "10",
    courses: [
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "29.08.1997",
        period: "1997-1999",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97.pdf"
      },
    ],
  },
  {
    slNo: "11",
    courses: [
      {
        name: "B.Tech Information Technology",
        intake: "30",
        approvalNo: "(New Course)",
        approvalDate: "09.06.1998",
        period: "1998-1999",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230_E_ET_97_IT.pdf"
      },
    ],
  },
  {
    slNo: "12",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "29.06.1999",
        period: "1999-2002",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "30 to 60",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30 to 40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        approvalNo: "(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "13",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "18",
        approvalNo: "F.No.441/TND-93/BOS(PG)/92",
        approvalDate: "25.08.1999",
        period: "1999-2000",
        pdfLink: "/assets/docs/AICTE/F-No_441_TND_93_BOS_PG_92.pdf"
      },
    ],
  },
  {
    slNo: "14",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "14.11.2000",
        period: "2000-2001",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "60 to 90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "30 to 40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        approvalNo: "(New Course)",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "15",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "22.06.2001",
        period: "2001-2003",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_2.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "90 to 120",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "16",
    courses: [
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        approvalNo: "F.No. XVII-AIBPG/APP-1602/ET/2001",
        approvalDate: "08.02.2002",
        period: "2002-2003",
        pdfLink: "/assets/docs/AICTE/F-No_XVII-AIBPG_APP_1602_ET_2001.pdf"
      },
    ],
  },
  {
    slNo: "17",
    courses: [
      {
        name: "B.E. Civil Engineering",
        intake: "30 to 60",
        approvalNo: "F.No. 730-52-230(E)/ET/97",
        approvalDate: "19.06.2002",
        period: "2002-2005",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_3.pdf"
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Communication Engineering",
        intake: "90 to 120",
        pdfLink: ""
      },
      {
        name: "B.E. Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.Tech. Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "B.E. Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "18",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "18 to 25",
        approvalNo: "F.No. 441/TND-93/E&T(PG)/92",
        approvalDate: "29.08.2002",
        period: "2002-2003",
        pdfLink: "/assets/docs/AICTE/F-No_441_TND_93_ET_PG_92_CS.pdf"
      },
      {
        name: "M.E. Engineering Design",
        intake: "18 to 25",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "19",
    courses: [
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        approvalNo: "F.No. 07/05/TN/PG/2002/CIVIL-19",
        approvalDate: "27.03.2003",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_07_05_TN_PG_2002_CIVIL_19.pdf"
      },
    ],
  },
  {
    slNo: "20",
    courses: [
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        approvalNo: "F.No.PG/TN/ME/MECH/2003/57",
        approvalDate: "07.07.2003",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_PG_TN_ME_MECH_2003_57.pdf"
      },
    ],
  },
  {
    slNo: "21",
    courses: [
      {
        name: "M.E. Chemical Engineering",
        intake: "18",
        approvalNo: "(New course)",
        approvalNoDetails: "F.No.PG/TN/M.TECH/CHEM/2003/75",
        approvalDate: "07.07.2003",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_PG_TN_MTECH_CHEM_2003_75.pdf"
      },
    ],
  },
  {
    slNo: "22",
    courses: [
      {
        name: "M.E. VLSI Design",
        intake: "18",
        approvalNo: "(New Course)",
        approvalNoDetails: "ECE F.No. Nil",
        approvalDate: "25.08.2003",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_VLSI_Design_2003.pdf"
      },
    ],
  },
  {
    slNo: "23",
    courses: [
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        approvalNo: "F.No. 441/TND-93/E&T(PG)/92",
        approvalDate: "21.08.2003",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_441_TND_93_ET_PG_92_CS.pdf"
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "24",
    courses: [
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        approvalNo: "(New Course)",
        approvalNoDetails: "F.No.PG/TN/M.E/2004/MECH-50/75",
        approvalDate: "22.07.2004",
        period: "2004-2006",
        pdfLink: "/assets/docs/AICTE/F-No_PG_TN_ME_2004_MECH_50_75.pdf"
      },
    ],
  },
  {
    slNo: "25",
    courses: [
      {
        name: "M.Tech Chemical Engineering",
        intake: "---",
        approvalNo: "(Change of Nomenclature M.Tech. Chemical Engineering instead of M.E. Chemical Engineering)",
        approvalNoDetails: "F.No.255-50/PG/TN/2003/186",
        approvalDate: "21.12.2004",
        period: "2003-2005",
        pdfLink: "/assets/docs/AICTE/F-No_255_50_PG_TN_2003_186.pdf"
      },
    ],
  },
  {
    slNo: "26",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "24.06.2005",
        period: "2005-2006",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_Chemical_2005.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "40",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "27",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "40 to 60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "19.09.2005",
        period: "2005-2006",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_Chemical_2005_2.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "40 to 60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        approvalNo: "(New Course)",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "40 to 60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "28",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "24.05.2006",
        period: "2006-2007",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_Chemical_2006.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "29",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "22.05.2007",
        period: "2007-2008",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_Chemical_2007.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.B.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "M.C.A. (Standalone)",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
    slNo: "30",
    courses: [
      {
        name: "B.Tech. Chemical Engineering",
        intake: "60",
        approvalNo: "F.No.730-52-230(E)/ET/97",
        approvalDate: "02.07.2007",
        period: "2007-2008",
        pdfLink: "/assets/docs/AICTE/F-No_730-52-230(E)_ET_97_Chemical_2007_2.pdf"
      },
      {
        name: "B.E. Civil Engineering",
        intake: "60 to 120",
        pdfLink: ""
      },
      {
        name: "Computer Science and Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electrical and Electronics Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Communication Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "Electronics and Instrumentation Engineering",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Food Technology",
        intake: "60",
        pdfLink: ""
      },
      {
        name: "Information Technology",
        intake: "90",
        pdfLink: ""
      },
      {
        name: "M.E. Applied Electronics",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Computer Science and Engineering",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.E. Mechatronics Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. VLSI Design",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. CAD/CAM",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Construction Engineering and Management",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "M.E. Engineering Design",
        intake: "25",
        pdfLink: ""
      },
      {
        name: "M.Tech. Chemical Engineering",
        intake: "18",
        pdfLink: ""
      },
      {
        name: "B.E. Mechanical Engineering",
        intake: "120",
        pdfLink: ""
      },
      {
        name: "B.E. Mechatronics Engineering",
        intake: "60",
        pdfLink: ""
      },
    ],
  },
  {
  slNo: "31",
  courses: [
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      approvalNo: "F.No.730-52-230(E)/ET/97",
      approvalDate: "02.07.2007",
      period: "2008-2011",
      pdfLink: ""
    },
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Computer Science and Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electronics and Communication Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "Electronics and Instrumentation Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "Information Technology",
      intake: "90",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD/CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics Engineering",
      intake: "60",
      pdfLink: ""
    }
  ]
},
{
  slNo: "32",
  courses: [
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "60 to 120",
      approvalNo: "F.No.730-52-230(E)/ET/97",
      approvalDate: "23.05.2008",
      period: "2008-2009",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "90 to 120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics Engineering",
      intake: "60 to 120",
      pdfLink: ""
    }
  ]
},
{
  slNo: "33",
  courses: [
    {
      name: "B.E. Mechatronics Engineering",
      intake: "120",
      approvalNo: "F.No.Southern Region/1-3589631/2010/EOA",
      approvalDate: "23.08.2010",
      period: "2010-2011",
      pdfLink: ""
    },
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18 (New Course)",
      pdfLink: ""
    },
    {
      name: "M.E. CAD/CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18 (New course)",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    }
  ]
},
{
  slNo: "34",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-401662465/2011/EOA",
      approvalDate: "01.09.2011",
      period: "2011-2012",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "120 to 180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18 (New course)",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18 (New Course)",
      pdfLink: ""
    }
  ]
},
{
  slNo: "35",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-709413652/2012/EOA",
      approvalDate: "10.05.2012",
      period: "2012-2013",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180 to 240",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Chemical Engineering",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "36",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-709413652/2012/EOA",
      approvalDate: "10.05.2012",
      period: "2012-2013",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "37",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No.Southern/1-708612993/2012/EOA",
      approvalDate: "10.05.2012",
      period: "2012-2013",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "38",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No. Southern/1-708612993/2012/EOA",
      approvalDate: "10.05.2012",
      period: "2012-2013",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "39",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No. Southern/1-710402771/2014/EOA",
      approvalDate: "25.06.2014",
      period: "2014-2015",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
{
  slNo: "40",
  courses: [
    {
      name: "B.E. Civil Engineering",
      intake: "120",
      approvalNo: "F.No. Southern/1-710402771/2015/EOA",
      approvalDate: "25.06.2015",
      period: "2015-2016",
      pdfLink: ""
    },
    {
      name: "B.E. Mechanical Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Communication Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Computer Science and Engineering",
      intake: "180",
      pdfLink: ""
    },
    {
      name: "B.E. Electrical and Electronics Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Electronics and Instrumentation Engineering",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.E. Mechatronics",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Information Technology",
      intake: "120",
      pdfLink: ""
    },
    {
      name: "B.Tech. Food Technology",
      intake: "60",
      pdfLink: ""
    },
    {
      name: "M.E. Construction Engineering and Management",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.Tech. Chemical Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. CAD CAM",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Computer Science and Engineering",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Applied Electronics",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. VLSI Design",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Control and Instrumentation Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Mechatronics",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Engineering Design",
      intake: "25",
      pdfLink: ""
    },
    {
      name: "M.E. Computer and Communication Engineering",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Communication Systems",
      intake: "18",
      pdfLink: ""
    },
    {
      name: "M.E. Power Electronics and Drives",
      intake: "18",
      pdfLink: ""
    }
  ]
},
    {
      slNo: 41,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-3517175928/2018/EOA/Corrigendum-1",
          approvalDate: "05.06.2018",
          period: "2018-19",
          pdfLink: ""
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. CAD CAM",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Applied Electronics",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Communication Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology (Information and Cyber Warfare)",
          intake: 18,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 42,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-4262186769/2019/EOA",
          approvalDate: "10.04.2019",
          period: "2019-20",
          pdfLink: ""
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. CAD CAM",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Applied Electronics",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 25,
          pdfLink: ""
        },
        {
          name: "M.E. Communication Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology (Information and Cyber Warfare)",
          intake: 18,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 43,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 240,
          approvalNo: "F.No. Southern/1-7009681891/2020/EOA",
          approvalDate: "15.06.2020",
          period: "2020-21",
          pdfLink: ""
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 12,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 18,
          pdfLink: ""
        },
        {
          name: "MBA",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "Master in Computer Application",
          intake: 120,
          pdfLink: ""
        }
      ]
    },
    {
      slNo: 44,
      courses: [
        {
          name: "B.E. Civil Engineering",
          intake: 120,
          approvalNo: "F.No. Southern/1-9320413679/2021/EOA",
          approvalDate: "02.07.2021",
          period: "2021-22",
          pdfLink: ""
        },
        {
          name: "B.E. Mechanical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Communication Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Computer Science and Engineering",
          intake: 240,
          pdfLink: ""
        },
        {
          name: "B.E. Electrical and Electronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Electronics and Instrumentation Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Mechatronics Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Information Technology",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.Tech. Chemical Engineering",
          intake: 120,
          pdfLink: ""
        },
        {
          name: "B.E. Automobile Engineering",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Construction Engineering and Management",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Chemical Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "B.Tech. Food Technology",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "M.E. Computer Science and Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. VLSI Design",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Control and Instrumentation Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Mechatronics Engineering",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Engineering Design",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Information Technology",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Power Electronics and Drives",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.E. Structural Engineering",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "M.E. Embedded Systems",
          intake: 3,
          pdfLink: ""
        },
        {
          name: "M.Tech. Food Technology",
          intake: 6,
          pdfLink: ""
        },
        {
          name: "MBA",
          intake: 60,
          pdfLink: ""
        },
        {
          name: "Master in Computer Application",
          intake: 60,
          pdfLink: ""
        }
      ]
    },
      {
        slNo: "45",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "120",
            approvalNo: "F.No. Southern/1-10969995165/2022/EOA",
            approvalDate: "07.07.2022",
            period: "2022-23",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Chemical Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.Tech. Information Technology",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "M.E. Embedded Systems",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Application",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "46",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-36459492110/2023/EOA",
            approvalDate: "02.06.2023",
            period: "2023-24",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "47",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-43663656124/2024/EOA",
            approvalDate: "22.05.2024",
            period: "2024-25",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "360",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "48",
        courses: [
          {
            name: "Extended Extension of Approval for the Academic Year 2024-27 (All Programmes)",
            intake: "-",
            approvalNo: "F.No. Southern/1-43663656124/2024/EOA",
            approvalDate: "22.05.2024",
            period: "2024-2027",
            pdfLink: ""
          }
        ]
      },
      {
        slNo: "49",
        courses: [
          {
            name: "B.E. Civil Engineering",
            intake: "60",
            approvalNo: "F.No. Southern/1-44643325568/2025/EOA",
            approvalDate: "03.01.2025",
            period: "2025-26",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Machine Learning",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Artificial Intelligence and Data Science",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Chemical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Automobile Engineering",
            intake: "30",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Design",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Computer Science and Engineering",
            intake: "360",
            pdfLink: ""
          },
          {
            name: "B.E. Electrical and Electronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Communication Engineering",
            intake: "240",
            pdfLink: ""
          },
          {
            name: "B.E. Electronics and Instrumentation Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "B.Tech. Food Technology",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.Tech. Information Technology",
            intake: "180",
            pdfLink: ""
          },
          {
            name: "B.E. Mechanical Engineering",
            intake: "60",
            pdfLink: ""
          },
          {
            name: "B.E. Mechatronics Engineering",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "M.E. Computer Science and Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.E. VLSI Design",
            intake: "6",
            pdfLink: ""
          },
          {
            name: "M.E. Structural Engineering",
            intake: "12",
            pdfLink: ""
          },
          {
            name: "M.Tech. Food Technology",
            intake: "18",
            pdfLink: ""
          },
          {
            name: "MBA",
            intake: "120",
            pdfLink: ""
          },
          {
            name: "Maser in Computer Applications",
            intake: "120",
            pdfLink: ""
          }
        ]
      }    
    
];

const Aicteet = () => {
  const handleDownload = (pdfLink) => {
    const link = document.createElement("a");
    link.href = pdfLink;
    link.download = pdfLink.split("/").pop();
    link.click();
  };

  return (
    <>
    <Section />
    <Navbar />
    <div className="aicte-container">
      <h2 className="aicte-title">AICTE Approvals for Engineering and Technology</h2>
      {approvals.map((approval, index) => (
        <div key={index} className="aicte-approval">
          <h3 className="aicte-serial">S.No : {approval.slNo}</h3>
          <table className="aicte-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Intake</th>
                <th>Approval No. & Date</th>
                <th>Date</th>
                <th>Approval Period</th>
              </tr>
            </thead>
            <tbody>
              {approval.courses.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.name}</td>
                  <td>{course.intake}</td>
                  <td>
                    {course.approvalNo ? (
                      <span
                        className="aicte-download-link"
                        onClick={() => handleDownload(course.pdfLink)}
                      >
                        {course.approvalNo}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{course.approvalDate || "-"}</td>
                  <td>{course.period || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    <Footer />
    <ScrollToTopButton />
  </>
  
  );
};

export default Aicteet;
