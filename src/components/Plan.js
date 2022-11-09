import React, { useState } from "react";
import { useEffect } from 'react';
import './Plan.css';




export default function PlanSection() {
    const [tab, setTab] = useState(true)
    useEffect(() => {
        const $buttons = document.querySelectorAll('.swtch__option');
        const $switch = document.querySelector('.swtch');

        $buttons[0].addEventListener('click', e => {
            $switch.classList.add('on');
        })
        $buttons[1].addEventListener('click', e => {
            $switch.classList.remove('on');
        })
    }, [])
    return (
        <div className="Plandiv">
            <div className="plandiv1">
                <div className="planhead">
                    <p className="phead">Build the right plan for your health</p>
                    <p className="pdescription">Lorem ipsum dolor sit amet consectetur adipiscing elit.Nunc odio in et,lectus sit lorem id integer</p>
                </div>
                <div className="pswitch">
                    <ul class="swtch on">
                        <li class="swtch__option option1" onClick={() => setTab(true)} >Monthly</li>
                        <li class="swtch__option option2" onClick={() => setTab(false)}>Yearly</li>
                    </ul>
                </div>
            </div>
            {tab ? (
                <div className="plandiv2">
                    <div className="row3">
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Starter</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$10.00</p>
                                <p className="cdescription1">Per month</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Pro</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$20.00</p>
                                <p className="cdescription1">Per month</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 10-Non commercial site</p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Plus</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$30.00</p>
                                <p className="cdescription1">Per month</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 10-Non commercial site</p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                    </div>


                </div>) : (
                <div className="plandiv2">
                    <div className="row3">
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Starter</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$100.00</p>
                                <p className="cdescription1">Per year</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Pro</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$200.00</p>
                                <p className="cdescription1">Per year</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 10-Non commercial site</p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                        <div className="card1">
                            <div className="cdata">
                                <p className="chead1">Plus</p>
                                <p className="cdescription">Go beyond email and customize your workflow</p>
                                <hr></hr>
                                <p className="cprice">$300.00</p>
                                <p className="cdescription1">Per year</p>
                                <hr></hr>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 1 Non-Commercial Site </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 500GB System Storage </p>
                                <p className="cdescription2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="check2" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg> 10-Non commercial site</p>
                            </div>
                            <button className='btn' >Select Plan</button>
                        </div>
                    </div>


                </div>

            )}



        </div>
    )
}