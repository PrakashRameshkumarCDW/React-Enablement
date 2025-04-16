import { useEffect, useState } from "react";

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

    useEffect(() => {
      if (!props.triggerKey) return;

      setAdText(options.initialAdText);
      setShowAdImage("");

      const timer = setTimeout(() => {
        let count = options.countdownStart;
        let resumeCount = options.resumeCountdownStart;

        const countdown = setInterval(() => {
          setAdText(`${options.adLabel} 00:0${count}`);
          count--;
          if (count < 0) {
            clearInterval(countdown);

            setShowAdImage(
              Math.random() > 0.5 ? options.adImages[0] : options.adImages[1]
            );
            setAdText(`${options.resumeLabel} 00:0${resumeCount}`);

            const resumeInterval = setInterval(() => {
              setAdText(`${options.resumeLabel} 00:0${resumeCount}`);
              resumeCount--;
              if (resumeCount < 0) {
                clearInterval(resumeInterval);
                setAdText("");
                setShowAdImage("");
              }
            }, 1000);
          }
        }, 1000);
      }, 50);

      return () => clearTimeout(timer);
    }, [props.triggerKey]);

    return (
      <WrappedComponent {...props} adText={adText} adImage={showAdImage} />
    );
  };
};

export default withAdvertisement;
