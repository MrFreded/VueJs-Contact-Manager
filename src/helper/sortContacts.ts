import contactType from "../interfaces/contact";

export const sortContacts = <contactType>(
  data: contactType[],
  keyToSort: keyof contactType,
  direction: "asc" | "desc"
): contactType[] => {
  const compare = (objectA: contactType, objectB: contactType) => {
    const valueA = objectA[keyToSort];
    const valueB = objectB[keyToSort];

    if (valueA === valueB) {
      return 0;
    }

    if (valueA > valueB) {
      return direction === "asc" ? 1 : -1;
    } else {
      return direction === "asc" ? -1 : 1;
    }
  };

  return data.slice().sort(compare);
};
