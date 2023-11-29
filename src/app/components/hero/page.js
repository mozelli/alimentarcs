import styles from './styles.module.css'

export default function Hero() {
    return (
        <section className={ styles.container }>
            <div className="content">
                <div className={ styles.content }>
                    <h1>Alimentar com Saúde <strong>Receitas Saudáveis</strong></h1>
                    <h2>Simples, saboroso e saudável. Prepare-se para surpreender-se.</h2>
                    <button>Transforme sua alimentação agora!</button>
                </div>
            </div>
        </section>
    )
}