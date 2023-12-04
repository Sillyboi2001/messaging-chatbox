import { Outlet } from "react-router-dom";
import { Card } from "../../components/card";

export const AuthenticationLayout = () => {
  return(
    <Card>
      <Card.Body>
        <Outlet />
      </Card.Body>
      <Card.Below>Sign</Card.Below>
    </Card>
  )
}