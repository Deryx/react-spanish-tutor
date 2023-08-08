import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import Siteheader from './siteHeader';

const Layout = ({ children }) => {
    const variants = {
        out: {
            opacity: 0,
            transition: {
                duration: 2
            }
        },
        in: {
            opacity: 1,
            transition: {
                duration: 2,
                delay: 1
            }
        }
    }
    return (
        <>
            <Siteheader />
            <motion.div
                variants={variants}
                animate='in'
                initial='out'
                exit='out'
            >
                { children }
            </motion.div>
        </>
    )
}

export default Layout;