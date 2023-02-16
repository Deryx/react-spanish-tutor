import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import Siteheader from './siteHeader';

const Layout = ({ children }) => {
    const variants = {
        out: {
            opacity: 0,
            x: 600,
            transition: {
                ease: 'easeOut',
                duration: 0.75
            }
        },
        in: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeIn',
                duration: 1,
                delay: 0.75
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