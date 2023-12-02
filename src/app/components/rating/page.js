import styles from './styles.module.css';

export default function Rating() {
    return (
        <section className={ styles.container }>
            <div className='content'>
                <h2><strong>Veja as avaliações</strong> sobre a Alimentar com Saúde</h2>
                <div className={ styles.cards }>
                  <div className={ styles.card }>
                    <p className={ styles.message }>
                      Esse programa é transformador. As orientações nutricionais e os shakes mudaram minha relação com a comida.
                    </p>
                    <div className={ styles.info }>
                      <div className={ styles.avatar }>
                        <img src='/avatar_01-optimized.jpg' alt='Foto da Helene, professora.' />
                      </div>
                      <div className={ styles.data }>
                        <p className={ styles.name }>Helena</p>
                        <p className={ styles.ocupation }>Professora</p>
                      </div>
                    </div>
                  </div>

                  <div className={ styles.card }>
                    <p className={ styles.message }>
                    As receitas do ebook mais os sucos detox são ótimas. Deixa a gente com uma sensação de leveza. Funcionam de verdade.
                    </p>
                    <div className={ styles.info }>
                      <div className={ styles.avatar }>
                        <img src='/avatar_02-optimized.jpg' alt='Foto do Vinícius, designer gráfico.' />
                      </div>
                      <div className={ styles.data }>
                        <p className={ styles.name }>Vinícius</p>
                        <p className={ styles.ocupation }>Designer</p>
                      </div>
                    </div>
                  </div>

                  <div className={ styles.card }>
                    <p className={ styles.message }>
                      As dicas do grupo do whatsapp são um suporte valioso. Super recomendo.
                    </p>
                    <div className={ styles.info }>
                      <div className={ styles.avatar }>
                        <img src='/avatar_03-optimized.jpg' alt='Foto do Vinícius, designer gráfico.' />
                      </div>
                      <div className={ styles.data }>
                        <p className={ styles.name }>Adriana</p>
                        <p className={ styles.ocupation }>Advogada</p>
                      </div>
                    </div>
                  </div>

                  <div className={ styles.card }>
                    <p className={ styles.message }>
                      Recomendo. Os resultados são reais. A proposta da reeducação alimentar funciona, porém a gente tem que querer. Não precisa passar fome para emagrecer.
                    </p>
                    <div className={ styles.info }>
                      <div className={ styles.avatar }>
                        <img src='/avatar_04-optimized.jpg' alt='Foto do Vinícius, designer gráfico.' />
                      </div>
                      <div className={ styles.data }>
                        <p className={ styles.name }>Cleide</p>
                        <p className={ styles.ocupation }>Cuidadora de idosos</p>
                      </div>
                    </div>
                  </div>

                  <div className={ styles.card }>
                    <p className={ styles.message }>
                      As receitas eu até já tinha conhecimento, mas o suporte e o incentivo do grupo são a chave para manter o foco e a motivação.
                    </p>
                    <div className={ styles.info }>
                      <div className={ styles.avatar }>
                        <img src='/avatar_05-optimized.jpg' alt='Foto do Vinícius, designer gráfico.' />
                      </div>
                      <div className={ styles.data }>
                        <p className={ styles.name }>Ulisses</p>
                        <p className={ styles.ocupation }>Empresário</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
        </section>
    )
}