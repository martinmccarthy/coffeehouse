import * as motion from "motion/react-client";
import "./Main.css";

function Main({COMPANY_NAME}) {
    const ABOUT_LINES = ["COFFEE", "BREWED", "IN LAKE", "NONA"];
    const DURATION = 0.4;

    return (
        <div className="main">
            <motion.h1 className="brandName"
                initial={{opacity: 0}}    
                animate={{opacity: 1}}
                transition={{duration: DURATION}}
            >
                {COMPANY_NAME}
            </motion.h1>

            <h1 className="about">
                {ABOUT_LINES.map((line, index) => (
                    <motion.span
                        key={line}
                        className="about-line"
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: DURATION, delay: index * 0.2 }}
                    >
                        {line}
                        <br />

                    </motion.span>
                    
                ))}
            </h1>
            {/* <div className="imgContainer">
                <motion.img
                    src="./img/coffee1.jpg"
                    style={{ width: "30vw" }}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 350, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="coffeeImg"
                />

            </div> */}
        </div>
    );
}

export default Main;
