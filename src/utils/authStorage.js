const STORAGE_KEY = "loggedInUser";

// Saves the details entered at login
export function saveLoginInfo({ email, companyName }) {
  const data = { email, companyName };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

// Returns the saved login info, or null if the user hasn't logged in
export function getLoginInfo() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// Clears the saved login info (e.g. on logout)
export function clearLoginInfo() {
  localStorage.removeItem(STORAGE_KEY);
}