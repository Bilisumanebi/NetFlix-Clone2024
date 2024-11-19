import React from 'react'
import "./footer.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
      return (
            <div className='footer_outer_container'>
                  <div className='footer_inner_container'>
                        <div className='footer_icons'>
                              <FacebookIcon />
                              <InstagramIcon />
                              <YouTubeIcon />
                        </div>
                        <div className='footer_data'>
                              <div>
                                    <ul>
                                          <li>Audio Descriptions</li>
                                          <li>Invester Relations</li>
                                          <li>Lagal Notice</li>
                                    </ul>
                              </div>
                              <div>
                                    <ul>
                                          <li>Help Centre</li>
                                          <li>Jobs</li>
                                          <li>Cookie Prefrences</li>
                                    </ul>
                              </div>
                              <div>
                                    <ul>
                                          <li>Gift Cards</li>
                                          <li>Terms of Use</li>
                                          <li>Corporate information</li>
                                    </ul>
                              </div>
                              <div>
                                    <ul>
                                          <li>Media Centre</li>
                                          <li>Privacy</li>
                                          <li>Contact Us</li>
                                    </ul>
                              </div>
                        </div>
                        <div className='service_code'>
                              <p>Service Code</p>

                        </div>
                        <div className='copy-write'>
                              &Copy; 1997-2024 Netflix, Inc.

                        </div>
                  </div>

            </div>
      )
}

export default Footer