
import { AiFillHome } from 'react-icons/ai';
import { ImLeaf } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import { SiAsciidoctor } from 'react-icons/si';
import { PiStethoscopeThin } from 'react-icons/pi';
import './Icons.css'
import { Link } from 'react-router-dom';
const Icons = () => {
    const iconSize = 27;
    return (
        <div>
            <section
                className='fixed bottom-0
 left-0 right-0 p-4 rounded-t-
  flex justify-between  lightGreen '
            >
                <Link to='/home' style={{ color: '#7AA874' }}><AiFillHome size={32} /></Link>

                <Link to='/addsite' style={{ color: '#7AA874' }}><ImLeaf size={iconSize} /></Link>
                <Link to='/find' style={{ color: '#7AA874' }}>
                    <BsSearch size={iconSize} />
                </Link>
                <Link to='/identification'> <PiStethoscopeThin size={32} style={{ color: '#7AA874' }}></PiStethoscopeThin></Link>
                <Link to='/profile' style={{ color: '#7AA874' }}>
                    <SiAsciidoctor size={30} />
                </Link>

                {/* <AiFillProfile size={iconSize}/> */}
            </section>
        </div>
    );
};

export default Icons;