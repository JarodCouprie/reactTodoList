/**
 * Ligne du tableau avec le nom de la catégorie
 *
 * @param {string} name
 */
export function TodoCategoryRow({ name }) {
  return (
    <div className={"font-bold py-4 text-center text-xl"}>
      {name}
    </div>
  );
}
