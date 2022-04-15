import { Card } from "antd"
import { Product } from "../../../Api/Api"

const {Meta} = Card

const ProductCard: React.FC<PropsType> = ({product}) => {
    const {id, image, title, price, category, description } = product
    return ( 
        <Card
    hoverable
    style={{ width: 240, margin: 50 }}
    cover={<img alt="example" src={image} />}
  >
    <Meta title={title} description={category} />
  </Card>
    )
}
type PropsType = {
    product: Product
}
export default ProductCard