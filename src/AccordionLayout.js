import React, { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

const AccordionLayout = ({ title, content, index }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    console.log("yes");
    setExpanded((current) => !current);
  };
  return (
    <>
      <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 ">
        <h2 className="mb-0" id={`heading${index}`}>
          <button
            className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            {...(expanded && { [`data-te-collapse-collapsed`]: "" })}
            data-te-target={`collapse${index}`}
            aria-expanded="false"
            aria-controls={`collapse${index}`}
            onClick={toggleExpanded}
          >
            {title}
            <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          className={expanded ? `!visible` : `!visible hidden`}
          data-te-collapse-item
          aria-labelledby={`heading${index}`}
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">{content}</div>
        </div>
      </div>
    </>
  );
};

export default AccordionLayout;
