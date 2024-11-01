import { motion } from 'framer-motion';
import  { styles} from '@/style';
import { staggerContainer } from '@/lib/motion';


const SectionWrapper = ({ Component, idName }:{Component:any, idName:any}) =>
    function HOC(){
            return (
                <motion.section>
                    <Component />
                </motion.section>
            )
    }

export default SectionWrapper