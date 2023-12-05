

import style from '../styles/User.module.css'

const UserCard = (props) => {
  const { name, age, mobileNumber } = props;
  return (
    <div className={style.card}>
      <div className={style.userInfo}>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Mobile Number:</strong> {mobileNumber}
        </p>
      </div>
    </div>
  );
};
export default UserCard
