import Overview from "@/components/dashboard/candidate-details/overview";
import Persondetails from "@/components/dashboard/candidate-details/persondetails";
import Score from "@/components/dashboard/candidate-details/score";

const CandidateDetails = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 p-3 rounded-lg bg-white">
            <Persondetails />
          </div>
          <div className="col-span-6 p-3 rounded-lg bg-white">
            <Overview />
          </div>
          <div className="col-span-3 p-3 ">
            <Score />
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
