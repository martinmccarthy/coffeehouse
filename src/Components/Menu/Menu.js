import * as motion from "motion/react-client"
import "./Menu.css"
import { AnimatePresence, animate } from "motion/react";

function Menu({isOpen}) {
    const MENU_ITEMS = [
        "About",
        "Shop",
        "Location",
        "Instagram"
    ]
    const DURATION = .4

    const menuStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: "#9b7b69"
    }

    function MenuList() {
        return(
            MENU_ITEMS.map((item, i) => {
                return(
                    <AnimatePresence initial={true}>
                    {isOpen ? (<motion.li 
                        className="link"
                        initial={{x: -200}}
                        animate={{ x: 0}}
                        exit={{x: -200}}
                        transition={{ duration: DURATION + (i / 10)}}
                        whileHover={{fontWeight: 700}}
                    >
                        {item}
                    </motion.li>) : null}

                    </AnimatePresence>
                )
            })
        )
    }

    return(
        <div className="menuContainer">
            <AnimatePresence initial={false}>
                {isOpen ? (
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity:0, scale:0}}
                        transition={{
                            duration: 0.4,
                            scale: {type: "spring", visualDuration: 0.4, bounce: .3}
                        }}
                        style={menuStyle}
                    >
                        <ul className="linksContainer">
                            <MenuList />
                        </ul>
                    </motion.div>
               ) : null
               } 
            </AnimatePresence>
        </div>
    )
}
export default Menu;
