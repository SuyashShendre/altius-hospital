import logo from "./logo.svg";
import "./App.css";
import AccordionLayout from "./AccordionLayout";

function App() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://altiushospital.com/wp-content/uploads/2021/01/cropped-Altius-05-300x190.png"
              alt="logo"
              width="150px"
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                About Us
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
            <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                Specialities
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
            <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                Care Services
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
            <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                Value Adds
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
            <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                Locations
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
            <div class="group inline-block relative mr-2">
              <a className="mr-5 hover:text-gray-900 flex items-center">
                Resources
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <ul class="absolute hidden text-gray-700 pt-1 group-hover:block w-[500px]">
              <div class="grid grid-cols-2 divide-x">

  <div><li class="">
                  <a
                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Dr. B. Ramesh
                  </a>
                </li></div>
  <div><li class="">
                  <a
                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Management
                  </a>
                </li></div>
                <div><li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Vision & Mission
                  </a>
                </li></div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    CSR
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Major News
                  </a>
                </li>
                </div>
                <div>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Awards
                  </a>
                </li>
                </div>
               
</div>
              </ul>
            </div>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mr-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Get In Touch
          </button>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Call 8882799799
          </button>
        </div>
      </header>
      <section className="text-gray-600 body-font relative">
        {/* bg-[url('https://images.indianexpress.com/2019/12/mother-baby.jpg')] bg-cover bg-center */}
        <div className="container px-5 pb-24 pt-15 mx-auto flex sm:flex-nowrap flex-wrap items-center ">
          <div class="md:w-2/3 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-grey-900 mb-15">
              Bangalore's Most Trusted Fertility Hospital.
            </h1>
            <p class="leading-relaxed text-base mb-10 text-grey-900">
              Providing World-class Treatments With 1,00,000+ Successful
              Procedures Making Your Dream of Parenthood a Reality.
            </p>
            <h1 class="sm:text-1xl text-2xl font-medium title-font mb-2 text-grey-900">
              Your First Fertility Consultation Will Be FREE
            </h1>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
              Get In Touch
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600"></p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              See How We're Turning Your Hopes Into Your Bundles Of Joy
            </h1>
          </div>
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="px-2 w-1/2">
                <div classNamne="aspect-auto video-wrapper">
                  <div className="flex flex-wrap w-full bg-gray-100 relative video-wrapper">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Bjwt8aroCHM"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div classNamne="aspect-auto video-wrapper">
                  <div className="flex flex-wrap w-full bg-gray-100 relative video-wrapper">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Wkyu4tk0PG0"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div classNamne="aspect-auto video-wrapper">
                  <div className="flex flex-wrap w-full bg-gray-100 relative video-wrapper">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/4jzB_JZ9WKM"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div classNamne="aspect-auto video-wrapper">
                  <div className="flex flex-wrap w-full bg-gray-100 relative video-wrapper">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/srN4ONny2AE"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Our World-Class Specialties
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/3.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">In Vitro Fertilisation (IVF)</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/4.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">
                  Intracytoplasmic Sperm Injection (ICSI)
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/5.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Egg Donation</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/6.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">
                  Intrauterine Insemination (IUI)
                </p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/11.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Semen Banking</p>
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/7.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Blastocyst Transfer</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/8.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Frozen Embryo Transfer (FET)</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/9.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Surrogacy</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/10.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Laser-Assisted Hatching (LAH)</p>
                <br />
              </div>
            </div>
            <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg max-h-[160px]">
                <img
                  src="https://altiushospital.com/wp-content/uploads/2022/03/12.svg"
                  alt="one"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                />
                <p className="leading-relaxed">Semen Donation</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 pt-15 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Infertility Is Healable. Don’t Lose Hope
              </h1>
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div className="w-70">
                <div class="flex text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <div class="h-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="80"
                        viewBox="0 0 900 899.99999"
                        height="150"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 651.640625 354.367188 C 663.535156 365.183594 664.714844 388.445312 654.523438 402.957031 C 646.34375 414.625 634.78125 421.429688 620.921875 423.839844 C 605.347656 426.550781 588.851562 415.59375 582.582031 399.121094 C 576.886719 384.175781 581.957031 367.734375 595.136719 359.246094 C 602.273438 354.644531 610.019531 352.699219 618.023438 356.851562 C 625.351562 360.652344 630.265625 366.519531 630.804688 375.148438 C 630.941406 377.628906 631.621094 381.015625 628.527344 381.933594 C 625.558594 382.820312 625.109375 379.453125 624.015625 377.542969 C 620.195312 370.945312 615.125 366.589844 606.890625 368.152344 C 599.789062 369.503906 594.773438 376.050781 593.902344 384.78125 C 592.082031 403.132812 610.277344 416.828125 628.5625 410.855469 C 648.671875 404.292969 658.8125 384.453125 653.5 361.746094 C 652.925781 359.316406 653.03125 356.710938 651.640625 354.367188 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 539.917969 512.96875 C 539.96875 512.34375 539.882812 511.003906 540.179688 509.773438 C 540.613281 508.070312 540.925781 505.851562 543.128906 505.78125 C 544.882812 505.746094 545.214844 507.828125 545.875 509.113281 C 551.96875 521.058594 560.0625 530.707031 573.742188 534.214844 C 577.269531 535.117188 576.851562 537.078125 574.628906 539.09375 C 569.820312 543.484375 564.296875 543.382812 558.671875 541.160156 C 548.773438 537.203125 540.109375 524.355469 539.917969 512.96875 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 502.394531 472.519531 C 491.175781 472.433594 476.816406 460.972656 474.4375 449.984375 C 473.601562 446.167969 473.515625 442.277344 475.617188 438.667969 C 476.832031 436.582031 478.328125 434.152344 480.601562 434.1875 C 483.691406 434.222656 482.929688 437.574219 483.429688 439.570312 C 486.503906 451.6875 494.632812 459.65625 504.683594 466.183594 C 506.25 467.207031 508.921875 467.449219 508.628906 470.226562 C 508.488281 471.441406 505.242188 472.554688 502.394531 472.519531 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 500.882812 530.707031 C 491.347656 535.65625 483.65625 534.214844 477.980469 527.410156 C 472.785156 521.214844 473.132812 515.121094 479.542969 507.535156 C 483.292969 517.949219 489.769531 525.796875 500.882812 530.707031 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 288.550781 453.910156 C 291.050781 454.222656 292.753906 454.359375 294.4375 454.671875 C 308.3125 457.347656 310.757812 460.367188 310.742188 474.636719 C 310.726562 479.585938 310.601562 484.550781 310.882812 489.496094 C 311.296875 496.890625 314.5625 501.890625 322.757812 502.101562 C 327.707031 502.222656 332.671875 502.636719 337.585938 502.324219 C 355.054688 501.179688 371.394531 493.957031 388.847656 492.550781 C 394.125 492.117188 391.644531 488.871094 390.929688 486.40625 C 385.964844 469.03125 386.171875 451.84375 393.933594 435.351562 C 396.332031 430.246094 395.792969 426.808594 392.960938 422.054688 C 385.878906 410.128906 382.910156 397.386719 390.6875 384.398438 C 397.164062 373.566406 410.207031 368.96875 419.410156 375.460938 C 425.832031 380.007812 426.925781 376.882812 429.410156 372.058594 C 445.734375 340.234375 468.550781 315.117188 502.808594 302.042969 C 520.15625 295.414062 538.199219 293.484375 556.570312 294.824219 C 563.289062 295.308594 566.539062 294.546875 564.957031 286.507812 C 563.308594 278.035156 563.066406 269.285156 562.144531 260.015625 C 568.953125 262.34375 574.699219 264.808594 581.003906 265.085938 C 598.644531 265.847656 612.535156 258.59375 622.449219 244.445312 C 639.625 219.96875 645.179688 192.207031 643.011719 162.851562 C 641.203125 138.773438 633.183594 116.972656 615.191406 100.113281 C 592.203125 78.535156 564.644531 83.777344 550.25 111.851562 C 546.273438 119.609375 544.363281 128.082031 541.8125 137.402344 C 528.976562 115.566406 510.589844 102.109375 488.277344 93.726562 C 455.386719 81.367188 421.511719 81.121094 387.355469 86.523438 C 326.441406 96.140625 278.894531 124.523438 253.875 183.492188 C 239.289062 217.882812 236.664062 251.875 258.960938 284.632812 C 264.535156 292.828125 269.03125 301.730469 270.125 311.800781 C 270.578125 315.828125 273.042969 316.28125 276.082031 316.296875 C 287.648438 316.367188 298.933594 315.1875 309.25 309.214844 C 310.515625 308.484375 311.765625 306.226562 313.78125 308.3125 C 305.566406 323.015625 291.726562 328.34375 276.273438 330.445312 C 270.542969 331.226562 267.972656 333.917969 265.976562 339.125 C 262.644531 347.839844 258.527344 356.277344 254.378906 364.660156 C 243.59375 386.429688 244.878906 383.183594 263.632812 393.359375 C 274.570312 399.292969 276.34375 403.339844 271.117188 414.691406 C 269.121094 419.03125 270.4375 420.613281 273.878906 422.523438 C 282.300781 427.191406 291.3125 428.980469 301.105469 427.589844 C 300.238281 438.269531 294.351562 445.628906 288.550781 453.910156 Z M 439.117188 648.253906 C 461.863281 648.304688 483.292969 644.660156 502.601562 632.421875 C 513.175781 625.71875 522.640625 617.714844 531.667969 606.15625 C 520.054688 606.207031 510.085938 605.824219 500.292969 603.742188 C 489.542969 601.449219 479.109375 598.222656 469.4375 593.082031 C 465.511719 590.984375 462.265625 591.277344 458.445312 592.511719 C 449.832031 595.289062 441.167969 597.855469 430.382812 601.15625 C 437.78125 592.648438 445.976562 589.074219 453.027344 583.5 C 428.386719 565.601562 413.246094 541.578125 405.273438 512.464844 C 409.199219 512.324219 409.492188 515.589844 410.761719 517.53125 C 424.738281 539.09375 440.4375 559.214844 461.5 574.335938 C 487.164062 592.789062 514.929688 600.964844 546.011719 589.160156 C 555.667969 585.496094 564.160156 579.925781 570.582031 571.746094 C 573.378906 568.1875 577.304688 567.0625 580.949219 565.1875 C 623.667969 543.105469 654.628906 510.710938 666.433594 463.179688 C 686.316406 383.0625 620.800781 306.507812 538.425781 313.847656 C 495.136719 317.703125 462.542969 340.425781 439.167969 376.640625 C 436.789062 380.320312 435.054688 384.46875 433.40625 388.550781 C 431.875 392.351562 430.871094 396.359375 429.566406 400.527344 C 428.804688 399.761719 428.421875 399.417969 428.089844 399.035156 C 420.816406 390.109375 414.285156 387.4375 407.617188 390.667969 C 400.757812 393.964844 397.582031 403.320312 400.152344 413.320312 C 401.730469 419.519531 405.203125 424.710938 409.492188 429.34375 C 411.160156 431.132812 412.742188 432.46875 410.050781 435.003906 C 394.734375 449.464844 393.570312 467.847656 396.15625 487.082031 C 397.652344 498.160156 397.808594 498.019531 386.902344 500.726562 C 343.769531 511.40625 304.371094 529.390625 272.035156 560.65625 C 251.425781 580.601562 238.4375 604.226562 238.871094 633.84375 C 239.511719 678.023438 269.8125 713.195312 313.328125 720.175781 C 318.382812 720.992188 322.652344 720.433594 327.152344 717.152344 C 337.535156 709.550781 348.734375 703.507812 364.050781 706.425781 C 349.96875 714.621094 338.039062 723.421875 327.167969 733.644531 C 314.789062 745.292969 305.757812 758.46875 306 776.332031 C 306.089844 782.394531 307.425781 788.121094 313.46875 790.621094 C 319.40625 793.085938 323.972656 789.386719 327.949219 785.414062 C 329.773438 783.589844 332.082031 781.613281 332.691406 779.300781 C 335.347656 769.199219 343.804688 767.0625 351.929688 763.695312 C 375.355469 753.957031 397.597656 742.378906 414.824219 722.796875 C 438.527344 695.886719 423.921875 661.8125 398.03125 649.988281 C 378.898438 641.257812 359.085938 642.316406 339.011719 645.855469 C 330.363281 647.382812 322.253906 651.378906 311.195312 651.777344 C 332.933594 635.214844 355.75 629.085938 381.796875 630.164062 C 378.914062 623.082031 377.144531 616.242188 377.648438 609.035156 C 378.132812 602.007812 379.382812 595.199219 383.8125 587.40625 C 384.609375 595.132812 384.75 601.277344 385.949219 607.179688 C 388.707031 620.703125 394.75 631.429688 408.332031 637.871094 C 447.453125 656.429688 455.734375 699.445312 426.996094 732.03125 C 406.75 755 380.390625 768.296875 352.140625 778.332031 C 347.328125 780.050781 344.585938 782.359375 342.710938 787.304688 C 337.917969 799.945312 326.472656 806.539062 314.476562 804.613281 C 302.546875 802.722656 293.066406 791.855469 292.164062 778.832031 C 291.085938 763.3125 296.398438 749.722656 305.183594 737.273438 C 306.523438 735.363281 307.964844 733.542969 309.335938 731.667969 C 309.421875 731.546875 309.25 731.214844 309.058594 730.332031 C 300.808594 729.757812 292.457031 728.4375 284.398438 725.523438 C 231.058594 706.199219 205.894531 640.421875 231.996094 588.082031 C 246.371094 559.214844 270.074219 539.667969 297.128906 523.558594 C 300.671875 521.457031 304.335938 519.546875 308.710938 517.117188 C 291.589844 507.011719 294.644531 491.109375 296.085938 476.078125 C 296.625 470.539062 296.902344 467.554688 290.113281 468.941406 C 288.152344 469.324219 285.964844 468.769531 283.898438 468.457031 C 271.550781 466.597656 267.246094 456.042969 274.832031 446.027344 C 276.949219 443.214844 279.589844 440.785156 282.664062 437.453125 C 273.84375 437.347656 266.304688 435.820312 259.34375 432.242188 C 251.113281 428.007812 249.964844 423.71875 254.863281 415.925781 C 255.835938 414.378906 256.894531 412.871094 258.109375 411.535156 C 262.589844 406.585938 262.015625 404.554688 254.898438 404.015625 C 247.621094 403.460938 240.660156 400.960938 234.53125 396.726562 C 226.019531 390.839844 224.40625 384.332031 229.320312 375.285156 C 235.035156 364.765625 240.9375 354.367188 246.597656 343.828125 C 248.039062 341.140625 249.933594 338.550781 249.964844 334.4375 C 242.117188 333.898438 234.042969 333.675781 226.890625 328.117188 C 231.195312 325.636719 235.78125 326.714844 239.808594 325.496094 C 258.492188 319.839844 258.179688 315.914062 249.722656 301.730469 C 242.535156 289.648438 234.875 277.949219 230.621094 264.355469 C 219.839844 229.878906 225.1875 196.828125 239.894531 164.9375 C 261.757812 117.527344 300.914062 89.90625 349.082031 74.648438 C 393.101562 60.707031 438.265625 56.246094 483.988281 66.347656 C 504.527344 70.898438 522.414062 80.53125 537.210938 96.191406 C 545.003906 82.492188 555.234375 71.90625 570.566406 68.050781 C 594.042969 62.164062 613.734375 70.289062 630.472656 86.332031 C 649.765625 104.820312 658.898438 128.652344 662.234375 154.382812 C 666.453125 186.878906 661.539062 218.335938 645.371094 247.308594 C 633.042969 269.441406 615.089844 283.503906 588.589844 283.816406 C 585.238281 283.851562 583.449219 284.910156 584.164062 288.226562 C 585.046875 292.339844 580.046875 298.136719 588.050781 300.34375 C 604.53125 304.890625 619.515625 312.632812 633.078125 322.996094 C 687.601562 364.679688 704.097656 433.632812 674.441406 495.574219 C 672.980469 498.59375 670.863281 500.867188 675.847656 503.472656 C 717.175781 524.996094 729.207031 555.722656 719.777344 605.285156 C 712.070312 645.769531 689.007812 678.007812 659.835938 705.59375 C 588.015625 773.523438 503.054688 816.589844 405.742188 833.953125 C 351.738281 843.605469 298.777344 838.707031 248.734375 814.214844 C 214.300781 797.355469 187.765625 773.140625 178.617188 734.324219 C 171.097656 702.414062 177.261719 671.792969 189.730469 642.105469 C 194.332031 631.1875 199.539062 620.597656 207.492188 609.558594 C 207.457031 615.71875 204.90625 619.15625 203.378906 622.890625 C 194.367188 644.917969 187.054688 667.417969 185.890625 691.355469 C 183.546875 739.21875 208.015625 771.679688 247.066406 795.167969 C 279.953125 814.960938 316.507812 820.722656 353.894531 818.277344 C 467.402344 810.84375 564.089844 764.546875 645.945312 686.859375 C 672.597656 661.566406 693.160156 631.363281 702.742188 594.957031 C 712.085938 559.457031 700.746094 531.628906 670.515625 515.328125 C 666.902344 513.382812 664.890625 512.722656 661.972656 517.03125 C 642.59375 545.691406 617.101562 567.355469 586.074219 582.769531 C 580.167969 585.6875 575.964844 592.527344 569.957031 594.679688 C 555.667969 599.800781 547.261719 609.835938 538.546875 621.761719 C 518.523438 649.085938 479.246094 660.820312 447.453125 651.464844 C 444.605469 650.632812 441.894531 649.328125 439.117188 648.253906 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 449.242188 312.789062 C 441.167969 294.769531 431.632812 279.738281 417.289062 268.140625 C 404.230469 257.585938 389.332031 252.636719 372.578125 252.429688 C 353.113281 252.1875 333.351562 254.964844 314.285156 249.234375 C 288.933594 241.613281 267.246094 229.253906 258.699219 201.792969 C 257.695312 198.5625 256.929688 195.246094 256.410156 191.929688 C 256.0625 189.640625 256.355469 187.261719 256.355469 183.859375 C 259.707031 189.777344 261.566406 195.542969 265.335938 200.246094 C 283.566406 222.953125 307.964844 232.65625 336.320312 233.785156 C 353.738281 234.480469 371.292969 233.367188 388.5 236.859375 C 418.175781 242.863281 445.542969 271.820312 450.003906 301.628906 C 450.492188 304.855469 450.683594 308.121094 449.242188 312.789062 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center ml-8">
                    <h2 class="font-medium title-font text-gray-900 text-lg">
                      10,000+
                    </h2>
                    <p>Happy Mothers & Newborn</p>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
                <div class="flex text-center sm:pr-8 sm:py-8">
                  <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="70"
                      viewBox="0 0 900 899.99999"
                      height="1200"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        <clipPath id="id1">
                          <path
                            d="M 99.113281 489 L 800.957031 489 L 800.957031 840.640625 L 99.113281 840.640625 Z M 99.113281 489 "
                            clip-rule="nonzero"
                          ></path>
                        </clipPath>
                        <clipPath id="id2">
                          <path
                            d="M 256 59.140625 L 644 59.140625 L 644 520 L 256 520 Z M 256 59.140625 "
                            clip-rule="nonzero"
                          ></path>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#id1)">
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 510.785156 711.457031 C 510.785156 708.472656 513.558594 706.042969 516.890625 706.042969 L 549.847656 706.042969 L 549.847656 673.019531 C 549.847656 669.6875 552.277344 666.980469 555.332031 666.980469 L 587.871094 666.980469 C 590.855469 666.980469 593.285156 669.6875 593.285156 673.019531 L 593.285156 706.042969 L 626.3125 706.042969 C 629.644531 706.042969 632.347656 708.472656 632.347656 711.457031 L 632.347656 744.0625 C 632.347656 747.046875 629.644531 749.476562 626.3125 749.476562 L 593.285156 749.476562 L 593.285156 782.5 C 593.285156 785.832031 590.855469 788.535156 587.871094 788.535156 L 555.332031 788.535156 C 552.277344 788.535156 549.847656 785.832031 549.847656 782.5 L 549.847656 749.476562 L 516.890625 749.476562 C 513.558594 749.476562 510.785156 747.046875 510.785156 744.0625 Z M 293.742188 840.640625 C 305.816406 840.640625 318.167969 840.570312 330.726562 840.570312 L 569.277344 840.570312 C 581.835938 840.570312 594.1875 840.640625 606.191406 840.640625 C 716.585938 840.640625 800.957031 835.023438 800.957031 719.640625 C 800.957031 628.40625 748.15625 549.523438 671.484375 511.777344 C 678.976562 528.914062 683.277344 549.9375 684.25 574.222656 C 709.296875 579.980469 728.101562 602.390625 728.101562 629.171875 C 728.101562 660.320312 702.777344 685.644531 671.621094 685.644531 C 640.535156 685.644531 615.210938 660.320312 615.210938 629.171875 C 615.210938 602.667969 633.597656 580.464844 658.230469 574.429688 C 657.121094 550.285156 651.359375 513.652344 627.769531 495.542969 C 615.695312 492.421875 603.34375 490.132812 590.648438 489.023438 C 589.675781 531.207031 450.070312 635.484375 450.070312 635.484375 C 450.070312 635.484375 310.394531 531.273438 309.425781 489.023438 C 295.269531 490.269531 281.601562 492.835938 268.277344 496.585938 C 251.070312 510.253906 242.1875 535.574219 241.703125 572.554688 C 246.769531 575.46875 250.863281 579.980469 253.359375 585.460938 C 271.957031 594.273438 288.332031 612.65625 300.890625 638.882812 C 302.972656 643.324219 303.25 648.25 301.722656 652.828125 C 309.214844 672.1875 313.519531 693.347656 313.519531 711.109375 C 313.519531 736.015625 313.519531 759.535156 286.386719 765.570312 C 283.472656 768.070312 279.796875 769.386719 275.910156 769.386719 L 257.800781 769.386719 C 248.640625 769.386719 241.285156 761.964844 241.285156 752.875 L 241.355469 751.695312 C 241.980469 743.160156 249.195312 736.433594 257.800781 736.433594 L 275.910156 736.433594 C 277.785156 736.433594 279.589844 736.710938 281.324219 737.335938 C 282.433594 736.988281 282.78125 736.710938 282.78125 736.710938 C 284.792969 733.171875 284.792969 718.253906 284.792969 711.109375 C 284.792969 696.675781 281.183594 679.261719 274.871094 663.027344 C 271.539062 661.222656 268.902344 658.378906 267.308594 654.910156 C 256.273438 631.945312 241.355469 617.027344 229.214844 617.027344 C 216.722656 617.027344 201.042969 633.125 190.148438 657.0625 C 188.34375 660.945312 185.222656 664.136719 181.335938 666.011719 C 175.578125 681.484375 172.457031 697.441406 172.457031 711.109375 C 172.457031 717.074219 172.457031 733.101562 174.746094 736.847656 C 174.816406 736.847656 175.300781 737.125 176.757812 737.472656 C 178.632812 736.710938 180.644531 736.363281 182.65625 736.363281 L 200.835938 736.363281 C 209.230469 736.363281 216.238281 742.746094 217.210938 750.933594 L 217.28125 751.140625 L 217.347656 752.25 C 217.347656 761.964844 209.925781 769.386719 200.835938 769.386719 L 182.65625 769.386719 C 179.046875 769.386719 175.578125 768.140625 172.734375 765.988281 C 162.324219 764.046875 155.039062 759.464844 150.390625 752.042969 C 144.769531 742.953125 143.730469 731.160156 143.730469 711.109375 C 143.730469 693.554688 147.824219 673.226562 155.179688 653.871094 C 154.136719 649.777344 154.484375 645.472656 156.289062 641.519531 C 163.992188 624.730469 173.773438 610.296875 184.527344 599.890625 C 190.496094 594.203125 196.878906 589.554688 203.539062 586.222656 C 206.039062 580.394531 210.410156 575.609375 215.683594 572.554688 C 215.960938 549.382812 219.570312 529.402344 226.089844 512.957031 C 150.738281 551.1875 99.113281 629.308594 99.113281 719.640625 C 99.113281 835.023438 183.417969 840.640625 293.742188 840.640625 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                      <g clip-path="url(#id2)">
                        <path
                          fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                          d="M 256.96875 252.226562 C 256.96875 358.933594 343.425781 519.273438 450.070312 519.273438 C 556.789062 519.273438 643.242188 358.933594 643.242188 252.226562 C 643.242188 145.589844 556.789062 59.140625 450.070312 59.140625 C 343.425781 59.140625 256.96875 145.589844 256.96875 252.226562 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                      <path
                        fill="rgb(90.979004%, 36.859131%, 3.529358%)"
                        d="M 671.621094 603.152344 C 686.054688 603.152344 697.710938 614.808594 697.710938 629.171875 C 697.710938 643.601562 686.054688 655.1875 671.621094 655.1875 C 657.257812 655.1875 645.601562 643.601562 645.601562 629.171875 C 645.601562 614.808594 657.257812 603.152344 671.621094 603.152344 "
                        fill-opacity="1"
                        fill-rule="nonzero"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex flex-col items-center text-center justify-center ml-3">
                    <h2 class="font-medium title-font text-gray-900 text-lg">
                      18+
                    </h2>
                    <p>Years Serving Mothers & Their Babies</p>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  </div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {/* <div class="rounded-lg h-64 overflow-hidden"> */}
                {/* <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                /> */}
                {/* </div> */}

                <div
                  classNamne="aspect-video video-wrapper2"
                  style={{ marginTop: "-20px" }}
                >
                  <div
                    className="flex flex-wrap w-full bg-gray-100 relative video-wrapper"
                    style={{ height: "300px" }}
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/g48hS4LGtSY"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                IVF Treatment At An Affordable Cost
              </h1>
              <p>
                Infertility is a painful and difficult journey. It’s even more
                challenging when you are not sure what to do or where your next
                step should be, which can make the whole process seem
                overwhelming in general; but at Altius. we’ve got everything
                under control. Altius is a world-class Fertility center that has
                brought in the most advanced technology to ensure
                cost-effectiveness.
              </p>
              <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Book Your First Consultation
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5 ml-2"
                  viewBox="0 0 24 10"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">
            What is IVF?
          </h1>
          <div className="flex flex-col w-full">
            <p className="mb-3">
              <strong>
                Infertility is failure to achieve pregnancy after 12 months of
                unprotected intercourse. Complete evaluation and Infertility
                Surgery Treatment in Bangalore for both partners is available at
                our Hospital. We have been successful in treating many infertile
                couples through ovulation induction, intrauterine insemination &
                IVF/ICSI (test tube baby). Our center has a good success rate of
                50-60% with IVF Centre in Bangalore couples at affordable costs.
              </strong>
            </p>
            <p>
              <strong>
                1) Ovulation induction, follicular studies followed by either
                timed intercourse or Intrauterine Insemination (IUI- with
                husband’s or donor sperms).
              </strong>
            </p>
            <p>
              <strong>
                2) IVF (Test tube baby). We offer the highest IVF Treatment
                Centre in Bangalore success rates (50-60%) at affordable costs.
              </strong>
            </p>
            {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"> */}
            <div className="p-4 md:w-1/3 flex">
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  It Is Offered To Females :
                </h2>
                <ul class="list-disc">
                  <li>Tubal factor infertility.</li>
                  <li>Severe endometriosis.</li>
                  <li>Failed multiple cycles of OI, IUI.</li>
                  <li>Unexplained infertility, etc.</li>
                  <li>Male factor infertility- very low counts, motility.</li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 pb-24 pt-15 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://altiushospital.com/wp-content/uploads/2022/03/Untitled-design-14-1024x1024.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-5 leading-relaxed">
              <strong>In Vitro Fertilisation (IVF) </strong> literally means
              ‘fertilisation in glass’ giving us the familiar term ‘test tube
              baby’. During the IVF process, eggs are removed from the ovaries
              and fertilised with sperm in the laboratory. The fertilised egg
              (embryo) is later placed in the woman’s womb.
            </p>
            <p className="mb-5 leading-relaxed">
              Women has to receive daily injections either starting from day 18
              of the previous cycle or on day 2 of the cycle depending on the
              type of protocol planned. The dosage and the number of injections
              will vary from person to person depending upon their response.
              Once the eggs are matured, the egg pick up will be planned(under
              GA). After the pickup, the embryos are transferred after 3 -5
              days. The result of IVF cycle will be confirmed after 2 weeks from
              the day of embryo transfer
            </p>
            <p className="mb-5 leading-relaxed">
              Altius understands that this is a very distressing phase for a
              couple and they need a reliable expert to turn to. Our specialized
              fertility experts are highly experienced, and their technology and
              strict processes ensure that our success rates are amongst the
              highest in the country.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 text-center mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-8">
            Is IVF for me?
          </h1>
          <div className="flex flex-col w-full">
            <p className="">
              <strong>
                A clinic may recommend IVF as your best treatment option if:
              </strong>
            </p>
            {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"> */}
            <div className="p-4 md:w-3/3 flex">
              <div className="flex-grow pl-6">
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  It Is Offered To Females :
                </h2> */}
                <ul class="items-center">
                  <li>
                    &#x2022; You have been diagnosed with unexplained
                    infertility.
                  </li>
                  <li>
                    &#x2022; You have been unsuccessful with other techniques
                    like using fertility drugs or intrauterine insemination
                    (IUI).
                  </li>
                  <li>&#x2022; Your fallopian tubes are blocked.</li>
                  <li>
                    &#x2022; There is a minor degree of male subfertility – more
                    severe problems are treated with intra-cytoplasmic sperm
                    injection (ICSI).
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex flex-col  md:mb-0 mb-6 pr-0 w-full md:w-full md:text-left text-center">
            <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
              How does IVF work For Women?
            </h1>
            <p className="mt-5">
              <strong>
                IVF techniques can differ from clinic to clinic, often depending
                on your individual circumstances. A typical treatment may
                involve:
              </strong>
            </p>
            <div className="mt-3 w-full">
              <section className="mx-auto text-center">
                <AccordionLayout
                  title="Step 1"
                  content="As a first step you may be given a drug to suppress your natural cycle. Treatment is given as a daily injection. This continues for about two weeks."
                  index={1}
                />
                <AccordionLayout
                  title="Step 2"
                  content="After the natural cycle is suppressed you are given a fertility hormone called FSH (or Follicle Stimulating Hormone). This is usually taken as a daily injection for around 12 days. This hormone will increase the number of eggs you produce – meaning that more eggs can be fertilised. With more fertilised eggs, the clinic has a greater choice of embryos to use in your treatment."
                  index={2}
                />
                <AccordionLayout
                  title="Step 3"
                  content="Throughout the drug treatment, the clinic will monitor your progress. This is done by vaginal ultrasound scans and, possibly, blood tests. 34–38 hours before your eggs are due to be collected you have a hormone injection to help your eggs mature treatment."
                  index={3}
                />
                <AccordionLayout
                  title="Step 4"
                  content="Eggs are usually collected by ultrasound guidance under sedation. This involves a needle being inserted into the scanning probe and into each ovary. The eggs are, in turn, collected through the needle. Cramping and a small amount of vaginal bleeding can occur after the procedure."
                  index={4}
                />
                <AccordionLayout
                  title="Step 5"
                  content="Your eggs are mixed with your partner’s or the donor’s sperm and cultured in the laboratory for 16–20 hours. They are then checked to see if any have fertilised. Those that have been fertilised (now called embryos) are grown in the laboratory incubator for another one to two days before being checked again. The best one or two embryos will then be chosen for transfer. After egg collection, you are given medication to help prepare the lining of the womb for embryo transfer. This is given as pessaries, injection or gel."
                  index={5}
                />
                <AccordionLayout
                  title="Step 6"
                  content="For women under the age of 40, one or two embryos can be transferred. If you are 40, or over, a maximum of three can be used. The number of embryos is restricted because of the risks associated with multiple births. Remaining embryos may be frozen for future IVF attempts, if they are suitable."
                  index={6}
                />
                <AccordionLayout
                  title="Step 7"
                  content="Some clinics may also offer blastocyst transfer, where the fertilised eggs are left to mature for five to six days and then transferred."
                  index={7}
                />
                <AccordionLayout
                  title="Step 8"
                  content="Around the time your partner’s eggs are collected, you are asked to produce a fresh sample of sperm. This is stored for a short time before the sperm are washed and spun at a high speed. This is so the healthiest and most active sperm can be selected"
                  index={8}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 pt-15 text-center mx-auto">
          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-3 mt-5">
              Embryo Donation :
            </h1>
            <p className="">
              <strong>
                Indicated in : There may be fertility problems such has neither
                of the partners would not be able to produce healthy gametes. In
                this case, the best option would be suggested for Embryo
                Donation.
              </strong>
            </p>
            <p>Other Indications :</p>
            {/* <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"> */}
            <div className="p-4 md:w-3/3 flex">
              <div className="flex-grow pl-6">
                {/* <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  It Is Offered To Females :
                </h2> */}
                <ul class="items-center">
                  <li>
                    &#x2022; For menopausal or perimenopausal women with a
                    sub-fertile partner.
                  </li>
                  <li>&#x2022; Recurrent IVF failures.</li>
                  <li>
                    &#x2022; Patients who are carriers of genetic disease or
                    chromosomal abnormalities
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-3 mt-5">
              Embryo Freezing (cryopreservation) :
            </h1>
            <p className="">
              <strong>
                Extra embryos if present in excess and of good quality are
                preserved so that they can be used later if the first cycle
                fails.
              </strong>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-3 mt-5">
              Sperm Freezing :
            </h1>
            <p className="">
              <strong>
                Sperm freezing is an option for those males who might not be
                present on the day of ovum pick up or intrauterine insemination.
                It also helps those who fail to produce their sample on the
                particular day due to stress.
              </strong>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-3 mt-5">
              Laser Assisted Hatching :
            </h1>
            <p className="">
              <strong>
                The procedure is based on the fact that an alteration in zona
                pellucida (outer covering of egg) either by drilling a hole
                through it or by thinning it, will promote hatching or
                implantation of embryos that are otherwise unable to escape
                intact from the zona pellucida.
              </strong>
            </p>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-3 mt-5">
              Sperm Retrieval Procedures :
            </h1>
            <p className="">
              <strong>
                The testicular / epididymal sperm retrieval techniques are:
              </strong>
            </p>

            <div className="p-4 md:w-3/3 flex">
              <div className="flex-grow pl-6">
                <ul class="items-center">
                  <li>
                    &#x2022; PESA – Percutaneous Epididymal Sperm Aspiration.
                  </li>
                  <li>
                    &#x2022; MESA – Microsurgical Epididymal Sperm Aspiration.
                  </li>
                  <li>&#x2022; TESA – Testicular Sperm Aspiration.</li>
                  <li>&#x2022; TESE – Testicular Sperm Extraction.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mt-5 mb-3">
              Semen Banking :
            </h1>
            <p className="">
              <strong>
                These facilities are available in Altius Hospital. The bank
                contains frozen sperm from voluntary donors with various
                backgrounds and physical characteristics to match with the
                individual needs. Donors are screened thoroughly to rule out
                transmission of any infectious or genetic diseases.
              </strong>
            </p>

            <p>Other treatment modalities for infertile patients</p>

            <div className="p-4 md:w-3/3 flex">
              <div className="flex-grow pl-6">
                <ul class="items-center">
                  <li>&#x2022; Laparoscopic tubal recanalization.</li>
                  <li>
                    &#x2022; Laparoscopic varicocele ligation in male patients.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mt-3">
              Our Achievements
            </h1>

            <div className="p-4 md:w-3/3 flex">
              <div className="flex-grow pl-6">
                <ul class="items-center">
                  <li>&#x2022; First IVF/ICSI Baby.</li>
                  <li>&#x2022; Success rates of 50-60%.</li>
                  <li>&#x2022; Successfully delivered babies through IVF.</li>
                  <li>
                    &#x2022; Successfully delivered babies by ovum donation and
                    embryo donation.
                  </li>
                  <li>
                    &#x2022; Successfully delivered babies through surrogacy.
                  </li>
                  <li>
                    &#x2022; Important contribution to overall pregnancy rates
                    by embryo freezing.
                  </li>
                  <li>&#x2022; High success rates with IUI treatment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 pt-15 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Our Specialized Team Of IVF Experts
            </h1>
            <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
              View All Doctors
            </button>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 pt-15 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            See Why Our Patients Love Us
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span class="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-15 mx-auto">
          <div class="flex flex-wrap">
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Rajajinagar
              </h2>
              <p class="leading-relaxed text-base mb-4">
                # 6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI
                Polytechnic, Near Ram Mandir, Bengaluru - 560 010
              </p>
              <div class="lg:w-1/2 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
                <button class=" mt-2 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Get Directions 
          </button>
              </div>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Rajarajeswari Nagar
              </h2>
              <p class="leading-relaxed text-base mb-4">
                # 915, First Floor Danush Palza, Ideal Homes Township,
                Rajarajeshwarinagar, Bengaluru - 560098
                
              </p>
              <div class="lg:w-1/2 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
                <button class=" mt-2 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Get Directions 
          </button>
              </div>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                HBR Layout
              </h2>
              <p class="leading-relaxed text-base mb-4">
                #511,Outer ring road, 4th Block HBR layout, Bengaluru
              </p>
              <br/>
                <br/>
              <div class="lg:w-1/2 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
                <button class=" mt-2 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Get Directions 
          </button>
              </div>
            </div>
            <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Yelahanka
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Ground Floor, Amenities Building, North Gate Phase 2, Yelahanka,
                Bengaluru - 560064
                <br/>
<br/>
              </p>
              <div class="lg:w-1/2 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
                <button class=" mt-2 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                Get Directions 
          </button>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Make a Quick Enquiry
            </h1>
            <p class="mb-8 leading-relaxed">
              Fill in your details and we will get in touch with you.
            </p>
            <div class="w-full md:justify-start justify-center items-end">
              {/* <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"> */}

              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </div>
          </div>
          <div class="">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              height="200px"
              src="https://altiushospital.com/wp-content/uploads/2021/12/11.webp"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-15 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div
                  class="w-30 inline-flex items-center justify-center text-gray-400"
                  style={{ height: "25rem" }}
                >
                  <img
                    src="https://altiushospital.com/wp-content/uploads/2023/03/a-2.png"
                    alt="about"
                  />
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 class="text-3xl font-medium title-font mb-3 text-grey-900">
                  About Us
                </h1>
                <p class="leading-relaxed text-lg mb-4">
                  Altius Hospitals, Bangalore, has evolved as a leader in the
                  healthcare system because of its integrated model that
                  combines all services under one roof. From Cardiology and 24/7
                  emergency care to dialysis treatment and outpatient treatments
                  – Altius offers it all! Our world-class chain of
                  multi-specialty hospitals aims to treat people, not diseases.
                  We use cutting-edge technology and harness health for all our
                  patients so they can live their best lives possible. The
                  Altius team has the best medical professionals providing
                  excellent care, coupled with their rich experience and
                  expertise using state-of-the-art technology. The hospital also
                  offers comprehensive heart care, diagnostics, and treatment.
                  The patients can now avail cardiac care with our
                  state-of-the-art GE – IGS 520 cath lab.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Contact Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              
              <img
                    src="https://altiushospital.com/wp-content/uploads/2023/03/a-2.png"
                    alt="about"
                  />
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left ">
            
            <div class="lg:w-2/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Head Office
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800"># 6/63, 59th Cross, 4th Block, Rajajinagar Entrance, <br/>Opp. MEI Polytechnic, Near Ram Mandir, Bengaluru - <br/>560 010
</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">+91-8882799799</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">COVID - 19 FREE</a>
                </li>
                
              </nav>
            </div>
            <div class="lg:w-2/4 md:w-1/2 w-full px-4 ">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Recent Blog
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    <div className="flex">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/05/IUI-vs-IVF-Blog-Thumbnail.png" alt="rb-1" width="150px" height="150px"/>
                    
                    <div className="ml-2">
                      <h1>IUI vs. IVF: Which is right</h1>
                      <h1>23 May 2023</h1>
                    </div>
                    </div>
                  </a>
                </li>
                <li>
                <a class="text-gray-600 hover:text-gray-800">
                    <div className="flex">
                    <img src="https://altiushospital.com/wp-content/uploads/2023/05/Preparing-for-IUI-Treatment-Blog-Thumbnail-1.png" alt="rb-2" width="150px"/>
                    <div className="ml-2">
                      <h1>Preparing for IUI Treatement: Tips for success</h1>
                      <h1>23 May 2023</h1>
                    </div>
                    </div>
                  </a>
                </li>
                
              </nav>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
}

export default App;
