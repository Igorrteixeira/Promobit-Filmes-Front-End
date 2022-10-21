import {IMG_URL} from "../../constants/IMG_URL"
import {Container,Card,Character,Name,Img} from "./style"
export const CardDetails = (props) => {
    return (
        <Container>
            {props?.cast?.map(cast =>{
                if(cast.profile_path){
                return <Card key={cast.id}>
                    <Img src={IMG_URL+cast.profile_path} alt="" />
                    <Name>{cast.name}</Name>
                    <Character>{cast.character}</Character>
                </Card>
            }})}
        </Container>
    )

}