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
    console.log(ninjas);
    return ( 
        <>
            <h1>Hi all ninjas</h1>
            {ninjas.map((ninja)=>{
                return (
                    <div key={ninja.id}>
                        <a className={styles.ninja}><h3>{ninja.name}</h3></a>
                    </div>
                )
            })}
        </>
    );
}
 
export default Ninjas;