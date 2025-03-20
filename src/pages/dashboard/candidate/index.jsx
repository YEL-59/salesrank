import Candidatetab from "@/components/dashboard/candidate/candidatetab";
import { Candidatetable } from "@/components/dashboard/candidate/candidatetable";

import Navbar from "@/components/dashboard/candidate/navbar";

const Candidate = () => {
  return (
    <>
      <div className="p-5 bg-white rounded-lg h-screen">
        <Navbar />
        <Candidatetab />
        <Candidatetable />
      </div>
    </>
  );
};

export default Candidate;
