import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import Siteheader from './siteHeader';

const Layout = ({ children }) => {
    const variants = {
        out: {
            opacity: 0,
            y: 600,
            transition: {
                ease: 'easeOut',
                duration: 1
            }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeIn',
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