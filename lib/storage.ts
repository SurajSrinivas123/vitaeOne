export function hasSeenInSession(key: string): boolean {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem(key) === "true";
}

export function markSeenInSession(key: string): void {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(key, "true");
}