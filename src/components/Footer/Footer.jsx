import styled from 'styled-components'
import { cottanCandy } from '../../themes/cottonCandy'

const FooterContainer = styled.footer`
    background-color: ${cottanCandy.primaryLight};
    color: ${cottanCandy.fontLight};
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: flex-end;
`

export default function Footer() {
    return (
        <FooterContainer>
            <p>Teaching site - Created by Elizabeth Parnell</p>
        </FooterContainer>
    )
}