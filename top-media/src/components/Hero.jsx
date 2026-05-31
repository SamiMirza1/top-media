import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/camera.png";

const buttonVariants = {
  hover: {
    scale: 1.03,
  },
};

const arrowVariants = {
  hover: {
    x: 6,
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const CameraPreview = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [status, setStatus] = useState("pending");
  const [errorMessage, setErrorMessage] = useState("");

  const requestCamera = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("error");
      setErrorMessage("Camera not supported in this browser.");
      return;
    }

    setStatus("pending");
    setErrorMessage("");

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        streamRef.current = stream;
        video.srcObject = stream;
        video
          .play()
          .then(() => setStatus("ready"))
          .catch(() => setStatus("ready"));
      })
      .catch((error) => {
        setStatus("error");
        setErrorMessage(
          error?.name === "NotAllowedError"
            ? "Camera access denied. Please allow camera permission and reload or retry."
            : "Unable to access the camera."
        );
      });
  };

  useEffect(() => {
    requestCamera();

    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  if (status === "error") {
    return (
      <div className="relative">
        <img
          src={heroImage}
          alt="Top Media camera"
          className="relative z-10 block w-full h-[520px] rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 gap-2">
          <p className="text-xs text-gray-100">{errorMessage}</p>
          <button
            type="button"
            onClick={requestCamera}
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-4 py-2 text-xs font-semibold text-black"
          >
            Retry Camera
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="relative z-10 block w-full h-[520px] rounded-2xl object-cover"
      />
      {status === "pending" && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl">
          <p className="text-sm text-white">Starting camera… please allow permission.</p>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-black px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="absolute inset-x-0 top-0 h-48 sm:h-64 md:h-72 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_35%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

      <div className="mx-auto flex flex-wrap md:flex-nowrap items-center justify-between max-w-7xl gap-6">
        <div className="flex-1 min-w-0 basis-full md:basis-[48%] lg:max-w-xl">
          <p className="text-yellow-500 tracking-[4px] uppercase mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
            TOP MEDIA
          </p>
          <div className="relative mb-4 sm:mb-5">
            <div className="h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400" />
            <span className="absolute -top-1 left-0 block h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Talking your <br />
            brand to the <span className="text-yellow-500">top</span>
          </h1>

          <div className="mt-4 sm:mt-6 h-1 w-16 sm:w-20 rounded-full bg-yellow-500" />

          <p className="mt-6 sm:mt-8 max-w-xl text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            High-quality video content that captures attention, builds trust, and grows your brand.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black shadow-[0_18px_60px_-40px_rgba(245,158,11,0.9)] w-full sm:w-auto"
            >
              Contact Us
              <motion.span variants={arrowVariants} className="inline-block ml-3">
                ?
              </motion.span>
            </motion.button>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto flex-1 min-w-0 basis-full md:basis-[48%] max-w-[540px] rounded-[40px]"
        >
          <div className="absolute -left-6 sm:-left-8 top-4 sm:top-10 h-32 sm:h-40 md:h-52 w-32 sm:w-40 md:w-52 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="absolute -right-6 sm:-right-10 bottom-2 sm:bottom-6 h-24 sm:h-32 md:h-40 w-24 sm:w-32 md:w-40 rounded-full bg-yellow-500/10 blur-3xl" />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-transparent"
          >
            <CameraPreview />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

