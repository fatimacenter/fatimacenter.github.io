import Schedule from "../components/schedule";
import Schedule2 from "../components/schedule2";
import EnlistmentPanel from "../components/enlistmentPanel";
import  { Navigate } from 'react-router-dom'

function EnlistmentPage(props) {

  if (props.studentId === 0){
    return <Navigate to="/login" />
  }

    return <div className="enlistment-main">
      <EnlistmentPanel />
      <Schedule />
    </div>;
  }
  
export default EnlistmentPage;