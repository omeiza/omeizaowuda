import React from 'react';
import { func, string } from 'prop-types';

const LightSwitch = ({theme,  toggleTheme }) => {
    return (
        <>
            <div className="lightswitch">
                <div className="ic light-mode w-embed">
                    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve">
                        <g id="_xD83D__xDEE0_-Enter-Page">
                            <g id="desktop_enter-copy-3" transform="translate(-995.000000, -2684.000000)">
                                <g id="Footer" transform="translate(-39.000000, 2496.000000)">
                                    <g id="Theming" transform="translate(1034.000000, 185.799848)">
                                        <path id="Sun-Icon" className="st0" d="M12,22.6c-0.3,0-0.5,0.2-0.6,0.5l0,0.1l0,2l0,0.1c0,0.3,0.3,0.5,0.6,0.5
                                            c0.3,0,0.5-0.2,0.6-0.5l0-0.1l0-2l0-0.1C12.6,22.8,12.3,22.6,12,22.6z M18.6,20c-0.2-0.1-0.5-0.1-0.7,0.1
                                            c-0.2,0.2-0.2,0.5-0.1,0.8l0.1,0.1l1.4,1.4l0.1,0.1c0.2,0.2,0.6,0.2,0.8-0.1c0.2-0.2,0.2-0.5,0.1-0.8l-0.1-0.1l-1.4-1.4L18.6,20
                                            L18.6,20z M6.1,20.1c-0.2-0.2-0.5-0.2-0.8-0.1l-0.1,0.1l-1.4,1.4l-0.1,0.1c-0.2,0.2-0.2,0.6,0.1,0.8c0.2,0.2,0.5,0.2,0.8,0.1
                                            l0.1-0.1L6,21l0.1-0.1C6.3,20.7,6.3,20.4,6.1,20.1L6.1,20.1z M12,8.6c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6
                                            S15.1,8.6,12,8.6z M12,9.8c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4S9.6,9.8,12,9.8z M3,13.6l-2,0l-0.1,0
                                            c-0.3,0-0.5,0.3-0.5,0.6c0,0.3,0.2,0.5,0.5,0.6l0.1,0l2,0l0.1,0c0.3,0,0.5-0.3,0.5-0.6C3.6,13.9,3.4,13.7,3,13.6L3,13.6z
                                            M23,13.6l-2,0l-0.1,0c-0.3,0-0.5,0.3-0.5,0.6c0,0.3,0.2,0.5,0.5,0.6l0.1,0l2,0l0.1,0c0.3,0,0.5-0.3,0.5-0.6
                                            C23.6,13.9,23.4,13.7,23,13.6L23,13.6z M4.5,5.9C4.3,5.8,4,5.8,3.8,6C3.6,6.2,3.6,6.5,3.7,6.8l0.1,0.1l1.4,1.4l0.1,0.1
                                            c0.2,0.2,0.6,0.2,0.8-0.1c0.2-0.2,0.2-0.5,0.1-0.8L6.1,7.4L4.7,6L4.5,5.9L4.5,5.9z M20.2,6c-0.2-0.2-0.5-0.2-0.8-0.1L19.4,6
                                            L18,7.4l-0.1,0.1c-0.2,0.2-0.2,0.6,0.1,0.8c0.2,0.2,0.5,0.2,0.8,0.1l0.1-0.1l1.4-1.4l0.1-0.1C20.4,6.6,20.4,6.3,20.2,6L20.2,6z
                                            M12,2.6c-0.3,0-0.5,0.2-0.6,0.5l0,0.1l0,2l0,0.1c0,0.3,0.3,0.5,0.6,0.5c0.3,0,0.5-0.2,0.6-0.5l0-0.1l0-2l0-0.1
                                            C12.6,2.8,12.3,2.6,12,2.6z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="toggle-theme w-embed">
                    <label htmlFor="toggleTheme" title="Toggle theme">
                        <input 
                            id="toggleTheme" 
                            name="theme" 
                            type="checkbox"
                            checked={theme === 'dark' ? true : false}
                            onChange={toggleTheme}
                        />
                        <div className="toggleTheme toggleThemeIcon"></div>
                    </label>
                </div>
                <div className="ic dark-mode w-embed">
                    <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve">
                        <g id="_xD83D__xDEE0_-Enter-Page">
                            <g id="desktop_enter-copy-3" transform="translate(-1104.000000, -2686.000000)">
                                <g id="Footer" transform="translate(-39.000000, 2496.000000)">
                                    <g id="Theming" transform="translate(1034.000000, 185.799848)">
                                        <path id="Moon-Icon" className="st0" d="M120.2,6.7L120.2,6.7l-0.4,0c-4.9,0.6-8.5,4.8-8.4,9.7c0.2,5,4.2,9,9.2,9.2
                                            c5,0.2,9.3-3.6,9.8-8.6c0-0.4-0.4-0.7-0.8-0.4c-2.6,1.9-6.2,1.6-8.5-0.6c-2.3-2.3-2.5-5.9-0.6-8.5
                                            C120.8,7.2,120.6,6.7,120.2,6.7z M118.9,7.9l0.1,0.1l-0.3,0.8c-1,2.7-0.3,5.8,1.8,7.9c1.9,1.9,4.7,2.6,7.3,1.9l0.3-0.1l0.3-0.1
                                            l0.8-0.3l0.1,0.1l-0.3,0.8c-1.2,3.4-4.6,5.7-8.3,5.6c-4.5-0.1-8.1-3.7-8.2-8.2c-0.1-3.5,1.9-6.7,5.1-8.1l0.3-0.1l0.3-0.1
                                            L118.9,7.9z">    
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <style jsx>{`
                .lightswitch {
                    display: flex;
                    position: fixed;
                    right: var(--sp-xl);
                    top: var(--sp-xl);
                    align-items: center;
                }

                .st0 {
                    fill: var(--text-color);
                }

                .st0:hover {
                    fill: var(--text-color-hover);
                }

                .toggleTheme {
                    position: static;
                    display: flex;
                    flex-direction: row;
                    align-items:center;
                    margin: auto;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    cursor: pointer;
                    height: 1.54rem;
                    transition: .4s;
                    background-color: none;
                    border-style: solid;
                    border-radius: 6.7rem;
                    border-width: 1px;
                    width: 2.7rem;
                    padding: .17rem;
                }
            
                .toggleTheme:before {
                    position: absolute;
                    content: '';
                    height: 1.2rem;
                    width: 1.2rem;
                    text-align: center;
                    transition: .4s;
                    border-radius: 100%;
                }
                   
                input[type="checkbox"] {
                    display: none;
                }
            
                input:checked+.toggleTheme {
                    background-color: none;
                }

                input:checked+.toggleTheme:before {
                    content: '';
                    transform: translateX(calc(2.7rem - 1.5rem - .17rem));
                }

                .w-embed:after {
                    clear: both;
                }

                .w-embed:after, .w-embed:before {
                    content: " ";
                    display: table;
                    grid-column-start: 1;
                    grid-row-start: 1;
                    grid-column-end: 2;
                    grid-row-end: 2;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 700;
                }

                .toggle-theme {
                    color: var(--text-color);
                    display: block;
                    margin: 2px 12px 0;
                    flex-direction: row;
                    justify-content: center;
                    align-items: flex-start;
                    align-self: auto;
                    flex: 0 auto;
                }

                .toggleTheme {
                    border-color: var(--text-color);
                }

                .toggleTheme:hover {
                    border-color: rgb(248, 100, 1);
                }

                .toggleTheme::before {
                    background-color: var(--text-color);
                }

                .toggleTheme:hover::before {
                    background-color: var(--text-color-hover);
                }

                .ic {
                    width: 28px;
                    height: 28px;
                }

                .ic.dark-mode, .ic.light-mode {
                    margin-top: -2px;
                }

                @media(max-width: 50em) {
                    .lightswitch {
                        position: relative;
                        top: unset;
                        right: unset;
                    }

                    .toggle-theme {
                        margin: 2px 6px 0;
                    }
                }
            `}</style>
        </>
    )
}

LightSwitch.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default LightSwitch;