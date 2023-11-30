import styles from './styles.module.css';

export default function Info() {
    return (
      <section className={ styles.container }>
        <div className="content">
          <div className={ styles.content }>
            <img src="/prato01-optimized.jpg" alt='Quatro pratos de comidas saudáveis' />
            <div className={ styles.imageInfo }>
              <h2>
                Transoforme a sua relação com a comida e conquiste o <strong>corpo saudável que sempre sonhou</strong>.
              </h2>
              <p>
                Explore uma jornada culinária que vai além do sabor.
              </p>
              <p>
                Mergulhe em um universo de <strong>receitas saudáveis</strong> que transformarão completamente sua relação com a comida.
              </p>
              <p>
                Nosso livro é mais do que um guia, é um convite para conquistar o <strong>corpo saudável</strong> que sempre habitou seus sonhos.
              </p>
              <p>
                Descubra o prazer de preparar pratos deliciosos, enquanto nutre o seu corpo com ingredientes que fazem a diferença.
              </p>
              <p>
                Cada página é uma oportunidade de reinventar sua abordagem à alimentação, proporcionando não apenas refeições, mas uma <strong>experiência transformadora</strong>.
              </p>
              <button href="/">Quero grantir meu ebook</button>
            </div>
          </div>
        </div>
      </section>
    )
}