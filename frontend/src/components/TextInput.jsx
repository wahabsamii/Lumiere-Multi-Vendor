function TextInput({lableText, error, errormessage, className = "", ...props }) {
  return (
    <div className="w-full mb-4">
        <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#39352f]"
                >
                  {lableText || "not assing"}
                </label>
      <input
        {...props}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }
          ${className}`}
      />

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {errormessage}
        </p>
      )}
    </div>
  );
}

export default TextInput;