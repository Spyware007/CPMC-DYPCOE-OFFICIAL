import React, { useRef, useState } from 'react';
import classes from '../JoinPage/JoinPage.module.css';
import secondclasses from './MastersTalk.module.css';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const MasterTalk = () => {
  const nameInput = useRef('');
  const emailInput = useRef('');
  const phoneNumberInput = useRef();
  const academicYearInput = useRef();
  const branchInput = useRef();
  const questionInput = useRef();
  const question2Input = useRef();
  const greInput = useRef();
  const tofelInput = useRef();
  const gateInput = useRef();
  const ieltsInput = useRef();
  const duolingoInput = useRef();
  const aimInput = useRef();
  const [registered, setRegistered] = useState(false);
  const [visit, setVisit] = useState(0);

  const linkMap = ['https://chat.whatsapp.com/LIOZnHu3iXf5GGnPzw5epu'];

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/event1', {
        method: 'POST',
        body: JSON.stringify({
          name: nameInput.current.value,
          email: emailInput.current.value,
          phoneNumber: phoneNumberInput.current.value,
          branch: branchInput.current.value,
          academicYear: academicYearInput.current.value,
          question: questionInput.current.value,
          question2: question2Input.current.value,
          gre: greInput.current.value,
          tofel: tofelInput.current.value,
          gate: gateInput.current.value,
          ielts: ieltsInput.current.value,
          duolingo: duolingoInput.current.value,
          aim: aimInput.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) {
        toast.error('Something Went Wrong');
      }
      if (res.ok) {
        toast.success('Submitted successfully');
        setRegistered(true);
        window.scrollTo(0, 0);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      // const err = await error.json();
      // console.log(error);
    }
  };

  const Form = () => {
    return (
      <>
        <h1 className={classes.heading}>
          Register for the
          <br /> <span className={classes.red}> Masters&apos; Talk</span>
        </h1>
        <p className={classes.para}>Fill out the form below to register for the event.</p>
        <form className={classes.form}>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Name<span className={classes.mandatory}>*</span>
            </label>
            <input className={classes.input} placeholder="Rahul Sharma" ref={nameInput} />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Email<span className={classes.mandatory}>*</span>
            </label>
            <input
              className={classes.input}
              placeholder="rahulsharma@gmail.com"
              type="email"
              ref={emailInput}
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Phone Number<span className={classes.mandatory}>*</span>
            </label>
            <input className={classes.input} placeholder="0123456789" ref={phoneNumberInput} />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Academic Year<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={academicYearInput}>
              <option className={classes.option}>Choose your year</option>
              <option className={classes.option}>FE</option>
              <option className={classes.option}>SE</option>
              <option className={classes.option}>TE</option>
              <option className={classes.option}>BE</option>
            </select>
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Branch<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={branchInput}>
              <option>Choose your branch</option>
              <option>Computer Engineering</option>
              <option>IT Engineering</option>
              <option>AI&DS Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Robotics and Automation</option>
              <option>ENTC Engineering</option>
              <option>Civil Engineering</option>
              <option>Instrumental Engineering</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Are you aiming for further studies?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={aimInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
              <option>Maybe</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Do you know about GRE?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={greInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Do you know about TOFEL?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={tofelInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Do you know about GATE?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={gateInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Do you know about IELTS?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={ieltsInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Do you know about DUOLINGO English test?<span className={classes.mandatory}>*</span>
            </label>
            <select className={classes.input} ref={duolingoInput}>
              <option>Choose one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Question for Abroad Studies!<span className={classes.mandatory}></span>
            </label>
            <textarea
              className={classes.input}
              placeholder="Your question..."
              ref={questionInput}
            />
          </div>
          <div className={classes.input_container}>
            <label className={classes.input_label}>
              Question on Gate Examination!<span className={classes.mandatory}></span>
            </label>
            <textarea
              className={classes.input}
              placeholder="Your question..."
              ref={question2Input}
            />
          </div>

          <button className={classes.btn} onClick={submitFormHandler}>
            <div className={classes['svg-wrapper-1']}>
              <div className={classes['svg-wrapper']}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>SUBMIT</span>
          </button>
        </form>
      </>
    );
  };

  const buttonToggle = () => {
    setVisit((visit + 1) % 2);
  };

  const WhatsApp = () => {
    return (
      <div className={secondclasses.whatsappdiv}>
        <h1 className={classes.input_label} style={{ textAlign: 'center', fontWeight: 'bold', color:'green' }}>
          Successful Registered!!!
        </h1>
        <p style={{ textAlign: 'center' }}>
          Join any one of our WhatsApp group for further Events.
        </p>
        <br />
        <a
          href={linkMap[1]}
          style={{ backgroundColor: '#635f60' }}
          onClick={buttonToggle}
          className={classes.linkBtn}
        >
          WhatsApp Group 1(Full)
        </a>
        <a
          href={linkMap[0]}
          style={{ backgroundColor: '#4073ff' }}
          onClick={buttonToggle}
          className={classes.linkBtn}
        >
          WhatsApp Group 2
        </a>
      </div>
    );
  };

  return (
    <>
      <div className={classes.join_section} style={{ color: 'white' }}>
        <ToastContainer />
        {registered === true ? <WhatsApp /> : <Form />}
      </div>
    </>
  );
};

export default MasterTalk;
