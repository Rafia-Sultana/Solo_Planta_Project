
import { AiFillHome } from 'react-icons/ai';
import { ImLeaf } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import { SiAsciidoctor } from 'react-icons/si';
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
        <Link to='/home' style={{ color: 'black' }}><AiFillHome size={32} /></Link>
        
        <ImLeaf size={iconSize} />
        <Link to='/find' style={{ color: 'black' }}>
        <BsSearch size={iconSize} />
        </Link>
        <Link to='/profile' style={{ color: 'black' }}>
        <SiAsciidoctor size={iconSize} />
        </Link>
        
        {/* <AiFillProfile size={iconSize}/> */}
      </section>
        </div>
    );
};

export default Icons;