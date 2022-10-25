import {IMG_URL} from "../../constants/IMG_URL"
import {Container,Card,Character,Name,Img} from "./style"
export const CardDetails = ({cast}) => {
    return (
        <Container>
            {cast?.map(cast =>{
                const {profile_path,id,name,character} = cast
                if(profile_path){
                return <Card key={id}>
                    <Img src={IMG_URL+profile_path} alt="" />
                    <Name>{name}</Name>
                    <Character>{character}</Character>
                </Card>
            }})}
        </Container>
    )

}