/**
 * @param {String} value
 * @param {String} onChange
 * @param {String} placeholder
 * @param {String} className
 * @param {String} onKeyUp
 */
export function Input({
  value,
  onChange,
  placeholder,
  className,
  onKeyUp = null,
}) {
  return (
    <input
      type={"text"}
      className={`focus:outline-blue-700 placeholder-gray-900 bg-white bg-opacity-0 w-full p-4 outline outline-1 outline-slate-200 rounded ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={(e) => onKeyUp(e)}
    />
  );
}
