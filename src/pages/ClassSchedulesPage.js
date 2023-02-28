import  { Navigate } from 'react-router-dom'

function ClassSchedulesPage(props) {
  if (props.studentId === 0){
    return <Navigate to="/login" />
  }

    return <div>

    </div>;
  }
  
export default ClassSchedulesPage;