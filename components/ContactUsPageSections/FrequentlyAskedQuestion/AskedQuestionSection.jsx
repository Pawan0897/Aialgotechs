import { AiOutlineArrowDown } from "react-icons/ai";

import Link from "next/link";
export default function AskedQuestionSection() {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="question_section">
                {/* *************************** */}
                <div className="asked_question_title pb-4">
                  <h5>know more about recruitments</h5>
                  <h2>frequently asked questions</h2>
                </div>
                {/* ******************** */}
                <div className="question_items">
                  <div className="questions">
                    <ul>
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                      {/* ********* */}
                      <li>
                        <span> <AiOutlineArrowDown /></span> <Link href={""}>What is the role of an HR manager?</Link>
                      </li>
                      {/* ********* */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
