import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function PDFpage(){
    return(
        <div>
            <h1>PDF Library</h1>
            <br></br>

            <h3>Coding Languages</h3>
            <ul>
                <li><a href="https://exploringjs.com/impatient-js/downloads/impatient-js-preview-book.pdf">Learn JavaScript</a></li>
                <li><a href="https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf">Intro to Programming Languages with Java</a></li>
            </ul>

            <h3>Frameworks</h3>
            <ul>
                <li><li><a href="https://files.eric.ed.gov/fulltext/EJ1154117.pdf">Theories and Frameworks</a></li></li>
                <li><li><a href="https://hr.un.org/sites/hr.un.org/files/OLF_2020_v1.2_0.pdf">Online Learning Frameworks</a></li></li>
            </ul>

            <h3>Backend</h3>
            <ul>
                <li><a href="https://www.newline.co/fullstack-react/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf">30 Days to React</a></li>
                <li><a href="https://www.departmentofproduct.com/wp-content/uploads/2017/10/Web-tech-Weeks-5-6-Lesson-1-what-are-backend-technologies.pdf">30 Days to React</a></li>
            </ul>
        </div>
        
    );
}