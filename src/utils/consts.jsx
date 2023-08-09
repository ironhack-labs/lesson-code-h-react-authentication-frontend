export const ACCESS_TOKEN = "authToken";

const URL = import.meta.env.REACT_APP_SERVER_URL;
export const SERVER_URL = URL ? `{URL}` : `http://localhost:5005`;

export const USER_ROLE = ["User", "Therapist"];
