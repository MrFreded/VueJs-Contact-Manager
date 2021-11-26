export default interface Contact {
  id: string;
  fullName: string;
  contactNo: string | number;
  imgUrl: string | null;
}

export type orderType = "asc" | "desc";
export type sortType = keyof Contact;
