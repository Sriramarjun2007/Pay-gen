const STORAGE_KEY = "payslips";

// Returns all saved payslips, newest first
export function getPayslips() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Adds a new payslip record to storage
export function savePayslip(record) {
  const existing = getPayslips();
  const newRecord = {
    ...record,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  const updated = [newRecord, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newRecord;
}

// Removes all saved payslips
export function clearPayslips() {
  localStorage.removeItem(STORAGE_KEY);
}
