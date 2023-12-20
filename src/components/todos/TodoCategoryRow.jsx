/**
 * Titre de ligne du tableau avec le nom de la catégorie
 *
 * @param {string} name
 * @return {JSX.Element}
 */
export function TodoCategoryRow({ name }) {
  return <div className={"font-bold py-4 text-center text-xl"}>{name}</div>;
}
