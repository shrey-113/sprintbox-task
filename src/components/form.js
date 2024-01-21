const FormComponent = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 block w-full border border-[#D0D5DD] rounded-md focus:border-[#2151FF] focus:ring focus:ring-[#2151FF] focus:ring-opacity-50 p-2  "
            id="name"
            name="name"
            placeholder="Your name"
            type="text"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mt-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 block w-full border border-[#D0D5DD] rounded-md focus:border-[#2151FF] focus:ring focus:ring-[#2151FF] focus:ring-opacity-50 p-2  "
            id="email"
            name="email"
            placeholder="you@company.com"
            type="email"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mt-2"
            htmlFor="phone"
          >
            Phone number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm p-2">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-[#D0D5DD]  bg-gray-50 text-gray-500 text-sm p-2">
              US +
            </span>
            <input
              className="flex-1 block border w-full rounded-none rounded-r-md border-[#D0D5DD]  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              id="phone"
              name="phone"
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mt-2"
            htmlFor="resume"
          >
            Upload your resume*
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400 " />
              <div className="flex text-sm text-gray-600 p-6">
                <label
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  htmlFor="file-upload"
                >
                  <span>Drop your file here or browse</span>
                  <input
                    className="sr-only"
                    id="file-upload"
                    name="file-upload"
                    type="file"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                Support PNG, JPG and SVG files
              </p>
            </div>
          </div>
        </div>
        <button className="mt-4 mb-16 w-full mx-auto bg-[#1872E7] text-white px-7 py-3 rounded-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

function UploadCloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

export default FormComponent;
