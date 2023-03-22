import QRcode_portfolio from '../assets/qrcode-portfolio-thomgomes.png'
import { Paragraph } from '../components/paragraph'
import { QRCode } from '../components/QRcode'
import { Title } from '../components/title'



export const Card = () => {
  return (
    <div className="bg-BaseWhite w-80 px-4 pt-4 rounded-3xl flex flex-col justify-center text-center">
      <QRCode img={QRcode_portfolio} alt='QRcode' p='p-12' />
      <Title text='Acesse meu Portfólio' />
      <Paragraph text='escaneie o código QR para visitar o Portfólio-ThomGomes' />
    </div>
  )
}