export const metadata = {
  title: 'Alimentar com Saúde',
  description: 'Explore um mundo de bem-estar e sabor com a Alimentar Com Saúde. Descubra receitas saudáveis, programas de alimentação equilibrada para transformar sua relação com a comida. Junte-se a nós nessa jornada de nutrição e emagrecimento. Seu caminho para uma vida mais saudável.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
      </head>
      
      <body>{children}</body>
    </html>
  )
}
