import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
        //it returns an object which called ninjas and it is equal to data which is defined above
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    // console.log(ninjas);
    return ( 
        <>
            <h1>Hi all ninjas</h1>
            {ninjas.map((ninja)=>{
                return (
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id} legacyBehavior>
                        <a className={styles.ninja}><h3>{ninja.name}</h3></a>
                    </Link>
                )
            })}
        </>
    );
}
 
export default Ninjas;