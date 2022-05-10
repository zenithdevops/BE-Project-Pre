import React, { useState } from "react";
import "./mainStyle.css";

function toLogin() {
  window.location.href = "/loginForm";
}

function MainPage() {
  return (
    <div>
      <section class="about" id="about">
        <div class="abt">
          <div class="left">
            <h2 style={{ color: "white" }}>
              Welcome to the NRCA System : Pulmonary Disease Diagnosis System
            </h2>
            <p>
              Inspiring from the recent pandemic situation and the stress
              enforced on the medical field as its result, we have designed and
              implemented this diagnosis system which will help in accurate and
              fast diagnosis of the pulmonary diseases (Covid-19 and Thorax)
              from the chest x-rays.
            </p>
            {/* <button > */}
            <a class="btn" onClick={toLogin} style={{ color: "white" }}>
              Login
            </a>
            {/* </button> */}
          </div>
          <div class="img">
            <img src="https://i.ibb.co/MBvKM3C/hero.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default MainPage;
