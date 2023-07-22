import React from "react";

interface JOB {
  role: string;
  companyName: string;
  companyLink: string;
  date: string;
  workDone: string[];
  technologies: string[];
}
interface Props {
  job: JOB;
}

const Job: React.FC<Props> = ({
  job: { role, companyName, companyLink, date, workDone, technologies },
}) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="pt-2 flex">
          <span className="text-white text-xl">{role}</span>
          <span className="text-greenTextColor font-black ml-2 text-xl">
            @
            <a
              href={companyLink}
              className="text-greenTextColor font-black ml-2 text-xl hover:text-greenTextColor hover:underline"
            >
              {companyName}
            </a>
          </span>
        </div>
        <div className="block">
          <span className="text-secondColor text-md">{date}</span>
        </div>
        <div className="felx flex-col space-y-2">
          <ul className="block text-lg">
            {workDone?.map((work: string, index: number) => {
              return (
                <span
                  className="text-secondColor mt-2 text-[16px] m-0 hover:text-secondColor hover:font-normal flex space-x-2"
                  key={index}
                >
                  <span className="text-greenTextColor font-bold mr-2">
                    {index}.
                  </span>
                  <p className="text-secondColor hover:text-secondColor hover:font-normal">
                    {work}
                  </p>
                </span>
              );
            })}
          </ul>

          <ul className="w-full flex flex-wrap gap-2 mt-2">
            {technologies?.map((technology: string, index: number) => {
              return (
                <span
                  className="text-greenTextColor hover:text-greenTextColor hover:font-normal cursor-pointer"
                  key={index}
                >
                  {technology}
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Job;
