import callApi from "../utils/call-api";

export const getCards = () => callApi("/cards", { method: "GET" });
export const postCard = body => callApi("/cards", { method: "POST", body });
export const deleteCard = id => callApi(`/cards/${id}`, { method: "DELETE" });