import { useEffect } from "react";
import { useRouter } from "next/router";

export const useFingerprint = (): string | null => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { fingerprint } = router.query;

    if (fingerprint && typeof fingerprint === "string") {
      localStorage.setItem("dodoLabFingerprint", fingerprint);

      router.replace(
        {
          pathname: router.pathname,
          query: {
            source: "qr",
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [router]);

  return typeof window !== "undefined"
    ? localStorage.getItem("dodoLabFingerprint")
    : null;
};
