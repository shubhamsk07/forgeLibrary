
import { Link } from 'react-router-dom'

const DocsTitle = ({title}:{title:string}) => {
  return (
    <div>
         <p className='text-sm  '>
            <Link to={"/docs/introduction"} style={{ textDecoration: 'none' }} className=' text-secondary'>Docs</Link> {'>'} {title}</p>
    </div>
  )
}

export default DocsTitle