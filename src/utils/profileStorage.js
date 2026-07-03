const PROFILE_KEY = "profile";

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getProfile() {
  const profile = localStorage.getItem(PROFILE_KEY);
  return profile ? JSON.parse(profile) : null;
}