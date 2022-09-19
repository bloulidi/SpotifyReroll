const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/";
const clientId = "6c21c232901a42f8bf07ff4db9d69a89";

const scopes = ["streaming", "user-read-email", "user-read-private"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
