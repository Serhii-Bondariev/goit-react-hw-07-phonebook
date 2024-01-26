import axios from "axios";

const apiBaseUlr = axios.create({
  baseUrl: "https://65b2b0609bfb12f6eafe48ad.mockapi.io/",
});

export const fetchContacts = async () => {
  try {
    const { data } = await apiBaseUlr.get("/contacts");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async (contact) => {
  try {
    const { data } = await apiBaseUlr.post("/contacts", contact);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (contactId) => {
  try {
    const { data } = await apiBaseUlr.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
