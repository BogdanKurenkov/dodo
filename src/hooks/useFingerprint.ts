export const useFingerprint = (): string | null => {
  return typeof window !== "undefined"
    ? localStorage.getItem("dodoLabFingerprint")
    : null;
};
