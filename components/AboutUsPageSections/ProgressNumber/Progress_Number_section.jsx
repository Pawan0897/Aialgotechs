
import { CircularProgressbar } from "react-circular-progressbar";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";

import { useEffect, useState } from "react";

export default function Progress_Number_section() {
  // Final percentages
  const AcceptRate = 66;
  const JobSuccessRate = 96;
  const InterviewRate = 85;

  // State for animated percentage
  const [accept, setAccept] = useState(0);
  const [job, setJob] = useState(0);
  const [interview, setInterview] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      let a = 0;
      const acceptTimer = setInterval(() => {
        a += 1;
        setAccept(a);
        if (a >= AcceptRate) clearInterval(acceptTimer);
      }, 20);


      let j = 0;
      const jobTimer = setInterval(() => {
        j += 1;
        setJob(j);
        if (j >= JobSuccessRate) clearInterval(jobTimer);
      }, 20);


      let i = 0;
      const interviewTimer = setInterval(() => {
        i += 1;
        setInterview(i);
        if (i >= InterviewRate) clearInterval(interviewTimer);
      }, 20);

      return () => {
        clearInterval(acceptTimer);
        clearInterval(jobTimer);
        clearInterval(interviewTimer);
      };
    }
  }, [inView]);

  return (
    <section className="px-50 py-20 md-padding">
      <div className="container-fluid" ref={ref}>
        <div className="row">
          {/* **************** Vtitle ************** */}
          <div className="progress_title pb-15">
            <h5>your ideal recruitment agency</h5>
            <h2 className="text-center">our recruitment fulfilment <br></br> numbers are massive</h2>
          </div>
          {/* **************** First Block **************** */}
          <div className="col-lg-4">
            <div className="progress_number_block">
              <div className="progress_number rounded-3xl">
                <h5 className="text-center">Offer Acceptance Rate</h5>
                <CircularProgressbar
                  value={accept}
                  text={`${accept}%`}
                  strokeWidth={5}
                  styles={{
                    path: { stroke: "#2478ff", strokeLinecap: "round" },
                    trail: { stroke: "#ffff" },
                    text: { fontSize: "20px", fill: "#1c1d26" },
                  }}
                />
              </div>
              <div className="progress_detail bg-white rounded-t-3xl">
                <p>
                  We post job listings on multiple platforms including job
                  boards and websites to attract suitable candidates.
                </p>
              </div>
            </div>
          </div>

          {/* **************** Second Block **************** */}
          <div className="col-lg-4">
            <div className="progress_number_block">
              <div className="progress_number rounded-3xl" id="yellow_color">
                <h5 className="text-center">Job Success Rate</h5>
                <CircularProgressbar
                  value={job}
                  text={`${job}%`}
                  strokeWidth={5}
                  styles={{
                    path: { stroke: "#fbdf2d", strokeLinecap: "round" },
                    trail: { stroke: "#ffff" },
                    text: { fontSize: "20px", fill: "#1c1d26" },
                  }}
                />
              </div>
              <div className="progress_detail bg-white rounded-t-3xl">
                <p>
                  The percentage of successfully completed jobs with satisfied
                  clients and employees.
                </p>
              </div>
            </div>
          </div>

          {/* **************** Third Block **************** */}
          <div className="col-lg-4">
            <div className="progress_number_block">
              <div className="progress_number rounded-3xl" id="purple_color">
                <h5 className="text-center">Interview Rate</h5>
                <CircularProgressbar
                  value={interview}
                  text={`${interview}%`}
                  strokeWidth={5}
                  styles={{
                    path: { stroke: "#9b3dff", strokeLinecap: "round" },
                    trail: { stroke: "#ffff" },
                    text: { fontSize: "20px", fill: "#1c1d26" },
                  }}
                />
              </div>
              <div className="progress_detail bg-white rounded-t-3xl">
                <p>
                  Percentage of candidates invited for interviews compared to
                  applications received.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
