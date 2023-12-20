/**
 * Checkbox avec un libellé sur la droite
 *
 * @param {boolean} checked
 * @param {(value: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 * @param {string} classNameLabel
 */
export function Checkbox({ checked, onChange, label, id, classNameLabel }) {
  return (
    <div
      className={
        "flex items-center whitespace-nowrap overflow-hidden text-ellipsis rounded hover:bg-white hover:bg-opacity-20 p-2 m-2"
      }
    >
      <input
        type={"checkbox"}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
        className={"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"}
      />
      <label
        className={`ms-2 text-sm font-medium ${classNameLabel}`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
