import { Input } from "./Input.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { TodoCategoryRow } from "../todos/TodoCategoryRow.jsx";

/**
 * Barre de recherhe et filtres pour la liste des tâches à faire
 *
 * @param {string} search
 * @param {(value: string) => void} onSearchChange
 * @param {boolean} showTodayOnly
 * @param {(value: boolean) => void} onTodayOnlyChange
 * @param {boolean} showCompleted
 * @param {(value: boolean) => void} onShowCompletedChange
 * @return {JSX.Element}
 */
export function Searchbar({
  search,
  onSearchChange,
  showTodayOnly,
  onTodayOnlyChange,
  showCompleted,
  onShowCompletedChange,
}) {
  /**
   * Il n'y a rien à voir ici...
   *
   * @param {event} event
   */
  const handleOnKeyUp = (event) => {
    if (event.key === "p") {
      console.log("Ça sent le p ici ! 💨");
    }
  };

  return (
    <div
      className={
        "rounded m-4 w-1/2 flex flex-col gap-4 p-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-lg"
      }
    >
      <Input
        value={search}
        onChange={onSearchChange}
        placeholder={"Rechercher une tâche..."}
        onKeyUp={handleOnKeyUp}
      />
      <div className={"flex gap-4 max-md:flex-col max-md:gap-1"}>
        <Checkbox
          id={"today"}
          checked={showTodayOnly}
          onChange={onTodayOnlyChange}
          label={"Aujourd'hui"}
        />
        <Checkbox
          id={"completed"}
          checked={showCompleted}
          onChange={onShowCompletedChange}
          label={"Tâches terminées"}
        />
      </div>
    </div>
  );
}
