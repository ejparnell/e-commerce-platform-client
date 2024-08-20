import styled from 'styled-components'
const imgUrl = new URL('../../assets/pexels-mart-production-7679659.jpg', import.meta.url).href
import { cottanCandy } from '../../themes/cottonCandy'

const HeroImageContainer = styled.div`
    background-image: url(${imgUrl});
    background-size: cover;
    background-position: center;
    background-color: ${cottanCandy.primaryLight};
    height: 40vh;
`

const ProductsCatagoryContainer = styled.div`
    background-color: ${cottanCandy.primaryLight};
    height: 45vh;
`

export default function Home() {
    // const [products, setProducts] = useState([])

    return (
        <main>
            <HeroImageContainer />
            <ProductsCatagoryContainer />
        </main>
    )
}