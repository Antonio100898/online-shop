import { Card, Popconfirm } from "antd";
import { UserType } from "../../Api/Api";
import styles from "./UserCard.module.css"

const UserCard = (props: PropsType) => {
    const {user} = props
    return (
        <div>
          <Card size="small" title={user.name.firstname + ' ' + user.name.lastname} style={{ width: 200, margin: 20 }}>
            <p className={styles.text_center}><Popconfirm title={'pick this user?'}>
    <a href="#">Choose</a>
  </Popconfirm></p>
          </Card>
        
      
    </div>
    )
}
type PropsType = {
    user: UserType
}
export default UserCard