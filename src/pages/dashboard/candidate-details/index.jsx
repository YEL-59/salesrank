import Persondetails from "@/components/dashboard/candidate-details/persondetails";

const CandidateDetails = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 p-3 rounded-lg bg-white">
            <Persondetails />
          </div>
          <div className="col-span-6 p-3 rounded-lg bg-white"></div>
          <div className="col-span-3 p-3 rounded-lg bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
