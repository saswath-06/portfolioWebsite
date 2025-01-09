import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Frameworks, Languages, and Developer Tools
        </p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center w-28 h-28"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-white text-center text-sm mt-2 font-bold">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-8 font-semibold">
        <p className="text-gray-400 text-sm">Interact with us!</p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
