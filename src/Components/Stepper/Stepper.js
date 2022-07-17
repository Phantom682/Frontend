import React from "react";
import { useState } from "react";
import { Stepper, Button, Card, Group } from "@mantine/core";
import Signup from "../Signup/Signup.js";
import "../Signup/Signup.css";
import OTP from "../Otp/Otp.js";
import "./Stepper.css";
import {
  UserCheck,
  MailOpened,
  CircleCheck,
} from "tabler-icons-react";


function Steppers() {

  const [active, setActive] = useState(0);
  const nextStep = (n) =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <div className="step">
        <Stepper
          completedIcon={<CircleCheck />}
          classNames={{
            content: "your-content-class",
          }}
          styles={{
            content: { fontWeight: "bold", textAlign: "center" },
          }}
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
        >

          <Stepper.Step
            label="First step"
            icon={<UserCheck size={18} />}
            description="Create an account"
            allowStepSelect={active > 0}
          >
            <div style={{ width: 450, margin: "auto" }}>
              <Card shadow="xl">
                Step 1 content: Create an account
                <br />
                <br />
                <Signup nextStep={nextStep}/>
              </Card>
            </div>
          </Stepper.Step>

          <Stepper.Step
            label="Second step"
            icon={<MailOpened size={18} />}
            description="Verify email"
            allowStepSelect={active > 1}
          >
            <div style={{ width: 320, margin: "auto" }}>
              <Card shadow="xl">
                Step 2 content: Verify email
                <br />
                <br />
                <OTP />
              </Card>
            </div>
          </Stepper.Step>
          <Stepper.Completed allowStepSelect={active > 2}>
            Completed
          </Stepper.Completed>
        </Stepper>

        {/* <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep} id="nextbtn" className="next-btn">Next step</Button>
        </Group> */}

      </div>
    </>
  );
}

export default Steppers;
