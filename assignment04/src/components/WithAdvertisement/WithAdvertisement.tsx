import { useEffect, useRef, useState } from "react";

export interface AdProps {
  adText: string;
  adImage: string;
  triggerKey: number;
}

export interface AdOptions {
  adImages: string[];
  initialAdText: string;
  adLabel: string;
  resumeLabel: string;
  countdownStart: number;
  resumeCountdownStart: number;
}

const withAdvertisement = <P extends object>(
  WrappedComponent: React.ComponentType<P & AdProps>,
  options: AdOptions
) => {
  return (
    props: P & {
      triggerKey: number;
    }
  ) => {
    const [showAdImage, setShowAdImage] = useState<string>("");
    const [adText, setAdText] = useState<string>("");

    const timeoutRef = useRef<number | null>(null);
    const countdownRef = useRef<number | null>(null);
    const resumeRef = useRef<number | null>(null);

    useEffect(() => {
      if (!props.triggerKey) return;

      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
      if (countdownRef.current !== null) clearInterval(countdownRef.current);
      if (resumeRef.current !== null) clearInterval(resumeRef.current);

      setAdText(options.initialAdText);
      setShowAdImage("");

      timeoutRef.current = window.setTimeout(() => {
        let count = options.countdownStart;
        let resumeCount = options.resumeCountdownStart;

        countdownRef.current = window.setInterval(() => {
          setAdText(
            `${options.adLabel} 00:${count < 10 ? "0" + count : count}`
          );
          count--;
          if (count < 0) {
            if (countdownRef.current !== null)
              clearInterval(countdownRef.current);

            setShowAdImage(
              Math.random() > 0.5 ? options.adImages[0] : options.adImages[1]
            );
            setAdText(
              `${options.resumeLabel} 00:${
                resumeCount < 10 ? "0" + resumeCount : resumeCount
              }`
            );

            resumeRef.current = window.setInterval(() => {
              setAdText(
                `${options.resumeLabel} 00:${
                  resumeCount < 10 ? "0" + resumeCount : resumeCount
                }`
              );
              resumeCount--;
              if (resumeCount < 0) {
                if (resumeRef.current !== null)
                  clearInterval(resumeRef.current);
                setAdText("");
                setShowAdImage("");
              }
            }, 1000);
          }
        }, 1000);
      }, 50);

      return () => {
        if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
        if (countdownRef.current !== null) clearInterval(countdownRef.current);
        if (resumeRef.current !== null) clearInterval(resumeRef.current);
      };
    }, [props.triggerKey]);

    return (
      <WrappedComponent {...props} adText={adText} adImage={showAdImage} />
    );
  };
};

export default withAdvertisement;
