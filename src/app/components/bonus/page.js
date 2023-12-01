import styles from './styles.module.css';

export default function Bonus() {
    return (
        <section className={ styles.container }>
            <div className='content'>
                <div className={ styles.content }>
                  <h2>Mais do que um livro de receitas: ganhe <strong>BÔNUS EXCLUSIVOS!</strong></h2>
                  <h3>Receba bônus exclusivos para elevar sua experiência ainda mais.</h3>
                  {/* Component */}
                  <div className={ styles.cards }>
                    <div className={ styles.card }>
                        <img src="/whatsapp-optimized.jpg" alt='Grupo no WhatsApp' />
                        <div className={ styles.info }>
                            <h4>Grupo de Acompanhamento</h4>
                            <p>Orientações diárias sobre escolhas alimentares, receitas exclusivas, dicas de bem-estar. Um espaço para compartilhar progressos, tirar dúvidas e motivação.</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img src="/sucos-detox-optimized.jpg" alt='Sucos Detox' />
                        <div className={ styles.info }>
                            <h4>Livro de Sucos Detox</h4>
                            <p>Explore uma variedade de receitas refrescantes que nutrem e impulsionam sua energia. Estes sucos são o complemento perfeito para seu novo estilo de vida saudável.</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img src="/shakes-emagrecedores-optimized.jpg" alt='Shakes Emagrecedores' />
                        <div className={ styles.info }>
                            <h4>O Manual dos Shakes</h4>
                            <p>Desfrute de uma explosão de sabores saudáveis em cada gole, enquanto esses Shakes Emagrecedores potentes trabalham para impulsionar seu emagrecimento.</p>
                        </div>
                    </div>
                    <div className={ styles.card }>
                        <img src="/temperos-optimized.jpg" />
                        <div className={ styles.info }>
                            <h4>Guia dos Temperos Caseiros</h4>
                            <p>Desvende segredos aromáticos que elevam o sabor dos seus pratos. Uma experiência culinária única. O toque especial que você precisa para tornar suas criações memoráveis.</p>
                        </div>
                    </div>
                  </div>
                  <button type='button'>Quero emagrecer da forma certa</button>
                </div>
            </div>  
        </section>
    )
}